import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Top from "./pages/Top";
import Editor from "./pages/Editor";
import User from "./pages/User";

const app = document.getElementById('app');
ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Layout>
      <Route exact path="/" component={Top}></Route>
      <Route exact path="/editor" component={Editor}></Route>
      <Route exact path="/user" component={User}></Route>
    </Layout>
  </Router>,
app);