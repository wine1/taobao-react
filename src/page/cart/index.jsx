import React, { Component } from "react";
import Footer from "../../components/Footer";
import CartList from '../../components/CartList';
export default class Index extends Component {
  render() {
    return (
      <div>
        <div className="g-head1" style={{ display: "none" }}>
          <p>购物车(0)</p>
          <p>管理</p>
        </div>
        <div className="g-head2">
          <p>购物车(0)</p>
          <p>管理</p>
        </div>
        <CartList />
        <Footer />
      </div>
    );
  }
}
