import React, {Component} from 'react';
import '../.././CSS/main.css';
import Input from './Input';
import Display from './Display';

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
        <p>Portfolio main</p>
        <Display/>
      </div>
    )
  }
}

export default Portfolio;