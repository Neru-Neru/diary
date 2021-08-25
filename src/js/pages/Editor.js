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
        name: "Element",
        expanded: true,
        contents: [
          {
            kind: "block",
            type: "curry",
          },
          {
            kind: "block",
            type: "park",
          },
          {
            kind: "block",
            type: "baseball",
          },
          {
            kind: "block",
            type: "game",
          },
          {
            kind: "block",
            type: "bicycle",
          },
          {
            kind: "block",
            type: "car",
          },
        ],
      },
      {
        kind: "category",
        name: "Action",
        contents: [
          {
            kind: "block",
            type: "eat",
          },
          {
            kind: "block",
            type: "sleep",
          },
          {
            kind: "block",
            type: "ride",
          },
          {
            kind: "block",
            type: "play",
          },
        ],
      },
    ],
  };

  function workspaceDidChange(workspace) {
    const code = Blockly.JavaScript.workspaceToCode(workspace);
    setJavascriptCode(code);
  }

  return (
    <div class="container" style={{height: "90%"}}>
      <div class="row h-100">
        <div class="col-md-8">
          <BlocklyWorkspace
            toolboxConfiguration={toolboxCategories}
            className="h-75"
            onWorkspaceChange={workspaceDidChange}
            onXmlChange={setXml}
          />
          {/*<pre id="generated-xml">{xml}</pre>*/}
          <textarea
            id="code"
            class="h-25 border py-3"
            style={{ width: "100%", resize: "none"}}
            value={javascriptCode}
            readOnly
          ></textarea>
        </div>
        <div class="col-md-4">
          <div class="row mh-100 border py-3">
            <Movie></Movie>
          </div>
          <div class="row mh-100 border py-3 mt-1">
            <DescForm></DescForm>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Editor;