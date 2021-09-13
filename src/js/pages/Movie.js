/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useState, useEffect } from 'react';

const Movie = (props) => {
  const [url, setUrl] = useState('');

  const { clickEvent, handleDisplay, hideDescBtn, username } = props;

  const handleClick = () => {
    //どうがをみるボタン
    hideDescBtn();
    const { elements, actions } = clickEvent();
    let url = 'https://terminal-8c860.web.app/pixi?';
    url += 'username=' + username + '&';

    const today = new Date();
    const year = today.getFullYear();
    const month = ('00' + (today.getMonth() + 1)).slice(-2);
    const date = ('00' + today.getDate()).slice(-2);
    url += 'date=' + year + '-' + month + '-' + date + '&';

    let query = '';
    for (let i = 0; i < actions.length; i++) query += 'action[' + i + ']=' + actions[i] + '&';
    for (let i = 0; i < elements.length; i++) {
      query += 'element[' + i + ']=' + elements[i];
      if (i < elements.length - 1) query += '&';
    }
    url += query;
    setUrl(url + '&' + today.getTime());
    handleDisplay();
  };

  return (
    <div>
      <h5>どうが</h5>
      <div class="h-75 border bg-light">
        <iframe
          src={url.substring(0, url.lastIndexOf('&'))}
          id="iframe"
          scrolling="no"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto mt-3">
        <button type="button" class="btn btn-secondary" onClick={handleClick}>
          どうがをみる
        </button>
      </div>
    </div>
  );
};

export default Movie;
