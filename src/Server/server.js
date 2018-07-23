const express = require('express');
const bodyParser = require('body-parser');
const sc = require("./controllers/stockController");


//import objects from controller file

const app = express();

app.use(bodyParser.json());

app.get("/api/stocks", sc.getStockData);
// app.put(`api/stocks ${plus param to change}`, sc.updateStockData);
app.post(`/api/stocks/:${stockInfo}`, sc.manuallyAdd);
app.delete("/api/stocks/:symbol", sc.deleteStock);

const port = 3013;
app.listen(port, () => {
  console.log("Loud and clear on port:", port);
})
