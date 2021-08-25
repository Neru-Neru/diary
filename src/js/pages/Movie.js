import React, {useState} from 'react';
import ReactPlayer from "react-player";

const Movie = () =>{
    const [img, setImg] = useState("");

    const handleChange = (event) =>{
        setName(event.target.value);
        console.log(videoname);
    }

    const handleClick_old = () =>{
        fetch(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${videoname}&maxResults=1&key=${YOUTUBE_API_KEY}`)
        .then(res => res.json())
        .then((result) => {
            console.log(result.items);
            setUrl(result.items[0].id.videoId);
        }).catch(error => {
            console.log(error);
        });
    }

    const handleClick = () =>{
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(result =>{
            console.log(result);
            setImg(result.message);
        }).catch(error => {
            console.log(error);
        });
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