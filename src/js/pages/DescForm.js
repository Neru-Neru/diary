import React, { useState } from "react";

const DescForm = (props) =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const {clickEvent} = props;

    const changeTitle = (event) =>{
        setTitle(event.target.value);
        console.log(title);
    }

    const changeDescription = (event) =>{
        setDescription(event.target.value);
        console.log(title);
    }

    const handleClick = () => { //にっきをかくボタン
        const {elements, actions} = clickEvent();
        let url = 'https://terminal-8c860.web.app/save?';

        url += 'username=taisei&';

        var today = new Date();
        var year = today.getFullYear();
        var month = ("00" + (today.getMonth()+1)).slice(-2);
        var date = ("00" + today.getDate()).slice(-2);
        url += 'date='+year+month+date+'&query='

        let query = '';
        for(let i = 0; i < elements.length; i++)
            query += 'element['+i+']='+elements[i]+'&';
        for(let i = 0; i < actions.length; i++){
            query += 'action['+i+']='+actions[i];
            if (i < actions.length-1)
                query += '&';
        }
        url += encodeURIComponent(query);
        console.log(url);
        //window.open(url, '_blank'); // 新しいタブを開き、ページを表示
        //setUrl(url);
    }

    return(
        <div>
            <h5>くわしいこと</h5>
            <form>
                <div class="mb-3">
                    <label class="control-label" for="title">タイトル</label>
                    <input class="form-control" id="title" type="text" value={title} onChange={changeTitle} autocomplete="off"></input>
                </div>
                <div class="mb-3">
                    <label class="control-label" for="description">せつめい</label>
                    <textarea class="form-control" id="description" value={description} onChange={changeDescription} style={{resize:"none", height:"10em"}} autocomplete="off"></textarea>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-secondary" onClick={handleClick}>にっきをかく</button>
                </div>
            </form>
        </div>
    );
}

export default DescForm;