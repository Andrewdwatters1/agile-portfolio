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
    for (let i = 0; i < this.props.stocksList.length; i++) {
      console.log("Symbol, Date and Price", this.props.stocksList[i]["Meta Data"]["2. Symbol"], this.props.stocksList[i]["Meta Data"]["3. Last Refreshed"], 
      this.props.stocksList[i]["Weekly Time Series"]["2018-07-20"]["4. close"]);
    }
    
    return (
      <div>
          {console.log("Watchlist props", this.props)}
          jkasdkl;sadj;<br />
          asdfasdfasdfa<br />
          asdfasdfasdff<br />
          ;lkajsdj;adsj<br />
      </div>
    )
  }
}

export default Watchlist;