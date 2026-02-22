import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Game } from './game/game';
import { Leaderboard } from './leaderboard/leaderboard';
import { How_To_Play } from './how_to_play/how_to_play';
import { AuthState } from './login/authState';

export default function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
  <BrowserRouter>
    <div className="app">
      <header>
        <nav className="navbar fixed-top">
          <menu>
            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            <li className="vert_bar">|</li>
            <li className="nav-item"><NavLink to="game">Daily Game</NavLink></li>
            <li className="vert_bar">|</li>
            <li className="nav-item"><NavLink to="leaderboard">Leaderboard</NavLink></li>
            <li className="vert_bar">|</li>
            <li className="nav-item"><NavLink to="how_to_play">How to Play</NavLink></li>
          </menu>
        </nav>
      </header>
      

      <Routes>
        <Route path='/' element={
          <Login 
            userName={userName}
            authState={authState}
            onAuthChange={(userName, authState) => {
              setAuthState(authState);
              setUserName(userName);
            }}/>} exact 
          />
        <Route path='/game' element={<Game />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/how_to_play' element={<How_To_Play />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
        <div className="footer_content">Logged in as: [user]</div>
        <div className="footer_content">Author: Bryce Farley</div>
        <a  className="footer_content" href="https://github.com/farleybryce/startup.git">GitHub</a>
      </footer>
    </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}