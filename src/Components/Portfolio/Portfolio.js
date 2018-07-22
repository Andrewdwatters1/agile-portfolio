import React, {Component} from 'react';
import '../.././CSS/main.css';
import Input from './Input';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      someprop: "someval"
    }
  }

  render() {
    return (
      <div>
        <Input/>
      </div>
    )
  }
}

export default Portfolio;