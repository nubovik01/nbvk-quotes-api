const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let items=[
  {
    "id": 0
  }
]

app.get("/", async function (req, res) {
  return res.send(items[Math.floor(Math.random() * items.length)]);
});

app.listen(process.env.PORT || 21790, function () {
  console.log('Express listening on %s:%s', this.address().address, this.address().port);
});