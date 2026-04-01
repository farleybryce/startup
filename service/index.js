const { getTargetInfo, getDate } = require('./wordList.js');

const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();
const DB = require('./database.js');  

const authCookieName = 'token';

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.username, req.body.password);

    setAuthCookie(res, user.token);
    res.send({ username: user.username });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await findUser('username', req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      user.token = uuid.v4();
      await DB.updateUser(user);
      setAuthCookie(res, user.token);
      res.send({ username: user.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    await DB.updateUserRemoveAuth(user);
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const user = await findUser('token', req.cookies[authCookieName]);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

// GetScores
apiRouter.get('/scores', verifyAuth, async (_req, res) => {
  const today = getDate();
  scoresObj = await DB.getScores(today);
  res.send(scoresObj.scores ?? []);
});

// SubmitScore
apiRouter.post('/score', verifyAuth, async (req, res) => {
  const today = getDate();

  scoresObj = await DB.getScores(today);

  const existingScores = scoresObj?.scores ?? [];

  scores = updateScores(existingScores, req.body);

  await DB.saveScores(today, scores);

  res.send(scores);
});

// Get saved game state
apiRouter.get('/state', verifyAuth, async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);

  const date = req.query.date;

  const userState = await DB.getState(user.username, date);

  res.send(userState ? userState.state : null);
});

// Save game state
apiRouter.post('/state', verifyAuth, async (req, res) => {
  const user = await findUser('token', req.cookies[authCookieName]);

  const { date, state } = req.body;

  await DB.saveState(user.username, date, state);

  res.send({ msg: 'State saved' });
});

// Get start and target words
apiRouter.get('/initialize', verifyAuth, async (req, res) => {
    res.send(getTargetInfo());
});

// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

// updateScores considers a new score for inclusion in the high scores.
function updateScores(scoreList, newScore) {
  let found = false;

  for (const [i, prevScore] of scoreList.entries()) {
    if (newScore.score < prevScore.score) {
      scoreList.splice(i, 0, newScore);
      found = true;
      break;
    }
  }

  if (!found) {
    scoreList.push(newScore);
  }

  if (scoreList.length > 10) {
    scoreList.length = 10;
  }

  return scoreList;
}

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
  };
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  if (field === 'token') {
    return DB.getUserByToken(value);
  }
  return DB.getUser(value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
