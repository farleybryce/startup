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
    const phonetic = getPhonetic(entry[0]);
    const definition = convertDefinitionsToString(entry);

    setClickedWord(word);
    setPhonetic(phonetic);
    setDefinition(definition);
    const newScore = score + 1;
    if (!targetReached) {
      setScore(newScore); 
    }
    

    GameNotifier.broadcastEvent(userName, GameEvent.System, { currentWord: word });

    if (!targetReached && word === targetWord) {
      setTargetReached(true);
      saveScore(newScore);
    }     

  }

  React.useEffect(() => {
    async function loadState() {
      const today = getDate();
      const res = await fetch(`/api/state?date=${today}`);
      const data = await res.json();

      if (!data || !data.clickedWord) {
        await loadStartWord();
        return;
      }

      setClickedWord(data.clickedWord);
      setScore(data.score ?? 0);
      setTargetReached(data.targetReached ?? false);

      const entry = await getEntry(data.clickedWord); // reload definition & phonetic
      setPhonetic(getPhonetic(entry[0]));
      setDefinition(convertDefinitionsToString(entry));
    }

    loadState();
  }, [userName]);

  React.useEffect(() => {
    if (!clickedWord || !paragraph) return; // skip save until data is loaded

    async function saveState() {
      const today = getDate();
      const gameState = { clickedWord, wordPhonetic, paragraph, score, targetReached };
      await fetch('/api/state', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date: today, state: gameState })
      });
    }

    saveState();
  }, [clickedWord, wordPhonetic, paragraph, score, targetReached, userName]);

  async function saveScore(score) {
    const newScore = { name: userName, score: score };
    
    await fetch('/api/score', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newScore),
    });
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
          <div className="score" id='score' style={{ color: targetReached ? "green" : "inherit" }}>Score: {score}</div>
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