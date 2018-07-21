import React, {Component} from 'react';
import '../.././CSS/main.css';

class Watchlist extends Component {
  constructor() {
    super()

    this.state = {
      somestate: "someval"
    }
  }

  render() {
    var watchlist = [];
    for (let i = 0; i < this.props.stocksList.length; i++) {
      watchlist.push(`Symbol: ${this.props.stocksList[i]["Meta Data"]["2. Symbol"].toUpperCase()}, Updated: ${this.props.stocksList[i]["Meta Data"]["3. Last Refreshed"]}, Price: ${this.props.stocksList[i]["Time Series (1min)"]["2018-07-20 16:00:00"]["4. close"]}`);
    }
    return (
      <div>
          {JSON.stringify(watchlist)}
      </div>
    )
  }
}

export default Watchlist;