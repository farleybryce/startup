import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return <div className="body bg-dark text-light">
    <header>
      <nav className="navbar fixed-top">
        <menu>
          <li className="nav-item"><a href="index.html">Home</a></li>
          <li className="vert_bar">|</li>
          <li className="nav-item"><a href="game.html">Daily Game</a></li>
          <li className="vert_bar">|</li>
          <li className="nav-item"><a href="leaderboard.html">Leaderboard</a></li>
          <li className="vert_bar">|</li>
          <li className="nav-item"><a href="how_to_play.html">How to Play</a></li>
        </menu>
      </nav>
    </header>
    

    <main>App components go here</main>

    <footer>
      <div className="footer_content">Logged in as: [user]</div>
      <div className="footer_content">Author: Bryce Farley</div>
      <a  className="footer_content" href="https://github.com/farleybryce/startup.git">GitHub</a>
    </footer>
  </div>;
}