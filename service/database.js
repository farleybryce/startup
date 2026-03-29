const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const scoreCollection = db.collection('score');
const stateCollection = db.collection('state');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUser(username) {
  return userCollection.findOne({ username: username });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ username: user.username }, { $set: user });
}

async function updateUserRemoveAuth(user) {
  await userCollection.updateOne({ username: user.username }, { $unset: { token: 1 } });
}

async function saveState(username, date, state) {
  await stateCollection.updateOne(
    { username: username, date: date },
    { $set: { state: state } },
    { upsert: true }
  );
}

function getState(username, date) {
  return stateCollection.findOne({ username: username, date: date });
}

async function saveScores(date, scoresList) {
    await scoreCollection.updateOne(
        { date: date },
        { $set: { scores: scoresList } },
        { upsert: true }
    )
}

function getScores(date) {
  return scoreCollection.findOne({ date: date });
}



module.exports = {
  getUser,
  getUserByToken,
  addUser,
  updateUser,
  updateUserRemoveAuth,
  saveState,
  getState,
  saveScores,
  getScores
};