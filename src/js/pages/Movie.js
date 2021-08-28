import React, {useState} from 'react';

const Movie = (props) =>{
    const [img, setImg] = useState("");
    const {clickEvent} = props;

    const handleChange = (event) =>{
        setName(event.target.value);
        console.log(videoname);
    }

    const handleClick_dog = () =>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            setImg(result.message);
        }).catch(error => {
            console.log(error);
        });
    }

    const handleClick = () =>{
        const {elements, actions} = clickEvent();
        let url = 'https://terminal-8c860.web.app/pixi?';
        for(let i = 0; i < elements.length; i++)
            url += 'element['+i+']='+elements[i]+'&';
        for(let i = 0; i < actions.length; i++){
            url += 'action['+i+']='+actions[i];
            if (i < actions.length-1)
                url += '&';
        }
        console.log(url);
        window.open(url, '_blank'); // 新しいタブを開き、ページを表示
    }

    return(
    <div>
      <h5>動画</h5>
      <div>
        {img =="" ? <p></p>: <img src={img} height="100%" width="100%"></img>}
      </div>
      <div>
          <form>
              <div class="my-3">
                <button type="button" class="btn btn-secondary" onClick={handleClick}>見る</button>
              </div>
          </form>
      </div>
    </div>
    );
}

export default Movie;