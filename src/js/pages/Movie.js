import React, {useState} from 'react';
import ReactPlayer from "react-player";

const Movie = () =>{
    const YOUTUBE_API_KEY = 'AIzaSyBokojwitVcFuKaCpGsUDlKqLgEgETF1WI';

    const [videoname, setName] = useState("");
    const [url, setUrl] = useState("");

    const handleChange = (event) =>{
        setName(event.target.value);
        console.log(videoname);
    }

    const handleClick = () =>{
        fetch(`https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=${videoname}&maxResults=1&key=${YOUTUBE_API_KEY}`)
        .then(res => res.json())
        .then((result) => {
            console.log(result.items);
            setUrl(result.items[0].id.videoId);
        }).catch(error => {
            console.log(error);
        });
    }

    return(
    <div>
      <h5>動画</h5>
      <div class='video-wrapper'>
          <ReactPlayer
            url={"https://www.youtube.com/embed/" + url}
            class="main-player"
            controls="true"
            width="100%"
            height="100%"
          />
      </div>
      <div>
          <form>
              <div class="mb-3">
                <label class="control-label">入力</label>
                <input class="form-control" type="text" value={videoname} onChange={handleChange}></input>
              </div>
                <button type="button" class="btn btn-secondary" onClick={handleClick}>動画を見る</button>
          </form>
      </div>
    </div>
    );
}

export default Movie;