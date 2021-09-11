import React, { useState } from 'react';

const DescForm = (props) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const { clickEvent } = props;

  const changeTitle = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const changeDesc = (event) => {
    setDesc(event.target.value);
    console.log(title);
  };

  const handleClick = () => {
    //にっきをかくボタン
    const { elements, actions } = clickEvent();
    let url = 'https://terminal-8c860.web.app/save?';

    url += 'username=taisei&';

    var today = new Date();
    var year = today.getFullYear();
    var month = ('00' + (today.getMonth() + 1)).slice(-2);
    var date = ('00' + today.getDate()).slice(-2);
    url += 'date=' + year + '-' + month + '-' + date + '&query=';

    let query = '';
    for (let i = 0; i < elements.length; i++) query += 'element[' + i + ']=' + elements[i] + '&';
    for (let i = 0; i < actions.length; i++) {
      query += 'action[' + i + ']=' + actions[i];
      if (i < actions.length - 1) query += '&';
    }
    url += encodeURIComponent(query);

    url += '&title=' + title + '&desc=' + desc;
    console.log(url);
    window.open(url, '_blank'); // 新しいタブを開き、ページを表示
    //window.close();
    //setUrl(url);
  };

  var url = 'https://terminal-8c860.web.app/make-thumbnail?';
  url += 'username=' + 'taisei' + '&';

  let today = new Date();
  let year = today.getFullYear();
  let month = ('00' + (today.getMonth() + 1)).slice(-2);
  let date = ('00' + today.getDate()).slice(-2);
  url += 'date=' + year + '-' + month + '-' + date;
  console.log(url);

  return (
    <div>
      <div class="h-50">
        {/*<iframe src={url} scrolling="no" width="100%" height="100%"></iframe>*/}
        <iframe src="http://127.0.0.1:5500/make_thumbnail.html" scrolling="no" width="100%" height="470px"></iframe>
      </div>
      <div class="h-50">
        <h4>くわしいこと</h4>
        <form>
          <div class="mb-3">
            <label class="control-label" for="title">
              タイトル
            </label>
            <input
              class="form-control"
              id="title"
              type="text"
              value={title}
              onChange={changeTitle}
              autocomplete="off"
              required
            ></input>
          </div>
          <div class="mb-3">
            <label class="control-label" for="desc">
              せつめい
            </label>
            <textarea
              class="form-control"
              id="desc"
              value={desc}
              onChange={changeDesc}
              style={{ resize: 'none', height: '10em' }}
              autocomplete="off"
              required
            ></textarea>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-secondary" onClick={handleClick}>
              にっきをかく
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DescForm;
