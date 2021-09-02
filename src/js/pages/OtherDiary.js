import React, { useState, useCallback } from "react";

const OtherDiary = (props) =>{
    const arg = props.history.location.state.tile;
    const src = 'https://terminal-8c860.web.app/pixi?'+'username='+arg.username+'&date='+arg.date+'&'+arg.query;

    return(
        <div class="row h-75">
            <div class="col-7">
                <iframe src={src} scrolling="no" width="100%" height="100%"></iframe>
            </div>
            <div class="col-5">
                <p>タイトル：{arg.title}</p>
                <p>せつめい：{arg.desc}</p>
            </div>
        </div>
    );
}

export default OtherDiary;