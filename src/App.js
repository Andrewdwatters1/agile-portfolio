import React, { Component } from 'react';

import Header from './components/Header'
import Portfolio from './components/Portfolio/Portfolio'


class App extends Component {
  // constructor() {
  // super();
  // }

  render() {
    return (
      <div>
        <div>
          <Header />
          <Portfolio />
          {/* <Footer/> */}
        </div>
      </div >
    )
  }
}

export default App;
