import React from 'react';
import './leaderboard.css';


export function Leaderboard() {
  return (
    <main className="text-center">
      <h1>By Definition</h1>
      <h2>1/23/2026</h2>
      <table className='table'>
        <thead className='table-group-divider'>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          <tr>
            <td>1</td>
            <td>user1</td>
            <td>4</td>
          </tr>
          <tr>
            <td>2</td>
            <td>user5</td>
            <td>12</td>

          </tr>
          <tr>
            <td>3</td>
            <td>user4</td>
            <td>17</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}