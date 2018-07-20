import React, { Component } from 'react';
// import logo from './logo.svg';
import './CSS/main.css';
import axios from 'axios';
import apiKey from './apiKey';

import Header from './Components/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Watchlist from './Components/Portfolio/Watchlist';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],

    }
  }

  componentDidMount = () => {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AMZN&apikey=${apiKey}`).then(result => {
    console.log(result.data); 
    this.setState({

      })
    })
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
