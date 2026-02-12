import React from 'react';
import './game.css';

export function Game() {
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
          <div className="word">dictionary</div>
          <div className="phonetic">dikˈʃenˌeri</div>
          <div className="score">[score]</div>
        </div>      
        <hr/>
        <p>
            [example placeholder for api call] <br></br>
            1. A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data.<br></br>
            2. (preceded by the) A synchronic dictionary of a standardised language held to only contain words that are properly part of the language.<br></br>
            3. (by extension) Any work that has a list of material organized alphabetically; e.g., biographical dictionary, encyclopedic dictionary.<br></br>
            4. An associative array, a data structure where each value is referenced by a particular key, analogous to words and definitions in a physical dictionary.
        </p>
        <hr/>
        <span>[friend activity/websocket placeholder]<br></br></span>
        <span>user1 is viewing [word]<br></br></span>
        <span>user2 is viewing [word]<br></br></span>
        <br></br>

    </main>
  );
}