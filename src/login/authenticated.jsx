import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';


export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('userName');
    props.onLogout();
  }

  return (
    <div>
      <h2>Welcome</h2>
      <br></br>
      <div className='playerName'>{props.userName}</div>
      <br></br>
      <br></br>
      <Button variant='light' onClick={() => navigate('/game')}>
        Play
      </Button>
      <span> </span>      
      <Button variant="btn btn-outline-light" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
