import React, {Component} from 'react';
import '../.././CSS/main.css';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      symbolInput: "",
      sharesInput: "",
    }
  }

  symbolChange = (e) => {
    console.log(e.target.value);
    this.setState({
      symbolInput: e.target.value,
    })
  }

  sharesChange = (e) => {
    console.log(e.target.value);
    this.setState({
      sharesInput: e.target.value,
    })
  }

  render() {
    return (
    <div>
      <input placeholder="Ticker Symbol" onChange={this.symbolChange}></input>
      <input placeholder="Num Shares" onChange={this.sharesChange}></input>
      <button >Add to my portfolio</button>
      <button>Add to watchlist</button>
    </div>
    )
  }
}

export default Input;