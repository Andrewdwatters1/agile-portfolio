// const stocks = require('./localStockObj');
const axios = require('axios');

module.exports = {

  getIntradayPrices: (req, res) => {
    const { symbol } = req.body;
    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=1min&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`)
      .then(result => res.status(200).send(result.data))
      .catch(error => console.log(error));
  },

  getIndexInfo: async (req, res) => {
    const endpoints = [
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=DJI&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=QQQ&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`,
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=INX&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
    ];
    const results = [];

    endpoints.forEach(endpoint => {
      axios.get(endpoint)
        .then(result => {
          let symbol = Object.values(result.data['Global Quote'])[0]
          results.push({ symbol, data: result.data['Global Quote'] })
          if (results.length === 3) processResult()
        })
        .catch(error => results.push(error));
    })

    processResult = () => res.status(200).send(results)
  }








  // getStockData: (req, res, next) => {
  //   res.status(200).send(stocks);
  // },

  // updateStockData: (req, res, next) => {
  //   // req obj will give access to...
  //   // req.query - queries passed to us after /api/stocks?key=value
  //   // req.body - JSON obj passed in that bodyParser creates
  //   // req.params - URL parameters
  //   res.status(200).send(stocks);
  // },

  // manuallyAdd: (req, res, next) => {
  //   let { stockInfo } = req.body;
  //   console.log('user wishes to add', req.body);
  // },

  // deleteStock: (req, res, next) => {
  //   let { symbol } = req.params;
  //   symbol = symbol.toUpperCase();
  //   for (let i = 0; i < stocks.length; i++) {
  //     if (stocks[i]["Meta Data"]["2. Symbol"] === symbol) {
  //       stocks[i] = {};
  //     }
  //   }
  //   res.status(200).send(stocks)
  // }
}

