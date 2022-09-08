import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';
import Button from 'react-bootstrap/Button';

function LoginButton() {
const {isAuthenticated,loginWithRedirect,} = useAuth0();


  return !isAuthenticated && (
    <>
 <Welcome />
    <Button class="btn btn-warning" onClick={loginWithRedirect} >Log in</Button>
    </>
  );
}

export default LoginButton;