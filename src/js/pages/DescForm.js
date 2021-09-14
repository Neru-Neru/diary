/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const DescForm = (props) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const { clickEvent } = props;
  const history = useHistory();

  const arg = props.history.location.state;

  const changeTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const changeDesc = (event) => {
    setDesc(event.target.value);
    console.log(title);
  };

  const handleClick = () => {
    //にっきをかくボタン
    const elements = arg.elements;
    const actions = arg.actions;

    let url = 'https://terminal-8c860.web.app/save?';

    url += 'username=' + arg.username + '&';

    var today = new Date();
    var year = today.getFullYear();
    var month = ('00' + (today.getMonth() + 1)).slice(-2);
    var date = ('00' + today.getDate()).slice(-2);
    url += 'date=' + year + '-' + month + '-' + date + '&query=';

    let query = '';
    for (let i = 0; i < elements.length; i++) query += 'element[' + i + ']=' + elements[i] + '&';
    for (let i = 0; i < actions.length; i++) {
      query += 'action[' + i + ']=' + actions[i];
      if (i < actions.length - 1) query += '&';
    }
    url += encodeURIComponent(query);

    url += '&title=' + title + '&desc=' + desc;
    console.log(url);
    window.open(url, '_blank'); // 新しいタブを開き、ページを表示
    window.close();
    history.push({
      pathname: '/otherdiary',
    });
  };

  var url = 'https://terminal-8c860.web.app/make-thumbnail?';
  url += 'username=' + arg.username + '&';

  let today = new Date();
  let year = today.getFullYear();
  let month = ('00' + (today.getMonth() + 1)).slice(-2);
  let date = ('00' + today.getDate()).slice(-2);
  url += 'date=' + year + '-' + month + '-' + date;
  console.log(url);

  return (
    <div css={Background}>
      <form class="h-100">
        <div>
          <h4 class="pt-3">くわしいこと</h4>
          <div class="row">
            <div class="col">
              <label class="control-label" for="title">
                タイトル
              </label>
              <input
                class="form-control"
                id="title"
                type="text"
                value={title}
                onChange={changeTitle}
                autocomplete="off"
                required
              ></input>
            </div>
            <div class="col">
              <label class="control-label" for="desc">
                せつめい
              </label>
              <input
                class="form-control"
                id="desc"
                type="text"
                value={desc}
                onChange={changeDesc}
                autocomplete="off"
                required
              ></input>
            </div>
          </div>
        </div>
        <div class="my-2" style={{ height: '65%' }}>
          <iframe src={url} scrolling="no" width="100%" height="100%"></iframe>
          {/*<iframe src="http://127.0.0.1:5500/make_thumbnail.html" scrolling="no" width="100%" height="100%"></iframe>*/}
        </div>
        <div class="d-grid gap-2 col-4 mx-auto">
          <button type="button" class="btn btn-secondary" onClick={handleClick}>
            にっきをかく
          </button>
        </div>
      </form>
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
  padding: 0 10%;
`;

export default DescForm;
