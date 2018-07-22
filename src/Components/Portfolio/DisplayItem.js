import React, {Component} from 'react';
import '../.././CSS/main.css';

class DisplayItem extends Component {
  constructor() {
    super()
  }

render() {
  let holdings = [];
  if (this.props.positionInfo) {
    for ( let i = 0; i <= this.props.positionInfo.key; i++) {
      holdings.push(
        this.props.positionInfo.props.children[0], 
        this.props.positionInfo.props.children[2], 
        this.props.positionInfo.props.children[4])
    }
  }

  var lastAdded;
  var lastAddedTotal;
  if(this.props.positionInfo) {
    lastAdded = (`${holdings[0]}: ${holdings[1]} share(s) - Last: $${(Number(holdings[2])).toFixed(2)}.`);
    lastAddedTotal = (`Current Value: $${(holdings[1] * holdings[2]).toFixed(2)}`);
  }
  return (
    <p>{lastAdded} {lastAddedTotal}</p>
  )
}  
}

export default DisplayItem;