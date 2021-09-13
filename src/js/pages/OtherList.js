/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './Calender';
import DiaryList from './DiaryList';
import { useAuthContext } from '../../context/AuthContext';
import { db } from '../../firebase';

const OtherList = () => {
  const [imglist, setImagelist] = useState([]);
  const [daylist, setDaylist] = useState([]);
  const [day, setDay] = useState('');
  const [username, setUsername] = useState('');

  const history = useHistory();
  const { user } = useAuthContext();

  useEffect(() => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('00' + (today.getMonth() + 1)).slice(-2);
    var day = ('00' + today.getDate()).slice(-2);
    moveDiaryOfDate(year + '-' + month + '-' + day);
    const name = db
      .collection('users')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let userdata = doc.data();
          if (userdata.mail === user.email) {
            setUsername(userdata.username);
          }
        });
      });
  }, []);

  const moveDiaryOfDate = (date) => {
    let url = 'https://terminal-8c860.web.app/load-day?';
    url += 'date=' + date;
    fetch(url, {
      mode: 'cors',
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (json) {
        const daylist = handleJson(json, date); // jsonの処理をする
        setDaylist(daylist); // stateを変更
        setDay(date);
      })
      .catch((e) => {
        console.log(e); // エラーをキャッチし表示
      });
  };

  const handleJson = (json, date) => {
    // jsonの処理
    let data = [];
    console.log(json);
    for (let i of Object.keys(json)) {
      // 各動画ごとに生成
      let tmp = {
        username: i,
        date: date,
        title: json[i].title,
        desc: json[i].desc,
        query: json[i].query,
      };
      data.push(tmp);
    }
    return data;
  };

  const clickTile = (tile) => {
    history.push({
      pathname: '/otherdiary',
      state: { tile },
    });
  };

  return (
    <div css={Background}>
      <div css={DiaryBg} class="row">
        <div class="col-5 p-3">
          <Calendar
            clickDay={moveDiaryOfDate}
            imageList={imglist}
            setImagelist={setImagelist}
            flg={false}
            username={username}
          ></Calendar>
        </div>
        <div class="col-7 p-3">
          <h3>{day}のみんなのにっき</h3>
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

export default OtherList;
