import React, {Component} from 'react';
import './../CSS/main.css';
import axios from 'axios';
import apiKey from './../apiKey';

class MarketIndexes extends Component {
  constructor () {
    super();
    this.state = {
      recentIndex: "",
      recentPrices: ""
    }
  }

componentWillMount = () => {
  axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.props.indexSymbol}&interval=15min&apikey=${apiKey}`).then(result => {
  this.setState({
    recentIndex: result.data,
    recentPrices: result.data["Time Series (15min)"]
  })
})
}

render() {
  if (this.state.recentIndex["Meta Data"]) {
    return (
      <div>
        <p>{`${this.state.recentIndex["Meta Data"]["2. Symbol"]} - $${this.state.recentPrices[(this.state.recentIndex["Meta Data"]["3. Last Refreshed"])]['4. close']}`}</p>
      </div>
      )
    } else {
      return (null)
    }
  }
}

export default MarketIndexes;