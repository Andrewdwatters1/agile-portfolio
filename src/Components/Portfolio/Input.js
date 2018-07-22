import React, {Component} from 'react';
import '../.././CSS/main.css';
import axios from 'axios';
import {ToastContainer, ToastStore} from 'react-toasts';
import apiKey from '../.././apiKey';
import Display from './Display';
import Watchlist from './Watchlist';


class Input extends Component {
  constructor() {
    super();
    this.state = {
      symbolInput: "",
      sharesInput: "",
      sharesAdded: 0,
      stocksp: [],
      stocksw: [],
    }
  }

  symbolChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      symbolInput: e.target.value,
    })
  }

  sharesChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      sharesInput: e.target.value,
      })
  }

  portfolioAdd = () => {
    if(this.state.sharesInput && Number(this.state.sharesInput) !== 0) {
      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.symbolInput}&interval=1min&apikey=${apiKey}`).then(result => {
        if(!result.data["Error Message"]) {
          ToastStore.success(`Added ${this.state.sharesInput} share(s) of ${this.state.symbolInput.toUpperCase()} to Portfolio`)
          this.setState({
            stocksp: [...this.state.stocksp, result.data],
            })
            
        } else {
          ToastStore.error("Oops!  We couldn't find any stocks with that symbol. Please try again.");
        };
    })
    } else {
      ToastStore.warning('Number of Shares is Required');
    }
  }

  watchlistAdd = () => { // need to display an error if stock is already in watchlist
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.state.symbolInput}&interval=1min&apikey=${apiKey}`).then(result => {
      if(!result.data["Error Message"]) {
        ToastStore.success(`Added ${this.state.symbolInput.toUpperCase()} to Watchlist`);
        this.setState({
          stocksw: [...this.state.stocksw, result.data]
        });
    
      } else {
        ToastStore.error("Oops!  We couldn't find any stocks with that symbol. Please try again.");
      };
    })
  }

  render() {
    return (
    <div>
      <input placeholder="Ticker Symbol" onChange={this.symbolChange}></input>
      <input placeholder="Num Shares" onChange={this.sharesChange}></input>
      <button onClick={this.portfolioAdd}>Add to Portfolio</button>
      <button onClick={this.watchlistAdd}>Add to watchlist</button>
      {/* need to add stock symbol from meta-data with quantity
      to display component once for each time "add to portfolio" is clicked.
        Would be nice to have a cumulative counter in display component's 
        state keeping track of "holdings" and change "add to portfolio" button
      to buy/sell button*/}
      <div className="watchlist-left">
       <Watchlist stocksList={this.state.stocksw}/>
      </div>
      <Display stocksList={this.state.stocksp} numShares={this.state.sharesAdded}/>
      <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT}/>
    </div>
    )
  }
}

export default Input;