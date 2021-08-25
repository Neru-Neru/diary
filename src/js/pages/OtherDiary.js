import React, { useState, useCallback } from "react";
import Movie from "./Movie";

const OtherDiary = (props) =>{
    const [state, setState] = useState({title:"", img:""});

    const handleClick = (props) =>{
        setState(props);
    }

    return(
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <img src={state.img}></img>
                </div>
                <div class="col-5">
                    <p>{state.title}</p>
                </div>
            </div>
        </div>
    );
}

export default OtherDiary;