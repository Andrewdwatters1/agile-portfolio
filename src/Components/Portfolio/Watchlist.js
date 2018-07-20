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
    return (
      <div>
        {/* for each time input "add to watchlist" button is clicked
        add the stock to the watchlist */}
        Watchlist
      </div>
    )
  }
}

export default Watchlist;