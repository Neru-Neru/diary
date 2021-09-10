import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const inputUsername = useCallback(
    (event) => {
      console.log(event.target.value);
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event) => {
      console.log(event.target.value);
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      console.log(event.target.value);
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const signIn = async (username, email, password) => {
    event.preventDefault();
    if (username === '' || email === '' || password == '') {
      alert('にゅうりょくしていないところがあるよ');
      return false;
    }
    console.log(email, password);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="container">
      <div class=" d-flex justify-content-center">
        <h2 class="text-center">ログインがめん</h2>
      </div>
      <div class="my-3 mx-auto" style={{ width: '50%' }}>
        <TextField
          fullWidth
          label="なまえ"
          margin="dense"
          type="text"
          value={username}
          onChange={inputUsername}
        ></TextField>
        <TextField
          fullWidth
          label="メールアドレス"
          margin="dense"
          type="email"
          value={email}
          onChange={inputEmail}
        ></TextField>
        <TextField
          fullWidth
          label="パスワード"
          margin="dense"
          type="password"
          value={password}
          onChange={inputPassword}
        ></TextField>
        <Button
          onClick={() => {
            signIn(username, email, password);
          }}
          variant="contained"
          color="primary"
          class="mt-3"
        >
          ログインする
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
