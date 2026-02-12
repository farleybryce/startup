import React from 'react';

export function Login() {
  return (
    <main className="text-center">
      <br></br>
      <h1 id="home_title">By Definition</h1>
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
    </main>
  );
}