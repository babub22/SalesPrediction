const express = require("express");
const bodyParser = require("body-parser");
const predictSales = require("./utils/predictSales");

const app = express();
app.use(bodyParser.json());

app.post("/predict", (req, res) => {
  const { data, params } = req.body;

  if (!data) {
    return res.status(400).json({ error: "Missing data" });
  }

  if (!params) {
    const responseData = predictSales(data);
    return res.status(200).json(responseData);
  }

  const numOfWeeks = params[0].value;
  const responseData = predictSales(data, numOfWeeks);

  res.status(200).json(responseData);
});

app.listen(3000, () => {
  console.log("Server běží na portu 3000");
});
