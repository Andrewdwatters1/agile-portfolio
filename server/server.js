const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const stockCtrl = require("./controllers/stockController");

//import objects from controller file

const port = process.env.SERVER_PORT;
const app = express();
app.use(bodyParser.json());


app.post('/api/addToPortfolio', stockCtrl.getIntradayPrices);
app.post('/api/addToWatchList', stockCtrl.getIntradayPrices);
app.get('/api/getIndexInfo', stockCtrl.getIndexInfo);

// app.get('/api/stocks', stockCtrl.getStockData);
// app.put(`api/stocks ${plus param to change}`, stockCtrl.updateStockData);
// app.post('/api/stocks/:${stockInfo}', stockCtrl.manuallyAdd);
// app.delete('/api/stocks/:symbol', stockCtrl.deleteStock);

app.listen(port, () => {
  console.log("Loud and clear on port:", port);
})
