import React from 'react';
import './game.css';
import  {convertDefinitionsToString, getEntry, getPhonetic} from './definition_call'
import { getTargetInfo } from './target_info';
import { getDate } from '../date';
import { Players } from './players';
import { GameNotifier, GameEvent } from './gameNotifier';

export function Game({userName}) {
  const [startWord, targetWord] = getTargetInfo() ?? ["start", "target"];
  
  const [targetReached, setTargetReached] = React.useState(false);
  
  const [clickedWord, setClickedWord] = React.useState(startWord);
  const [wordPhonetic, setPhonetic] = React.useState("");
  const [paragraph, setDefinition] = React.useState("")
  const [score, setScore] = React.useState(0);


  async function loadStartWord() {
    const entry = await getEntry(startWord);
    setPhonetic(getPhonetic(entry));
    setDefinition(convertDefinitionsToString(entry));
  }

  async function updateEntry(word) {
    
    const entry = await getEntry(word);
    const phonetic = getPhonetic(entry);
    const definition = convertDefinitionsToString(entry);

    setClickedWord(word);
    setPhonetic(phonetic);
    setDefinition(definition);
    const newScore = score + 1;
    setScore(newScore);

    GameNotifier.broadcastEvent(userName, GameEvent.System, { currentWord: word });

    if (!targetReached && word === targetWord) {
      setTargetReached(true);
      saveScore(newScore);
    }     

  }

  React.useEffect(() => {
  const today = getDate();
  const key = `gameState_${userName}_${today}`;

  const saved = localStorage.getItem(key);
  if (!saved) {
    loadStartWord();
    return;
  }

  const data = JSON.parse(saved);

  setClickedWord(data.clickedWord);
  setPhonetic(data.wordPhonetic);
  setDefinition(data.paragraph);
  setScore(data.score);
  setTargetReached(data.targetReached);
  }, [userName]);

  React.useEffect(() => {
    const today = getDate();
    const key = `gameState_${userName}_${today}`;

    const gameState = {
      clickedWord,
      wordPhonetic,
      paragraph,
      score,
      targetReached
    };

    localStorage.setItem(key, JSON.stringify(gameState));
  }, [clickedWord, wordPhonetic, paragraph, score, targetReached, userName]);

  async function saveScore(score) {
    const newScore = { name: userName, score: score };

    updateScoresLocal(newScore);
  }

  function updateScoresLocal(newScore) {
    const today = getDate();
    const key = `scores_${today}`;
    
    const scoresText = localStorage.getItem(key);
    let scores = [];
    if (scoresText) {
      scores = JSON.parse(scoresText);
    }

    let found = false;
    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score < prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) {
      scores.push(newScore);
    }

    if (scores.length > 10) {
      scores.length = 10;
    }

    localStorage.setItem(key, JSON.stringify(scores));
  }

  return (
    <main>
        <h1 className="text-center">By Definition</h1>
        <br></br>
        <div id="target">
          <span>{startWord}</span> 
          <span> → </span>
          <span>{targetWord}</span>
        </div>
        <br></br>
        <div className="header">
          <div className="word" id='current_word'>{clickedWord}</div>
          <div className="phonetic" id='phoneetic'>{wordPhonetic}</div>
          <div className="score" id='score'>Score: {score}</div>
        </div>      
        <hr/>
        <div className='paragraph_container'>
          <p className='clickable_paragraph'
              style={{ whiteSpace: "pre-wrap" }}>
            {paragraph.split(/(\s+)/).map((word, idx) => (
              <span
                className='clickable_word'
                key={idx}
                onClick={() => updateEntry(word.replace(/('s\b|[.,!?;"():])/g, "").toLowerCase())}
                style={{ cursor: "pointer"}}
              >
                {word}
              </span>
            ))}
          </p>
        </div>        
        <hr/>
          <Players/>
        <br></br>

    </main>
  );
}