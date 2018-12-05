import React from 'react';
// import axios from 'axios';

export default function WatchList(props) {
  return (
    <div>
      <h1>WATCHLIST</h1>
      {props.watchlist
        .map((e, i) => {

          let symbol = e['Meta Data']['2. Symbol'].toUpperCase();
          let currentPrice = Number([...Object.values(e['Time Series (1min)'])].pop()['4. close']).toFixed(2);

          return <h2 key={i}>{`${symbol}: $${currentPrice}`}</h2>
        })}
    </div>
  )
}
