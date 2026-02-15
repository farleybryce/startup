import React from 'react';
import './game.css';

export function Game() {
  

  const [clickedWord, setClickedWord] = React.useState("");

  const handleClick = (event) => {
    const selection = window.getSelection();
    let word = selection.toString().trim();

    if (word) {
      // Only take the first word if multiple selected
      word = word.split(/\s+/)[0];
      setClickedWord(word);
    }
  };

  const paragraph =  "1. A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data."

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
          <div className="phonetic" id='phoneetic'>dikˈʃenˌeri</div>
          <div className="score" id='score'>[score]</div>
        </div>      
        <hr/>
        <div className='paragraph_container'>
          <p className='clickable_paragraph'>
            {paragraph.split(/(\s+)/).map((word, idx) => (
              <span
                className='clickable_word'
                key={idx}
                onClick={() => setClickedWord(word.replace(/[.,!?]/g,""))}
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