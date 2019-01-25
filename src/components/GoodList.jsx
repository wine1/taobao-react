import React, { Component } from "react";
import axios from "axios";

const resource = "http://172.30.66.29:4000";

export default class GoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.getGoods = this.getGoods.bind(this);
  }

  componentDidMount() {
    this.getGoods();
  }

  getGoods() {
    axios
      .get(resource + "/api/goodslist/get")
      .then(res => {
        console.log(res.data);
        this.setState({
         
        });
      })
      .catch(err => {
        console.log(err);
      });

    console.log(this.state.goods);
  }
  render() {
    let { goods } = this.state;
    return (
      <div className="good-list">
        <ul>
          
        </ul>
      </div>
    );
  }
}
