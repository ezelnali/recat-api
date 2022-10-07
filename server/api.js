
const express = require("express");
var cors = require('cors');
const bodyParser = require("body-parser");

const app = express();

app.use(cors())

const routes = require("./routes");

app.use(bodyParser.json());

app.use(routes);

app.listen(8080, () => {
  console.log("Server is running!");
});
