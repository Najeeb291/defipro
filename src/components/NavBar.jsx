import React, { Component } from "react";
import { Link } from "react-router-dom";
import DEFIPRO_LOGO1 from "../Img/DEFIPRO LOGO2 2.png";
import ic_round_log_out from "../Img/ic_round-log-out.png";
import ic_sharp_language from "../Img/ic_sharp-language.png";
class navBar extends Component {
  state = {
    defipro: "nav-item",
    farms: "nav-item",
    trade: "nav-item",
    network: "nav-item",
    reward: "nav-item",
    Transaction: "nav-item",
    Current: "transaction2-tab-btn",
    Transaction_History: "transaction2-tab-btn",
    reward_drop: "transaction2-tab-btn",
    bonus_plan: "transaction2-tab-btn",
  };
  click_defipro = () => {
    if (this.state.defipro == "nav-item") {
      this.setState({ defipro: "nav-item nav-item-active" });
      this.setState({ farms: "nav-item" });
      this.setState({ trade: "nav-item" });
      this.setState({ network: "nav-item" });
      this.setState({ reward: "nav-item" });
      this.setState({ Transaction: "nav-item" });
    }
  };
  click_farms = () => {
    if (this.state.farms == "nav-item") {
      this.setState({ defipro: "nav-item" });
      this.setState({ farms: "nav-item nav-item-active" });
      this.setState({ trade: "nav-item" });
      this.setState({ network: "nav-item" });
      this.setState({ reward: "nav-item" });
      this.setState({ Transaction: "nav-item" });
    }
  };
  click_trade = () => {
    if (this.state.trade == "nav-item") {
      this.setState({ defipro: "nav-item" });
      this.setState({ farms: "nav-item" });
      this.setState({ trade: "nav-item nav-item-active" });
      this.setState({ network: "nav-item" });
      this.setState({ reward: "nav-item" });
      this.setState({ Transaction: "nav-item" });
    }
  };
  click_trade = () => {
    if (this.state.trade == "nav-item") {
      this.setState({ defipro: "nav-item" });
      this.setState({ farms: "nav-item" });
      this.setState({ trade: "nav-item nav-item-active" });
      this.setState({ network: "nav-item" });
      this.setState({ reward: "nav-item" });
      this.setState({ Transaction: "nav-item" });
    }
  };
  click_network = () => {
    if (this.state.network == "nav-item") {
      this.setState({ defipro: "nav-item" });
      this.setState({ farms: "nav-item" });
      this.setState({ trade: "nav-item" });
      this.setState({ network: "nav-item nav-item-active" });
      this.setState({ reward: "nav-item" });
      this.setState({ Transaction: "nav-item" });
    }
  };
  click_reward = () => {
    if (this.state.reward == "nav-item") {
      this.setState({ defipro: "nav-item" });
      this.setState({ farms: "nav-item" });
      this.setState({ trade: "nav-item" });
      this.setState({ network: "nav-item" });
      this.setState({ reward: "nav-item nav-item-active" });
      this.setState({ Transaction: "nav-item" });
    }
  };
  click_transaction = () => {
    if (this.state.Transaction == "nav-item") {
      this.setState({ defipro: "nav-item" });
      this.setState({ farms: "nav-item" });
      this.setState({ trade: "nav-item" });
      this.setState({ network: "nav-item" });
      this.setState({ reward: "nav-item" });
      this.setState({ Transaction: "nav-item nav-item-active" });
    }
  };
  click_logo = () => {
    this.setState({ defipro: "nav-item" });
    this.setState({ farms: "nav-item" });
    this.setState({ trade: "nav-item" });
    this.setState({ network: "nav-item" });
    this.setState({ reward: "nav-item" });
    this.setState({ Transaction: "nav-item" });
  };
  click_current = () => {
    if (this.state.Current == "transaction2-tab-btn") {
      this.setState({ Current: "transaction2-tab-btn-active" });
      this.setState({ Transaction_History: "transaction2-tab-btn" });
    }
  };
  click_history = () => {
    if (this.state.Transaction_History == "transaction2-tab-btn") {
      this.setState({ Current: "transaction2-tab-btn" });
      this.setState({ Transaction_History: "transaction2-tab-btn-active" });
    }
  };
  click_reward_drop = () => {
    if (this.state.reward_drop == "transaction2-tab-btn") {
      this.setState({ reward_drop: "transaction2-tab-btn-active" });
      this.setState({ bonus_plan: "transaction2-tab-btn" });
    }
  };
  click_bonus_plan = () => {
    if (this.state.bonus_plan == "transaction2-tab-btn") {
      this.setState({ bonus_plan: "transaction2-tab-btn-active" });
      this.setState({ reward_drop: "transaction2-tab-btn" });
    }
  };
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark navBar-background"
        style={{ padding: "0px" }}
      >
        <div className="container-fluid" style={{ height: "100%" }}>
          <Link
            onClick={this.click_logo}
            to="/"
            className="navbar-brand"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={DEFIPRO_LOGO1} alt="logo" width="150px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            style={{ height: "100%" }}
            id="mynavbar"
          >
            <ul
              className="navbar-nav mx-auto"
              style={{
                height: "100%",
              }}
            >
              <li onClick={this.click_defipro} className={this.state.defipro}>
                <Link to="/home" className="nav-link-cutome">
                  DefiPro
                </Link>
              </li>
              <li onClick={this.click_farms} className={this.state.farms}>
                <Link to="/farms" className="nav-link-cutome">
                  Farms
                </Link>
              </li>
              <li onClick={this.click_trade} className={this.state.trade}>
                <Link to="/trade" className="nav-link-cutome">
                  Trade
                </Link>
              </li>
              <li onClick={this.click_network} className={this.state.network}>
                <Link to="/network" className="nav-link-cutome">
                  Network
                </Link>
              </li>
              <li
                onClick={this.click_reward}
                className={"dropdown " + this.state.reward}
              >
                <span
                  style={{ cursor: "pointer" }}
                  className="nav-link-cutome"
                  data-bs-toggle="dropdown"
                >
                  Reward
                </span>
                <ul className="dropdown-menu">
                  <div className="d-flex flex-column">
                    <Link
                      to="/reward"
                      onClick={this.click_reward_drop}
                      className={this.state.reward_drop}
                    >
                      <span>Reward</span>
                    </Link>
                    <Link
                      to="/bonus-plan"
                      onClick={this.click_bonus_plan}
                      className={this.state.bonus_plan}
                    >
                      <span>Bonus Plan</span>
                    </Link>
                  </div>
                </ul>
              </li>
              <li
                onClick={this.click_transaction}
                className={"dropdown " + this.state.Transaction}
              >
                <span
                  style={{ cursor: "pointer" }}
                  className="nav-link-cutome"
                  data-bs-toggle="dropdown"
                >
                  Transaction
                </span>
                <ul className="dropdown-menu">
                  <div className="d-flex flex-column">
                    <Link
                      to="/current-stake"
                      onClick={this.click_current}
                      className={this.state.Current}
                    >
                      <span>Current</span>
                    </Link>
                    <Link
                      to="/transaction-history"
                      onClick={this.click_history}
                      className={this.state.Transaction_History}
                    >
                      <span>Transaction History</span>
                    </Link>
                  </div>
                </ul>
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-center">
              <button className="btn navBar-btn me-2" type="button">
                Unlock Wallet
              </button>
              <span style={{ color: "white" }}>EN</span>
            </div>
          </div>
        </div>
        <div
          style={{ background: "#00082D" }}
          class="canvas_hidde offcanvas offcanvas-end p-4"
          id="demo"
        >
          <div class="mb-4">
            <button className="btn navBar-btn" type="button">
              Unlock Wallet
            </button>
          </div>
          <div className="mb-4">
            <Link
              className="nav_collaps_bar_link"
              style={{ display: "block" }}
              to="/"
            >
              <img src={ic_round_log_out} alt="" width="25px" />
              <span style={{ marginLeft: "10px" }}>Log In</span>
            </Link>
          </div>
          <div className="dropdown mb-4">
            <div
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ display: "block", color: "white" }}
            >
              <img src={ic_sharp_language} alt="" width="25px" />
              <span style={{ marginLeft: "10px" }}>English</span>
            </div>
            <ul class="dropdown-menu" style={{ background: "#10183a" }}>
              <li>
                <a style={{ color: "white" }} class="dropdown-item" href="#">
                  English
                </a>
              </li>
              <li>
                <a style={{ color: "white" }} class="dropdown-item" href="#">
                  other
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <Link
              className="nav_collaps_bar_link"
              style={{ display: "block" }}
              to="/home"
            >
              <span style={{ marginLeft: "10px" }}>DefiPro</span>
            </Link>
          </div>
          <div className="mb-4">
            <Link
              className="nav_collaps_bar_link"
              style={{ display: "block" }}
              to="/farms"
            >
              <span style={{ marginLeft: "10px" }}>Farms</span>
            </Link>
          </div>
          <div className="mb-4">
            <Link
              className="nav_collaps_bar_link"
              style={{ display: "block" }}
              to="/trade"
            >
              <span style={{ marginLeft: "10px" }}>Trade</span>
            </Link>
          </div>
          <div className="mb-4">
            <Link
              className="nav_collaps_bar_link"
              style={{ display: "block" }}
              to="/network"
            >
              <span style={{ marginLeft: "10px" }}>Network</span>
            </Link>
          </div>
          <div className="dropdown mb-4">
            <div
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ display: "block", color: "white" }}
            >
              <span style={{ marginLeft: "10px" }}>Reward</span>
            </div>
            <ul class="dropdown-menu" style={{ background: "#10183a" }}>
              <li>
                <Link
                  style={{ color: "white" }}
                  class="dropdown-item"
                  to="/rewardx"
                >
                  Reward
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white" }}
                  class="dropdown-item"
                  to="/bonus-plan"
                >
                  Bonus Plan
                </Link>
              </li>
            </ul>
          </div>
          <div className="dropdown mb-4">
            <div
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ display: "block", color: "white" }}
            >
              <span style={{ marginLeft: "10px" }}>Transaction</span>
            </div>
            <ul class="dropdown-menu" style={{ background: "#10183a" }}>
              <li>
                <Link
                  style={{ color: "white" }}
                  class="dropdown-item"
                  to="/current-stake"
                >
                  Current Stake List
                </Link>
              </li>
              <li>
                <Link
                  style={{ color: "white" }}
                  class="dropdown-item"
                  to="/transaction-history"
                >
                  Transaction History
                </Link>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <a
              className="nav_collaps_bar_link"
              style={{ display: "block" }}
              href=""
            >
              <span style={{ marginLeft: "10px" }}>Whitepaper</span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default navBar;
