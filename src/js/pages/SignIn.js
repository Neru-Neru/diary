/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );

  const signIn = async (username, email, password) => {
    if (username === '' || email === '' || password == '') {
      alert('にゅうりょくしていないところがあるよ');
      return false;
    }
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div css={Background}>
      <div css={ContentBack}>
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
          <label>
            テスト用➀：トモダチ1<br></br>
            テスト用⓶：トモダチ2
          </label>
          <TextField
            fullWidth
            label="メールアドレス"
            margin="dense"
            type="email"
            value={email}
            onChange={inputEmail}
          ></TextField>
          <label>
            テスト用➀：tomo1@mail.com<br></br>
            テスト用⓶：tomo2@mail.com
          </label>
          <TextField
            fullWidth
            label="パスワード"
            margin="dense"
            type="password"
            value={password}
            onChange={inputPassword}
          ></TextField>
          <label>
            テスト用➀：adatomo<br></br>
            テスト用⓶：adatomo
          </label>
          <div class="mt-5 d-flex justify-content-center">
            <Button
              onClick={() => {
                signIn(username, email, password);
              }}
              variant="contained"
              class="text-center btn btn-primary"
              size="large"
            >
              ログインする
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Background = css`
  width: 100%;
  height: 85%;
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #8ac7de;
  padding: 0 15%;
`;

const ContentBack = css`
  height: 100%;
  padding-top: 10%;
  background: rgb(220, 242, 250);
`;

export default SignIn;
