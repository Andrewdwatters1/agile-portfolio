import React, { Component } from 'react';
// import logo from './logo.svg';
import './CSS/main.css';
import axios from 'axios';
import apiKey from './apiKey';

import Header from './Components/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Watchlist from './Components/Portfolio/Watchlist';



var symbol = "FB";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ifneeds: "has"
    }
  }

  render() {
    return (
      <div className="outer-flex">

        <div className="content-right-main">
          <Header/>
          <Portfolio/> {/* Portfolio Renders children input, watchlist and display*/}
           {/* <Footer/> */}
        </div>

        <div className="content-left-main">Left Sidebar
          <Watchlist/>
          {/* <Search/>
          <MarketIndexes/> */}
        </div>

      </div>
    );
  }
}

export default App;
