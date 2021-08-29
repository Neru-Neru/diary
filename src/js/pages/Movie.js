import React, {useState} from 'react';

const Movie = (props) =>{
    const [img, setImg] = useState("");
    const [url, setUrl] = useState("");

    const {clickEvent} = props;

    const handleClick = () =>{ //どうがをみるボタン
        const {elements, actions} = clickEvent();
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
      <div class="h-75 border">
        <iframe src={url} scrolling="no" width="100%" height="100%"></iframe>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto mt-3">
        <button type="button" class="btn btn-secondary" onClick={handleClick}>動画を見る</button>
      </div>
    </div>
    );
}

export default Movie;