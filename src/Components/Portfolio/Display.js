import React, {Component} from 'react';
import '../.././CSS/main.css';
import DisplayItem from './DisplayItem';

class Display extends Component {
  constructor() {
    super()
  }

  displayAll = (arr) => {
    return <DisplayItem positionInfo={arr[arr-1]}/>
  }

  render() {
    let portfolio = [];
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
    // var portfolioStocks = this.state.portfolio.map((elem, ind) => {
    //   return <p key={ind}>{elem.symbol} {elem.shares} {elem.price} </p>
    // })

    console.log(portfolio);
    return (
      <div className="portfolio-display-main">
        <h2>Holdings</h2>
        <p>{this.displayAll(portfolio)}</p>
        {/* <DisplayItem positionInfo={portfolioStocks[portfolioStocks.length-1]}/> */}
      </div>
    )
  }
}

export default Display;