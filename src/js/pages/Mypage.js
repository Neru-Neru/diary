import React, { useState } from "react";
import Calendar from "./Calender";
import DiaryList from "./DiaryList";

const Mypage = () =>{
  const moveMyDiaryList = (date) =>{
    let url = 'https://terminal-8c860.web.app/load?';
    url += 'username=taisei&';
    url += 'date='+date.replace(/-/g, '');
    console.log(url);
  }

    return(
        <div class="container" style={{height:"90%"}}>
          <div class="row">
              <div class="col-4 p-2">
                <div class="h-25">
                  Profile
                </div>
                <div class="h-75">
                  <Calendar onClick={moveMyDiaryList}></Calendar>
                </div>
              </div>
              <div class="col-8 p-2">
                  <h3>Project</h3>
                  <DiaryList></DiaryList>
              </div>
          </div>
        </div>

    );
}

export default Mypage;