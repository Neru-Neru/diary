import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './pages/Layout';
import Top from './pages/Top';
import Editor from './pages/Editor';
import Mypage from './pages/Mypage';
import MyDiary from './pages/MyDiary';
import OtherList from './pages/OtherList';
import OtherDiary from './pages/OtherDiary';
import DescForm from './pages/DescForm';
import News from './pages/News';

const app = document.getElementById('app');
ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={Top}></Route>
      <Route exact path="/editor" component={Editor}></Route>
      <Route exact path="/mypage" component={Mypage}></Route>
      <Route exact path="/mydiary" component={MyDiary}></Route>
      <Route exact path="/otherlist" component={OtherList}></Route>
      <Route exact path="/otherdiary" component={OtherDiary}></Route>
      <Route exact path="/deskform" component={DescForm}></Route>
      <Route exact path="/news" component={News}></Route>
    </Layout>
  </Router>,
  app
);
