import React, { Component } from 'react';
// import logo from './logo.svg';
import './CSS/main.css';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <div class="outer-flex">

        <div class="content-right-main">
          <Header/>
          <div>Portfolio Container
            {/* <Input/>
            <BuySell/>
            <Display/> */}
           </div>
           {/* <Footer/> */}
        </div>

        <div class="content-left-main">Left Sidebar
          {/* <MarketIndexes/>
          <Search/>
          <Watchlist/> */}
        </div>

      </div>
    );
  }
}

export default App;
