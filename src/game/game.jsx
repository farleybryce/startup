import React from 'react';
import './game.css';
import  {convertDefinitionsToString, getEntry, getPhonetic} from './definition_call'
import { getTargetInfo } from './target_info';

export function Game() {
  const [startWord, targetWord] = getTargetInfo() ?? ["start", "target"];
  
  const [clickedWord, setClickedWord] = React.useState(startWord);
  const [wordPhonetic, setPhonetic] = React.useState("");
  const [paragraph, setDefinition] = React.useState("")
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    async function loadStartWord() {
      const entry = await getEntry(startWord);
      setPhonetic(getPhonetic(entry));
      setDefinition(convertDefinitionsToString(entry));
    }

    loadStartWord();
  }, [startWord]);

  async function updateEntry(word) {
    
    const entry = await getEntry(word);
    const phonetic = getPhonetic(entry);
    const definition = convertDefinitionsToString(entry);

    setClickedWord(word);
    setPhonetic(phonetic);
    setDefinition(definition);
    setScore(prev => prev + 1);

    
  }

  /*
  async function saveScore(score) {
    const newScore = {name: userName, score: score};

    // Let other players know the game has concluded
    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);

    updateScoresLocal(newScore);
  }


  function updateScoresLocal(newScore) {
    let scores = [];
    const scoresText = localStorage.getItem('scores');
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

    localStorage.setItem('scores', JSON.stringify(scores));
  }
  */
  
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
        <span>[friend activity/websocket placeholder]<br></br></span>
        <span>user1 is viewing [word]<br></br></span>
        <span>user2 is viewing [word]<br></br></span>
        <br></br>

    </main>
  );
}