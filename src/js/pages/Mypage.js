import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './Calender';
import DiaryList from './DiaryList';

const Mypage = () => {
  const [imglist, setImagelist] = useState([]);

  const history = useHistory();

  const moveMyDiaryList = (date) => {
    // 日付選択したら、その動画が表示される
    let url = 'https://terminal-8c860.web.app/load-day?';
    url += 'username=taisei&';
    url += 'date=' + date;
  };

  const moveMonth = (month) => {
    // ひと月の投稿動画を表示するための関数
    if (month != '') {
      let url = 'https://terminal-8c860.web.app/load-month?';
      url += 'username=taisei&';
      url += 'month=' + month;
      fetch(url, {
        mode: 'cors',
      })
        .then(function (data) {
          return data.json();
        })
        .then(function (json) {
          const list = handleJson(json); // jsonの処理をする
          const newlist = addThumbnail(list);
          setImagelist(newlist); // stateを変更
        })
        .catch((e) => {
          console.log(e); // エラーをキャッチし表示
        });
    }
  };

  const handleJson = (json) => {
    // jsonの処理（moveMonthで使用）
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

  const addThumbnail = (list) => {
    // サムネイル追加
    for (let elem of list) {
      let url = 'https://terminal-8c860.web.app/send-thumbnail?';
      url += 'username=' + elem.username + '&';
      url += 'date=' + elem.date;
      /*
      fetch(url, {
        mode: 'cors',
      })
        .then(function (data) {
          console.log(data);
          return data.blob(); //バイナリデータに変換
        })
        .then(function (blob) {
          elem.img = URL.createObjectURL(blob); // Data URI発行
          console.log(elem.img);
        })
        .catch((e) => {
          console.log(e); // エラーをキャッチし表示
        });
        */
      elem.img = url;
    }
    return list;
  };

  const clickTile = (tile) => {
    // 個別ページへの移動
    console.log(tile);
    history.push({
      pathname: '/mydiary',
      state: { tile },
    });
  };

  return (
    <div class="container" style={{ height: '90%' }}>
      <div class="row">
        <div class="col-5 p-2">
          <div class="h-25">なまえ：</div>
          <div class="h-75">
            <Calendar clickMonthBtn={moveMonth} clickDay={moveMyDiaryList} setImagelist={setImagelist}></Calendar>
          </div>
        </div>
        <div class="col-7 p-2">
          <h3>じぶんのにっき</h3>
          <DiaryList imageList={imglist} clickTile={clickTile}></DiaryList>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
