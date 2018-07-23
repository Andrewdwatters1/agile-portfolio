import React, {Component} from 'react';
import './../CSS/main.css';
import axios from 'axios';
import apiKey from './../apiKey';

class MarketIndexes extends Component {
  constructor () {
    super();
  }


render() {
  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.props.indexSymbol}&apikey=${apiKey}`).then(result => {
    console.log(result.data);
})
  return (
    <p>nothing</p>
  )
}
}

export default MarketIndexes;