import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import Calendar from "./Calender";
import DiaryList from "./DiaryList";

const Mypage = () =>{
  const [imglist, setImagelist] = useState([]);

  const history = useHistory();

  const moveMyDiaryList = (date) =>{
    // 日付選択したら、その動画が表示される
    let url = 'https://terminal-8c860.web.app/load-day?';
    url += 'username=taisei&';
    url += 'date='+date;
    console.log(url);
  }

  const moveMonth = (month) =>{
    // ひと月の投稿動画を表示するための関数
    if(month != "")
    {
      let url = 'https://terminal-8c860.web.app/load-month?';
      url += 'username=taisei&';
      url += 'month='+month;
      console.log(url);
      fetch(url, {
        mode: 'cors'
      })
      .then(function (data){
        return data.json();
      })
      .then(function (json){
        const newlist = handleJson(json); // jsonの処理をする
        setImagelist(newlist); // stateを変更
      })
      .catch((e) => {
        console.log(e) // エラーをキャッチし表示
      })
    }
  }

  const clickTile = (tile) =>{
    console.log(tile);
    history.push({
      pathname: '/mydiary',
      state: {tile}
    });
  }

  const handleJson = (json) =>{
    // jsonの処理
    let data = [];
    console.log(json);
    for(let i of Object.keys(json)){
      // 各動画ごとに生成
      let tmp = {
        'username': 'taisei',
        'date': i,
        'title': json[i].title,
        'desc': json[i].desc,
        'query': json[i].query
      }
      data.push(tmp);
    }
    return data;
  }

    return(
        <div class="container" style={{height:"90%"}}>
          <div class="row">
              <div class="col-6 p-2">
                <div class="h-25">
                  なまえ：
                </div>
                <div class="h-75">
                  <Calendar clickMonthBtn={moveMonth} clickDay={moveMyDiaryList} setImagelist={setImagelist}></Calendar>
                </div>
              </div>
              <div class="col-6 p-2">
                  <h3>じぶんのにっき</h3>
                  <DiaryList imageList={imglist} clickTile={clickTile}></DiaryList>
              </div>
          </div>
        </div>

    );
}

export default Mypage;