import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Calendar from './Calender';
import { useAuthContext } from '../../context/AuthContext';
import DiaryList from './DiaryList';
import { db } from '../../firebase';

const Mypage = () => {
  const [imglist, setImagelist] = useState([]);
  const [daylist, setDaylist] = useState([]);
  const [username, setUsername] = useState('');
  const { user } = useAuthContext();

  const history = useHistory();

  const moveMyDiaryList = (date) => {
    // 日付選択したら、その動画が表示される
    let url = 'https://terminal-8c860.web.app/load-day?';
    url += 'username=' + user.username;
    url += '&date=' + date;
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
            setUsername(userdata.username);
          }
        });
      });
  }, []);

  return (
    <div class="container" style={{ height: '90%' }}>
      <div class="row">
        <div class="col-5 p-2">
          <div class="h-25">なまえ：{username}</div>
          <div class="h-75">
            <Calendar clickDay={moveMyDiaryList} imageList={imglist} setImagelist={setImagelist} flg={true}></Calendar>
          </div>
        </div>
        <div class="col-7 p-2">
          <h3>じぶんのにっき</h3>
          <DiaryList imageList={daylist} clickTile={clickTile}></DiaryList>
        </div>
      </div>
    </div>
  );
};

export default Mypage;
