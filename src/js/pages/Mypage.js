/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './Calender';
import { useAuthContext } from '../../context/AuthContext';
import DiaryList from './DiaryList';
import { db } from '../../firebase';

const Mypage = () => {
  const [imglist, setImagelist] = useState([]);
  const [daylist, setDaylist] = useState([]);
  const [userstate, setUserstate] = useState({ username: '', email: '' });
  const { user } = useAuthContext();

  const history = useHistory();

  const moveMyDiaryList = (date) => {
    // 日付選択したら、その動画が表示される
    let url = 'https://terminal-8c860.web.app/load-day?';
    url += 'username=' + userstate.username;
    url += '&date=' + date;
    console.log(url);
    fetch(url, {
      mode: 'cors',
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (json) {
        const daylist = handleJson(json); // jsonの処理をする
        const data = [];
        for (let i of Object.keys(daylist)) {
          // 各動画ごと
          if (daylist[i].username === userstate.username) {
            daylist[i].date = date;
            data.push(daylist[i]);
          }
        }
        console.log(data);
        setDaylist(data); // stateを変更
      })
      .catch((e) => {
        console.log(e); // エラーをキャッチし表示
      });
  };

  const handleJson = (json) => {
    // jsonの処理
    let data = [];
    console.log(json);
    for (let i of Object.keys(json)) {
      // 各動画ごとに生成
      let tmp = {
        username: i,
        date: i,
        title: json[i].title,
        desc: json[i].desc,
        query: json[i].query,
      };
      data.push(tmp);
    }
    return data;
  };

  const clickTile = (tile) => {
    // 個別ページへの移動
    console.log(tile);
    history.push({
      pathname: '/mydiary',
      state: { tile },
    });
  };

  useEffect(() => {
    setDaylist(imglist);
    console.log(imglist);
  }, [imglist]);

  useEffect(() => {
    const name = db
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let userdata = doc.data();
          if (userdata.mail === user.email) {
            setUserstate({ username: userdata.username, email: userdata.mail });
          }
        });
      });
  }, []);

  return (
    <div css={Background}>
      <div css={DiaryBg} class="row">
        <div class="col-5 p-3">
          <div class="d-flex h-25 pt-5">
            <div
              class="border d-flex align-items-center justify-content-center bg-light"
              style={{ width: '100px', height: '100px', 'border-radius': '50%' }}
            >
              <p class="m-0" style={{ 'text-align': 'center', 'line-height': '50%', 'font-size': '30px' }}>
                <i class="fas fa-glasses"></i>
              </p>
            </div>
            <div class="">なまえ：{userstate.username}</div>
          </div>
          <div class="h-75">
            <Calendar
              clickDay={moveMyDiaryList}
              imageList={imglist}
              setImagelist={setImagelist}
              flg={true}
              username={userstate.username}
            ></Calendar>
          </div>
        </div>
        <div class="col-7 p-3">
          <h3 style={{ 'text-decoration': 'underline solid #ff8c00', 'text-underline-offset': '0.1em' }}>
            じぶんのにっき
          </h3>
          <DiaryList imageList={daylist} clickTile={clickTile}></DiaryList>
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
  padding: 0 10%;
`;

const DiaryBg = css`
  background: rgb(220 242 250);
`;

export default Mypage;
