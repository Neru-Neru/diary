/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Blockly from 'blockly';
import { BlocklyWorkspace } from 'react-blockly';
import '../components/blocks/ele_blocks';
import '../components/blocks/act_blocks';
import Movie from './Movie';

const Editor = () => {
  const [xml, setXml] = useState('');
  const [javascriptCode, setJavascriptCode] = useState('');

  const history = useHistory();

  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  const toolboxCategories = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'たべもの',
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: 'block',
            type: 'curry',
          },
        ],
      },
      {
        kind: 'category',
        name: 'ばしょ',
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: 'block',
            type: 'park',
          },
        ],
      },
      {
        kind: 'category',
        name: 'のりもの',
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: 'block',
            type: 'bicycle',
          },
          {
            kind: 'block',
            type: 'car',
          },
          {
            kind: 'block',
            type: 'train',
          },
        ],
      },
      {
        kind: 'category',
        name: 'あそび',
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: 'block',
            type: 'baseball',
          },
          {
            kind: 'block',
            type: 'game',
          },
        ],
      },
      {
        kind: 'category',
        name: 'どうさ',
        colour: 230,
        contents: [
          {
            kind: 'block',
            type: '.eat',
          },
          {
            kind: 'block',
            type: '.run',
          },
          {
            kind: 'block',
            type: '.ride',
          },
          {
            kind: 'block',
            type: '.play',
          },
        ],
      },
    ],
  };

  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  function getQueryStrings() {
    //ブロックからクエリ(配列)を生成
    var dpObj = new DOMParser();
    var xmlDoc = dpObj.parseFromString(xml, 'text/xml');
    var blocks = xmlDoc.getElementsByTagName('block');
    var actions = [];
    var elements = [];
    var flg = true; //elementの時はtrue, actionの時はfalseとする
    for (var i = 0; i < blocks.length; i++) {
      //ブロック数分繰り返す
      var type_name = blocks[i].getAttribute('type');
      if (type_name.charAt(0) != '.') {
        //一文字目が.以外（elementの時）
        elements.push(type_name); //elements配列末尾に追加
        flg = !flg; //flgをfalseに
      } //一文字目が.（actionの時）
      else {
        actions.push(type_name.substr(1)); //actions配列末尾に追加
        if (flg) {
          //flg==trueのとき→elementを必要としないactionの時(自動詞)
          elements.push(''); //elements配列末尾に空白追加
          flg = !flg; //flgをfalseに
        }
        flg = !flg; //flgをtrueに
      }
    }
    return { elements, actions };
  }

  const moveForm = () => {
    // しょうさいにゅうりょくボタン
    setPixi();
    history.push({
      pathname: '/deskform',
    });
  };

  const setPixi = () => {
    //pixiリクエスト
    const { elements, actions } = getQueryStrings();
    let url = 'https://terminal-8c860.web.app/pixi?';

    url += 'username=taisei&';

    var today = new Date();
    var year = today.getFullYear();
    var month = ('00' + (today.getMonth() + 1)).slice(-2);
    var date = ('00' + today.getDate()).slice(-2);
    url += 'date=' + year + '-' + month + '-' + date + '&';

    let query = '';
    for (let i = 0; i < actions.length; i++) query += 'action[' + i + ']=' + actions[i] + '&';
    for (let i = 0; i < elements.length; i++) {
      query += 'element[' + i + ']=' + elements[i];
      if (i < elements.length - 1) query += '&';
    }
    url += query;
    console.log(url);
  };

  const checkDouwnloadLink = () => {
    var dpObj = new DOMParser();
    var xmlDoc = dpObj.parseFromString(xml, 'text/xml');
    var blocks = xmlDoc.getElementsByTagName('block');
    console.log(blocks.length);
    const iframe = document.getElementById('iframe');
    // ダウンロードリンクの探索
    var time = 0;
    const intervalId = setInterval(() => {
      //if (iframe.contentWindow.document.querySelector('#downloadlink') != null) {
      time++;
      if (time > 4 * blocks.length) {
        clearInterval(intervalId); //intervalIdをclearIntervalで指定している
        document.getElementById('after_download').style.display = 'block';
      }
    }, 1000);
  };

  const hideDescBtn = () => {
    console.log('Hide');
    document.getElementById('after_download').style.display = 'none';
  };

  useEffect(() => {
    document.getElementById('after_download').style.display = 'none';
  }, [xml]);

  return (
    <div css={Background}>
      <div class="row h-100">
        <div class="col-md-7">
          <BlocklyWorkspace
            toolboxConfiguration={toolboxCategories}
            className="h-75"
            onWorkspaceChange={workspaceDidChange}
            onXmlChange={setXml}
          />
          {/*<pre id="generated-xml">{xml}</pre>*/}
          <div class="h-25 pt-3">
            <textarea
              id="code"
              class="h-100 border "
              style={{ width: '100%', resize: 'none' }}
              value={javascriptCode}
              readOnly
            ></textarea>
          </div>
        </div>
        <div class="col-md-5 bg-light">
          <div class="row h-25 border py-3">
            <p>なんかせつめいがあるといい</p>
          </div>
          <div class="row h-50 border py-3">
            <Movie clickEvent={getQueryStrings} handleDisplay={checkDouwnloadLink} hideDescBtn={hideDescBtn}></Movie>
          </div>
          <div class="row h-25 border py-3 mt-1" id="after_download">
            <p>
              このどうがでいいなら、つぎにしょうさいをきめてね。<br></br>へんこうするなら、ブロックをそうさしてね。
            </p>
            <div class="d-grid gap-2 col-6 mx-auto mt-3">
              <button type="button" class="btn btn-outline-info" onClick={moveForm}>
                しょうさいをきめる
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Background = css`
  width: 100%;
  height: 90%;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  background-color: #8ac7de;
  padding: 0 15%;
`;

export default Editor;
