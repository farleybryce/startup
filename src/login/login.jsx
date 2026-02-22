import React from 'react';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';

export function Logina() {
  return (
    <main className="text-center">
      <br></br>
      <h1 id="home_title">By Definition</h1>
      <div>
        <form method="get" action="game" id="login">
        <div className="textbox">
          <input type="text" placeholder="username" />
        </div>
        <div className="textbox">
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create</button>
        </form>
      </div>
    </main>
  );
}

export function Login({ userName, authState, onAuthChange }) {
  return (
    <main className='text-center'>
      <div>
        {authState !== AuthState.Unknown && <h1 id="home_title">By Definition</h1>}
        {authState === AuthState.Authenticated && (
          <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        )}
        {authState === AuthState.Unauthenticated && (
          <Unauthenticated
            userName={userName}
            onLogin={(loginUserName) => {
              onAuthChange(loginUserName, AuthState.Authenticated);
            }}
          />
        )}
      </div>
    </main>
  );
}