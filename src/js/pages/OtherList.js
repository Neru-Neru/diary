import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './Calender';
import DiaryList from './DiaryList';

const OtherList = () => {
  const [date, setDate] = useState();
  const [imglist, setImagelist] = useState([]);
  const [daylist, setDaylist] = useState([]);

  const history = useHistory();

  useEffect(() => {
    /*
    var today = new Date();
    var year = today.getFullYear();
    var month = ('00' + (today.getMonth() + 1)).slice(-2);
    var day = ('00' + today.getDate()).slice(-2);
    moveDiaryOfDate(year + '-' + month + '-' + day);
    */
    setDaylist(imglist);
  }, [imglist]);

  const moveDiaryOfDate = (date) => {
    let url = 'https://terminal-8c860.web.app/load-day?';
    url += 'date=' + date;
    console.log(url);
    fetch(url, {
      mode: 'cors',
    })
      .then(function (data) {
        return data.json();
      })
      .then(function (json) {
        const daylist = handleJson(json); // jsonの処理をする
        setDaylist(daylist); // stateを変更
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
        username: 'taisei',
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
    history.push({
      pathname: '/otherdiary',
      state: { tile },
    });
  };

  return (
    <div class="container" style={{ height: '90%' }}>
      <div class="row">
        <div class="col-5 p-2">
          <Calendar clickDay={moveDiaryOfDate} imageList={imglist} setImagelist={setImagelist}></Calendar>
        </div>
        <div class="col-7 p-2">
          <h3>みんなのにっき</h3>
          <DiaryList imageList={daylist} clickTile={clickTile}></DiaryList>
        </div>
      </div>
    </div>
  );
};

export default OtherList;
