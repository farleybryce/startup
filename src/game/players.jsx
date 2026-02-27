import React from 'react';
import { GameEvent, GameNotifier } from './gameNotifier';
// import './players.css';

export function Players() {
  const [playerWords, setPlayerWords] = React.useState({});

  React.useEffect(() => {
    function handleGameEvent(event) {
      if (event.type === GameEvent.System && event.value?.currentWord) {
        setPlayerWords(prev => ({
          ...prev,
          [event.from]: event.value.currentWord
        }));
      }
    }

    GameNotifier.addHandler(handleGameEvent);
    return () => GameNotifier.removeHandler(handleGameEvent);
  }, []);

  return (
    <div className='players'>
      {Object.entries(playerWords).map(([player, word]) => (
        <div key={player} className='player'>
          <span className='player-name'>{player}</span> is viewing : <span className='player-word'>{word}</span>
        </div>
      ))}
    </div>
  );
}