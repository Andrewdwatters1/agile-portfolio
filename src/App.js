import React, { Component } from 'react';

import Input from './components/Input'
import MarketIndexes from './components/MarketIndexes'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>AGILE PORTFOLIO VISUALIZER</h1>
        <Input />
        <MarketIndexes />
      </div >
    )
  }
}