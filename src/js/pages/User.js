import React, { useState } from "react";
import Calendar from "./Calender";
import DiaryList from "./DiaryList";

const User = () =>{
    return(
        <div class="container" style={{height:"90%"}}>
          <div class="row">
              <div class="col-4 p-2">
                <Calendar></Calendar>
              </div>
              <div class="col-8 p-2">
                  <h3>Project</h3>
                <DiaryList></DiaryList>
              </div>
          </div>
        </div>

    );
}

export default User;