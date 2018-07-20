const stocks = require('./localStockObj');

module.exports = {

  getStockData: (req, res, next) => {
    res.status(200).send(stocks);
  },

  updateStockData: (req, res, next) => {
    // req obj will give access to...
    // req.query - queries passed to us after /api/stocks?key=value
    // req.body - JSON obj passed in that bodyParser creates
    // req.params - URL parameters
    res.status(200).send(stocks);
  },

  create: (req, res, next) => {
    // expect the request to have a json body, 
    // user would have to submit some parameters here
    // res.status(200).send(stock)
  },
  
  deleteStock: (req, res, next) => {
    let {symbol} = req.params;
    symbol = symbol.toUpperCase();
    for (let i = 0; i < stocks.length; i++) {
      if (stocks[i]["Meta Data"]["2. Symbol"] === symbol) {
        stocks[i] = {};
      }
    }
    res.status(200).send(stocks)
  }
}

