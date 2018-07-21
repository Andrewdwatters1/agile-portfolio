import React, {Component} from 'react';
import '../.././CSS/main.css';
import axios from 'axios';
import {ToastContainer, ToastStore} from 'react-toasts';
import apiKey from '../.././apiKey';


class Input extends Component {
  constructor() {
    super();
    this.state = {
      symbolInput: "",
      sharesInput: "",
      stocks: [],
    }
  }

  symbolChange = (e) => {
    console.log(e.target.value);
    this.setState({
      symbolInput: e.target.value,
    })
  }

  sharesChange = (e) => {
    console.log(e.target.value);
    this.setState({
      sharesInput: e.target.value,
    })
  }

  filterSymbol = () => {
    if(this.state.sharesInput) {
      axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=${this.state.symbolInput}&apikey=${apiKey}`).then(result => {
      let stockz = [];
      console.log(result.data);
        if(!result.data["Error Message"]) {
          stockz.push(result.data);
          ToastStore.success(`Added ${this.state.sharesInput} share(s) of ${this.state.symbolInput.toUpperCase()} to Portfolio!`)
          this.setState({
            stocks: stockz
            })
        } else {
          ToastStore.error("Oops!  We couldn't find any stocks with that symbol. Please try again.");
        };
      console.log(this.state.stocks);
      // toast success w/ symbol, fail w/ couldn't find that ticker, return meta data
    })
    } else {
      ToastStore.warning('Number of Shares is required');
    }
  }

  render() {
    return (
    <div>
      <ToastContainer store={ToastStore} position={ToastContainer.POSITION.BOTTOM_RIGHT}/>
      <input placeholder="Ticker Symbol" onChange={this.symbolChange}></input>
      <input placeholder="Num Shares" onChange={this.sharesChange}></input>
      <button onClick={this.filterSymbol}>Add to portfolio</button>
      <button>Add to watchlist</button>
    </div>
    )
  }
}

export default Input;