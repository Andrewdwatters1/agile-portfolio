import React, {Component} from 'react';
import '../.././CSS/main.css';

class Display extends Component {
  constructor() {
    super()

    this.state = {
      somestate: "someval"
    }
  }

  render() {
    return (
      <div>
        {/* {console.log("Display Props", this.props)} */}
        Display
      </div>
    )
  }
}

export default Display;