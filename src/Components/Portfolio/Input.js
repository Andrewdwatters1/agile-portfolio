import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, ToastStore } from 'react-toasts';

// import '../.././CSS/main.css';
import Display from './Display';
import Watchlist from './Watchlist';
import MarketIndexes from './../MarketIndexes';


class Input extends Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      shares: '',
      portfolio: [],
      watchlist: [],
    }
  }


  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }


  addToPortfolio = () => {
    const { symbol, shares, portfolio } = this.state;

    if (shares === 0) ToastStore.warning('#shares is required');
    else {
      axios.post('/api/addToPortfolio', { symbol }) //UPDATE IN BACKEND
        .then(result => {
          console.log(result)
          if (result.data["Error Message"]) ToastStore.error("Hmm... couldn't find that symbol");

          else {
            const position = { symbol: result.data['Meta Data']['2. Symbol'].toUpperCase(), shares }
            this.setState({
              portfolio: [...portfolio, position],
              symbol: '',
              shares: 0
            })
          }
        })
    }
  }

  addToWatchlist = () => {
    const { symbol, watchlist } = this.state;
    axios.post('/api/addToWatchList', { symbol })
      .then(result => {
        console.log(result)
        if (result.data['Error Message']) ToastStore.error("Hmm... couldn't find that symbol");
        else {

          this.setState({
            watchlist: [...watchlist, result.data],
            symbol: '',
            shares: 0
          }, () => ToastStore.success(`Added ${this.state.symbol} to Watchlist`))
        }
      })
  }

  render() {
    return (
      <div>
        <div>

          <input
            name="symbol"
            type="text"
            placeholder="Symbol"
            onChange={this.handleChange}
            value={this.state.symbol.toUpperCase()} />

          <input
            name="shares"
            type="number"
            min="0"
            placeholder="Shares"
            onChange={this.handleChange}
            value={this.state.shares} />

          <button
            onClick={this.addToPortfolio}>
            ADD TO PORTFOLIO
          </button>

          <button
            onClick={this.addToWatchlist}>
            ADD TO WATCHLIST
            </button>

        </div>

        <MarketIndexes indexSymbol={"DJI"} />
        <MarketIndexes indexSymbol={"IXIC"} />
        <MarketIndexes indexSymbol={"INX"} />

        <Watchlist watchlist={this.state.watchlist} />

        {/* <Display portfolio={this.state.portfolio} numShares={this.state.sharesAdded} /> */}


        <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT} />
      </div >
    )
  }
}

export default Input;