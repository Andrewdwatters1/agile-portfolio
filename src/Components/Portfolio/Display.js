import React, {Component} from 'react';
import '../.././CSS/main.css';

class Display extends Component {
  constructor() {
    super()
    // this.state = {
    //   sharesA: 0,
    //   sharesB: 0,
    //   sharesC: 0,
    //   sharesD: 0,
    //   sharesE: 0,
    //   sharesF: 0,
    // }
  }

  render() {
    var portfolio= [];
    for (let i = 0; i < this.props.stocksList.length; i++) {
      let mostRecent = Object.values(this.props.stocksList[i]["Time Series (1min)"])
      let foundMostRecent = mostRecent.shift()
      let recentTime = foundMostRecent["4. close"];
      let singleStock = {
        symbol: `${this.props.stocksList[i]["Meta Data"]["2. Symbol"].toUpperCase()}: `,
        shares: `${this.props.numShares} share(s) - `,
        price: `Last: $${recentTime}. `,
        totalValue: `Current Value: $${(recentTime * this.props.numShares)}`,
        time: `Last updated: ${this.props.stocksList[i]["Meta Data"]["3. Last Refreshed"]}`
      }
      portfolio.push(singleStock);
    }
    var portfolioStocks = portfolio.map((elem, ind) => {
      return <p key={ind}>{elem.symbol} {elem.shares} {elem.price} <b>{elem.totalValue}</b> </p>
    })
    console.log('Shares in PF (cumulative)', this.props.numShares)
    return (
      <div className="portfolio-display-main">
        <h2>Holdings</h2>
        {portfolioStocks}<br />
      </div>
    )
  }
}

export default Display;