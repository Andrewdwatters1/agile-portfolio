import React, { Component } from 'react';
import axios from 'axios';

export default class MarketIndexes extends Component {
  constructor() {
    super();
    this.state = {
      preventDuplicateCalls: false,
      indexPriceInfo: []
    }
  }

  getInitialIndexData = () => {
    if (!this.state.preventDuplicateCalls) {
      axios.get('/api/getIndexInfo')
        .then(result => {
          console.log(result)
          if (result.data.every(e => e.data && e.symbol)) {
            let info = [...result.data]
              .map((e, i) => {
                let { symbol } = e;
                let price = Number(e.data['05. price']).toFixed(2);
                let volume = Number(Number((e.data['06. volume'])) / 1000000).toFixed(2);
                let change = e.data['10. change percent'];
                let dayChange = Number(change.slice(0, change.length-1)).toFixed(2);
                let key = i;
                return price && volume && key && symbol && dayChange !== NaN ? { price, volume, key, symbol, dayChange } : false
              })
            this.setState({
              preventDuplicateCalls: true,
              indexPriceInfo: [...info]
            })
          } else {
            // this.attemptToRefreshIndexData(30000)
          }
        })
    }
  }

  // attemptToRefreshIndexData = (delay) => {
  //   setTimeout(() => {
  //     console.log('attempt made')
  //     this.getInitialIndexData()
  //   }, delay)
  // }

  componentDidMount = () => {
    this.getInitialIndexData()
  }

  render() {
    console.log(this.state)
    const { indexPriceInfo } = this.state;
    return (
      <div>
        <h3>MARKET INDEXES</h3>
        {indexPriceInfo && indexPriceInfo
          .map((e) => {
            if (e.key && e.symbol && e.price && e.volume && e.dayChange) {

              return (
                <div key={e.key}>
                  <p>{`${e.symbol}: $${e.price}`}</p>
                  <p>{`Volume: ${e.volume} M`}</p>
                  <p>{`Day Change: ${e.dayChange}%`}</p>
                </div>
              )
            } else {
              // this.attemptToRefreshIndexData()
              return null
            }
          })}
      </div>
    )
  }
}