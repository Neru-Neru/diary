import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { act_dic } from '../components/blocks/act_dic';
import { ele_dic } from '../components/blocks/ele_dict';

const MyDiary = (props) => {
  const arg = props.history.location.state.tile;
  const src =
    'https://terminal-8c860.web.app/pixi?' + 'username=' + arg.username + '&date=' + arg.date + '&' + arg.query;
  // クエリの処理
  let ans = '';
  let act = [];
  let ele = [];
  let flg = true;
  const queryList = arg.query.split('&');
  for (const elem of queryList) {
    const block = elem.split('=');
    if (block[0].match(/^a/g)) {
      act.push(act_dic[block[1]]);
      if (flg) {
        ele.push('');
        flg = !flg;
      }
      flg = !flg;
    } else {
      ele.push(ele_dic[block[1]]);
      flg = !flg;
    }
  }
  for (let i = 0; i < act.length; i++) {
    ans += ele[i] + act[i];
  }
  console.log(ans);

  return (
    <div class="h-100">
      <div class="row py-5">
        <div class="col-7">
          <Tabs indicatorColor="primary" textColor="primary" centered>
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

export default MyDiary;
