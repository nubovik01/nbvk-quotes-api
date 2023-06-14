const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get("/", async function (req, res) {
  return res.send({ "comment": "Thanks for interesting! Go to /v2 now." });
});

app.listen(process.env.PORT || 21790, function () {
  console.log('Express listening on %s:%s', this.address().address, this.address().port);
});
