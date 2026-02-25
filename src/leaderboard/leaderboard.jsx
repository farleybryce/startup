import React from 'react';
import './leaderboard.css';
import { getDate } from '../date_score';


export function Leaderboard() {

  const [scores, setScores] = React.useState([]);
  const [date, setDate] = React.useState("");

  React.useEffect(() => {
    const scoresText = localStorage.getItem('scores');
    if (scoresText) {
      setScores(JSON.parse(scoresText));
    }
    setDate(getDate());
  }, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{score.name.split('@')[0]}</td>
          <td>{score.score}</td>
          <td>{score.date}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>No Scores Yet</td>
      </tr>
    );
  }  
  
  return (
    <main className="text-center">
      <h1>By Definition</h1>
      <h2>{date}</h2>
      <table className='table'>
        <thead className='table-group-divider'>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody className='table-group-divider' id='scores'>{scoreRows}</tbody>
      </table>
    </main>
  );
}