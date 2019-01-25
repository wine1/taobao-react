import React, { Component } from "react";
import Footer from "../../components/Footer";
import Search from "../../components/Search";
import GoodList from "../../components/GoodList";

export default class Index extends Component {

  render() {
    return (
      <div className="home-index">
        <header>
          <Search />
        </header>

        <div className="wrap-swiper" />

        <div className="classfify-list">
          <ul className="classfify">
            <li>
              <img src={require("../../assets/home_main_icon0.png")} alt="" />
              <p>天猫</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon1.png")} alt="" />
              <p>聚划算</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon2.png")} alt="" />
              <p>天猫国际</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon3.png")} alt="" />
              <p>饿了么</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon4.png")} alt="" />
              <p>天猫超市</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon5.png")} alt="" />
              <p>充值中心</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon6.png")} alt="" />
              <p>飞猪旅行</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon7.png")} alt="" />
              <p>领金币</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon8.png")} alt="" />
              <p>拍卖</p>
            </li>
            <li>
              <img src={require("../../assets/home_main_icon9.png")} alt="" />
              <p>分类</p>
            </li>
          </ul>
        </div>

        <div className="good-list">
          <GoodList />
        </div>
        <Footer />
      </div>
    );
  }
}
