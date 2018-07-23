import React, {Component} from 'react';
import '../.././CSS/main.css';
import axios from 'axios';
import apiKey from './../../apiKey';

class Watchlist extends Component {
  constructor() {
    super()
    this.state = {
      userInput: "",
    }
  }

  changeInput = (e) => {
    this.setState({
      userInput: e.target.value,
    })
  }

  watchlistUpdate = (symb, elem) => {
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symb}&interval=5min&apikey=${apiKey}`).then(result => {
      console.log(result.data);
    if(result.data["Meta Data"]) {
        elem.price = ` ${(result.data["Meta Data"]["2. Symbol"].toUpperCase())} - $${(result.data["Time Series (5min)"][(result.data["Meta Data"]["3. Last Refreshed"])]["4. close"])}`;
        // let elementz =  <div>{elem.price}</div>
       } 
    });
    // return elementz;
  }

  render() {
    var watchlist = [];
    if (this.props.stocksList.length) {
      for (let i = 0; i < this.props.stocksList.length; i++) {
        let mostRecent = Object.values(this.props.stocksList[i]["Time Series (5min)"])
        let foundMostRecent = mostRecent.shift()
        let recentTime = foundMostRecent["4. close"];
        let singleStock = {
          price: `${this.props.stocksList[i]["Meta Data"]["2. Symbol"].toUpperCase()} -  $${recentTime}`,
        }
        watchlist.push(singleStock)
      }
    }
    
   
    var watchlistStocks = watchlist.map((elem, ind) => {
      return <p key={ind}>{elem.price}
      <input placeholder="new symbol" onChange={this.changeInput}></input>
      <button onClick={() => this.watchlistUpdate(this.state.userInput, elem)}>Update Watchlist</button></p>
    })
    return (
      <div>
        {watchlistStocks}<br />
      </div>
    )
  }
}

export default Watchlist;
