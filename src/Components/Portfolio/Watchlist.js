import React, {Component} from 'react';
import '../.././CSS/main.css';

class Watchlist extends Component {
  constructor() {
    super()
  }

  render() {
    var watchlist = [];
    for (let i = 0; i < this.props.stocksList.length; i++) {
      let mostRecent = Object.values(this.props.stocksList[i]["Time Series (1min)"])
      let foundMostRecent = mostRecent.shift()
      let recentTime = foundMostRecent["4. close"];
      let singleStock = {
        price: `${this.props.stocksList[i]["Meta Data"]["2. Symbol"].toUpperCase()} -  $${recentTime}`,
        time: `Last updated: ${this.props.stocksList[i]["Meta Data"]["3. Last Refreshed"]}`
      }
      watchlist.push(singleStock)
    }

    let watchlistStocks = watchlist.map((elem, ind) => {
      return <p key={ind}>{elem.price}<br />{elem.time}</p>
    })
    return (
      <div>
        {watchlistStocks}<br />
      </div>
    )
  }
}

export default Watchlist;
