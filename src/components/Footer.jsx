import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  render() {
    return (
      <div>
        <footer>
          <ul>
            <li className="footer-home active">
              <Link to="/" />
            </li>
            <li className="footer-weitao">
              <Link to="/weitao" />
            </li>
            <li className="footer-message">
              <Link to="/message" />
            </li>
            <li className="footer-cart">
              <Link to="/cart" />
            </li>
            <li className="footer-mine">
              <Link to="/mine" />
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
