import React, { useState } from "react";

const DescForm = () =>{
    const [state, setState] = useState({tenki:""});
    const [address, setAddress] = useState("");

    const handleChange = (event) =>{
        setAddress(event.target.value);
        console.log(address);
    }

    const handleClick = () => {
        fetch('https://api.zipaddress.net/?zipcode='+address, {
            mode: 'cors'
        })
        .then(res => res.json())
        .then(json => {
            setState({tenki: json.data.fullAddress});
        }).catch(error => {
            console.log(error);
            setState({tenki: "間違っているか、存在しない番号です。"});
        });
    }

    return(
        <div>
            <h5>概要を記入</h5>
            <form>
            <div class="mb-3">
                <label class="control-label" for="title">タイトル</label>
                <input class="form-control" id="title" type="text" value={address} onChange={handleChange} autocomplete="off"></input>
            </div>
            <div class="mb-3">
                <label class="control-label" for="description">説明文</label>
                <textarea class="form-control" id="description" value={state.tenki} style={{resize:"none", height:"10em"}} autocomplete="off"></textarea>
            </div>
            <button type="button" class="btn btn-secondary" onClick={handleClick}>日記を書く</button>
            </form>
        </div>
    );
}

export default DescForm;