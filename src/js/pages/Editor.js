import React, { useState } from "react";
import Blockly from "blockly"
import { BlocklyWorkspace } from "react-blockly";
import "../components/blocks/ele_blocks"
import "../components/blocks/act_blocks"
import DescForm from "./DescForm";
import Movie from "./Movie"

const Editor = () => {
  const [xml, setXml] = useState("");
  const [javascriptCode, setJavascriptCode] = useState("");
  const initialXml =
    '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="text" x="70" y="30"><field name="TEXT"></field></block></xml>';

  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "たべもの",
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: "block",
            type: "curry",
          },
        ],
      },
      {
        kind: "category",
        name: "ばしょ",
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: "block",
            type: "park",
          },
        ],
      },
      {
        kind: "category",
        name: "のりもの",
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: "block",
            type: "bicycle",
          },
          {
            kind: "block",
            type: "car",
          },
          {
            kind: "block",
            type: "train",
          },
        ],
      },
      {
        kind: "category",
        name: "あそび",
        expanded: true,
        colour: 0,
        contents: [
          {
            kind: "block",
            type: "baseball",
          },
          {
            kind: "block",
            type: "game",
          },
        ],
      },
      {
        kind: "category",
        name: "どうさ",
        colour: 230,
        contents: [
          {
            kind: "block",
            type: ".eat",
          },
          {
            kind: "block",
            type: ".run",
          },
          {
            kind: "block",
            type: ".ride",
          },
          {
            kind: "block",
            type: ".play",
          },
        ],
      },
    ],
  };

  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  function getQueryStrings(){ //ブロックからクエリ(配列)を生成
    var dpObj = new DOMParser();
    var xmlDoc = dpObj.parseFromString(xml, "text/xml");
    var blocks = xmlDoc.getElementsByTagName("block");
    var actions=[];
    var elements=[];
    var flg = true; //elementの時はtrue, actionの時はfalseとする
    for(var i=0; i<blocks.length; i++){ //ブロック数分繰り返す
      var type_name = blocks[i].getAttribute("type");
      if (type_name.charAt(0) != '.') //一文字目が.以外（elementの時）
      {
        elements.push(type_name); //elements配列末尾に追加
        flg = !flg; //flgをfalseに
      }
      else //一文字目が.（actionの時）
      {
        actions.push(type_name.substr(1)); //actions配列末尾に追加
        if (flg) //flg==trueのとき→elementを必要としないactionの時(自動詞)
        {
          elements.push(""); //elements配列末尾に空白追加
          flg = !flg; //flgをfalseに
        }
        flg = !flg; //flgをtrueに
      }
    }
    return {elements, actions};
  }

  return (
    <div class="container" style={{height: "90%"}}>
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
              style={{ width: "100%", resize: "none"}}
              value={javascriptCode}
              readOnly
            ></textarea>
          </div>
        </div>
        <div class="col-md-5">
          <div class="row h-50 border py-3">
            <Movie clickEvent={getQueryStrings}></Movie>
          </div>
          <div class="row h-50 border py-3 mt-1">
            <DescForm clickEvent={getQueryStrings}></DescForm>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Editor;