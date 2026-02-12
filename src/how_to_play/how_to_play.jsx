import React from 'react';
import './how_to_play.css';

export function How_To_Play() {
  return (
    <main>
      <h1 className="text-center">By Definition - How To Play</h1>
      <p>
        By Definition is a game where players attempt to reach a target word from a starting word by accessing the definition of an intermediate word that appears in the definition of either the starting word or a previously accessed intermediate word. The starting word definition will be displayed and any of the words that appear within it can be clicked on to access their definition. The player can then select a word in this second word's definition. This process is then repeated until the target word is accessed. A counter will determine how many steps it took the player and a scoreboard will rank players for a daily challenge. 
      </p>
      <hr/>
      <div className="image_container">
        <img src="book.png" alt="dictionary pixel art"></img>
      </div>
      <br></br>
    </main>
  );
}