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
const weitao = asyncComponent(() => import("../page/weitao/index"));
const message = asyncComponent(() => import("../page/weitao/index"));
const cart = asyncComponent(() => import("../page/cart/index"));
const mine = asyncComponent(() => import("../page/mine/index"));
export default class RouteConfig extends Component {

  render() {
    return (
      <Router basename="">
        <Switch>
          {/* exact是Route下的一条属性，一般而言，react路由会匹配所有匹配到的路由组价，exact能够使得路由的匹配更严格一些。
          exact的值为bool型，为true是表示严格匹配，为false时为正常匹配。
          如在exact为true时，’/link’与’/’是不匹配的，但是在false的情况下它们又是匹配的。 */}
          <Route path="/" exact component={home} />
          <Route path="/home" component={home} />
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
