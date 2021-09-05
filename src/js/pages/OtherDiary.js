import React, { useState, useCallback } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const OtherDiary = (props) => {
  const arg = props.history.location.state.tile;
  const src =
    'https://terminal-8c860.web.app/pixi?' + 'username=' + arg.username + '&date=' + arg.date + '&' + arg.query;
  let ans = '';
  const queryList = arg.query.split('&');
  for (const elem of queryList) {
    const block = elem.split('=');
    if (block[0] == '/^action/') {
      ans += 'action' + block[1];
    } else {
      ans += 'element' + block[1];
    }
  }

  return (
    <div class="container">
      <div class="row py-5">
        <div class="col-7">
          <Tabs>
            <TabList>
              <Tab>どうが</Tab>
              <Tab>にっき</Tab>
            </TabList>
            <TabPanel style={{ width: '640px', height: '360px' }}>
              <iframe src={src} scrolling="no" width="100%" height="100%"></iframe>
            </TabPanel>
            <TabPanel style={{ width: '640px', height: '360px' }}>
              <p>{ans}</p>
            </TabPanel>
          </Tabs>
        </div>
        <div class="col-5">
          <div class="p-3 border h-25 d-flex align-items-center justify-content-center">
            <h4 class="text-center">{arg.title}</h4>
          </div>
          <div class="p-3 border h-75">
            <p>{arg.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherDiary;
