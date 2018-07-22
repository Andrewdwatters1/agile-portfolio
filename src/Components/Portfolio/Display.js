import React, {Component} from 'react';
import '../.././CSS/main.css';
import DisplayItem from './DisplayItem';

class Display extends Component {
  constructor() {
    super()
  }

  render() {
    var portfolio= [];
    for (let i = 0; i < this.props.stocksList.length; i++) {
      let mostRecent = Object.values(this.props.stocksList[i]["Time Series (1min)"])
      let foundMostRecent = mostRecent.shift()
      let recentTime = foundMostRecent["4. close"];
      let singleStock = {
        symbol: `${this.props.stocksList[i]["Meta Data"]["2. Symbol"].toUpperCase()}`,
        shares: `${this.props.numShares}`,
        price: `${recentTime}`,
        time: `Last updated: ${this.props.stocksList[i]["Meta Data"]["3. Last Refreshed"]}`
      }
      portfolio.push(singleStock);
    }
    var portfolioStocks = portfolio.map((elem, ind) => {
      return <p key={ind}>{elem.symbol} {elem.shares} {elem.price} </p>
    })
    return (
      <div className="portfolio-display-main">
        <h2>Holdings</h2>
        <DisplayItem positionInfo={portfolioStocks[portfolioStocks.length-1]}/>
      </div>
    )
  }
}

export default Display;