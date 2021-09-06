import React, { useEffect, useState } from 'react';
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

  const clickTile = (tile) => {
    // 個別ページへの移動
    console.log(tile);
    history.push({
      pathname: '/mydiary',
      state: { tile },
    });
  };

  useEffect(() => {
    console.log('SDF');
  }, [imglist]);

  return (
    <div class="container" style={{ height: '90%' }}>
      <div class="row">
        <div class="col-5 p-2">
          <div class="h-25">なまえ：</div>
          <div class="h-75">
            <Calendar clickDay={moveMyDiaryList} imageList={imglist} setImagelist={setImagelist}></Calendar>
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
