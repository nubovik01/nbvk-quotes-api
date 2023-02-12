const express = require("express");
const bodyParser = require('body-parser');
let quotes = require('../quotes.json');
let authors = require('../authors.json');
let sources = require('../sources.json');

const app = express();
app.use(bodyParser.json());

app.get("/v2", async function (req, res) {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  let SourceObj = sources[quote.source - 1];
  let AuthorObj = authors[quote.author - 1];

  let data = {
    id: quote.id,
    quote_text: quote.quote_text,
    age_restriction: "0+",
    source: {
      id: SourceObj.id,
      age_restriction: SourceObj.age_restriction,
      name: SourceObj.name,
      link: SourceObj.link,
      author: {
        id: AuthorObj.id,
        first_name: AuthorObj.first_name,
        last_name: AuthorObj.last_name,
        nickname: AuthorObj.nickname
      }
    }
  }
  return res.send(data);
});

app.listen(process.env.PORT || 21792, function () {
  console.log('Express listening on %s:%s', this.address().address, this.address().port);
});