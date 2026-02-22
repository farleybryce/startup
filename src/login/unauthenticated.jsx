import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div className='text-center'>
        {/* <div className='input-group mb-3'> */}
          <input type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='your@email.com' />
        {/* </div> */}
        <br></br>
        <br></br>
        {/* <div className='input-group mb-3'> */}
          <input type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        {/* </div> */}
        <br></br>
        <br></br>
        <Button variant='light' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <span> </span>
        <Button variant="btn btn-outline-light" onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
