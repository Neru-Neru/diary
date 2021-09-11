/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './Calender';
import DiaryList from './DiaryList';

const OtherList = () => {
  const [imglist, setImagelist] = useState([]);
  const [daylist, setDaylist] = useState([]);
  const [day, setDay] = useState('');

  const history = useHistory();

  useEffect(() => {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('00' + (today.getMonth() + 1)).slice(-2);
    var day = ('00' + today.getDate()).slice(-2);
    moveDiaryOfDate(year + '-' + month + '-' + day);
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
      <div class="row">
        <div class="col-5 p-2">
          <Calendar clickDay={moveDiaryOfDate} imageList={imglist} setImagelist={setImagelist} flg={false}></Calendar>
        </div>
        <div class="col-7 p-2">
          <h3>{day}のみんなのにっき</h3>
          <DiaryList imageList={daylist} clickTile={clickTile}></DiaryList>
        </div>
      </div>
    </div>
  );
};

const Background = css`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #8ac7de;
  padding: 0 15%;
`;

export default OtherList;
