import React, { Component } from "react";

export default class CartList extends Component {
  render() {
    return (
      <div className="cart-list">
        <ul className="shop-list">
          <li>
            <ul className="good-list">
              <li>
                <i className="checkbox" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
