import React, { useState, useCallback } from "react";
import DiaryList from "./DiaryList";

const MyDiary = (props) =>{
    const [state, setState] = useState({title:"", img:""});

    const handleClick = (props) =>{
        setState(props);
    }

    return(
        <DiaryList></DiaryList>
    );
}

export default MyDiary;