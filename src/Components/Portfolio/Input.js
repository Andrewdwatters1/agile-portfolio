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
    if(this.state.sharesInput && this.state.sharesInput != 0) {
      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.state.symbolInput}&apikey=${apiKey}`).then(result => {
      let stockz = [];
        if(!result.data["Error Message"]) {
          stockz.push(result.data);
          ToastStore.success(`Added ${this.state.sharesInput} share(s) of ${this.state.symbolInput.toUpperCase()} to Portfolio`)
          this.setState({
            stocksp: stockz
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
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.state.symbolInput}&apikey=${apiKey}`).then(result => {
    let stockz = [];
      if(!result.data["Error Message"]) {
        stockz.push(result.data);
        ToastStore.success(`Added ${this.state.symbolInput.toUpperCase()} to Watchlist`);
        this.setState({
          stocksw: stockz
        })
      } else {
        ToastStore.error("Oops!  We couldn't find any stocks with that symbol. Please try again.");
      };
    })
  }

  render() {
    return (
    <div>
      <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT}/>
      <input placeholder="Ticker Symbol" onChange={this.symbolChange}></input>
      <input placeholder="Num Shares" onChange={this.sharesChange}></input>
      <button onClick={this.portfolioAdd}>Add to portfolio</button>
      <button onClick={this.watchlistAdd}>Add to watchlist</button>
      <Display/> {/* need to add stock symbol from meta-data with quantity
      to display component once for each time "add to portfolio" is clicked.
        Would be nice to have a cumulative counter in display component's 
        state keeping track of "holdings" and change "add to portfolio" button
      to buy/sell button*/}

      
      <Watchlist/> {/* need to add stock symbol from meta-data to watchlist
      component once for each time "Add to watchlist" is clicked w/ a valid 
    entry.  If stock symbol is already in watchlist, return error "this stock 
      is already in your watchlist""}*/}
    </div>
    )
  }
}

export default Input;