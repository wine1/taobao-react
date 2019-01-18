import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// 异步按需加载
import asyncComponent from "../utils/asyncComponent";
import home from "../page/home/Index";
import weitao from "../page/weitao/index";
// const home = asyncComponent(() => import("../page/home/Index"));
// const weitao = asyncComponent(() => import("../page/weitao/index"));
const message = asyncComponent(() => import("../page/weitao/index"));
const cart = asyncComponent(() => import("../page/cart/index"));
const mine = asyncComponent(() => import("../page/mine/index"));
export default class RouteConfig extends Component {
  render() {
    return (
      <Router basename="">
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/home" exact component={home} />
          <Route path="/weitao" component={weitao} />
          <Route path="/message" component={message} />
          <Route path="/cart" component={cart} />
          <Route path="/mine" component={mine} />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}
