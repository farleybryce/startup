import React from 'react';
import './game.css';
import  {convertDefinitionsToString, getEntry, getPhonetic} from '../service'

export function Game() {
  

  const [clickedWord, setClickedWord] = React.useState("dictionary");
  const [wordPhonetic, setPhonetic] = React.useState("dikˈʃenˌeri");
  const [paragraph, setDefinition] = React.useState("This is some text to click on. dictionary cobalt velvet harbor run set off")
  const [score, setScore] = React.useState(0);

  async function updateEntry(word) {
    
    const entry = await getEntry(word);
    const phonetic = getPhonetic(entry);
    const definition = convertDefinitionsToString(entry);

    setClickedWord(word);
    setPhonetic(phonetic);
    setDefinition(definition);
    setScore(prev => prev + 1);
  }

  return (
    <main>
        <h1 className="text-center">By Definition</h1>
        <br></br>
        <div id="target">
          <span>Start</span> 
          <span> → </span>
          <span>Target</span>
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