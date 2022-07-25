import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Homepage,
  Cryptocurrencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "black", textAlign: "center" }}
          >
            Sanu-Cryptoverse
            <br />
            All rights reserved.
          </Typography.Title>
          <Space>
            <Link style={{ color: "#21A698" }} to="/">
              Home
            </Link>
            <Link style={{ color: "#21A698" }} to="/cryptocurrencies">
              Cryptocurrencies
            </Link>
            <Link style={{ color: "#21A698" }} to="/news">
              News
            </Link>
            <a
              href="https://github.com/SanuKumar"
              style={{ color: "#21A698" }}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
