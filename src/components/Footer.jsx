import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <ul>
            <li>
              <link to="/" className="footer-home active" />
            </li>
            <li>
              <link to="/weitao" className="footer-weitao" />
            </li>
            <li>
              <link to="/message" className="footer-message" />
            </li>
            <li>
              <link to="./cart" className="footer-cart" />
            </li>
            <li>
              <link to="./mine" className="footer-mine" />
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
