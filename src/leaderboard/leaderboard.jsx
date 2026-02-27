import React from 'react';
import './leaderboard.css';
import { getDate } from '../date_score';


export function Leaderboard() {

  const [scores, setScores] = React.useState([]);
  const [date, setDate] = React.useState("");

React.useEffect(() => {
  const today = getDate();
  setDate(today);

  const scoresText = localStorage.getItem(`scores_${today}`);
  if (!scoresText) return;

  try {
    const parsed = JSON.parse(scoresText);
    if (Array.isArray(parsed)) {
      setScores(parsed);
    }
  } catch (err) {
    console.error("Invalid scores in localStorage", err);
  }
}, []);

  const scoreRows = [];
  if (scores.length) {
    for (const [i, score] of scores.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{score.name}</td>
          <td>{score.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='3'>No Scores Yet</td>
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