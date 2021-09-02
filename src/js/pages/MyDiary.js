import React, { useState, useCallback } from "react";

const MyDiary = (props) =>{
    console.log(props.history.location);
    const arg = props.history.location.state.tile;

    const displayMovie = () =>{ //どうがをみるボタン
        let url = 'https://terminal-8c860.web.app/pixi?';
        for(let i = 0; i < elements.length; i++)
            url += 'element['+i+']='+elements[i]+'&';
        for(let i = 0; i < actions.length; i++){
            url += 'action['+i+']='+actions[i];
            if (i < actions.length-1)
              url += '&';
        }
        console.log(encodeURIComponent(url));
        //window.open(url, '_blank'); // 新しいタブを開き、ページを表示
        setUrl(url);
    }

    return(
        <div>
            <p>{arg.title}</p>
            <p>{arg.desc}</p>
            <p>{arg.query}</p>
        </div>
    );
}

export default MyDiary;