const express = require("express");
const bodyParser = require('body-parser');
let package=require('../../package.json');
let quotes = require('../quotes.json');
let authors = require('../authors.json');
let sources = require('../sources.json');

var app = express();
app.use(bodyParser.json());

app.get("/v2", async (req, res) => {
  let filteredQuotes = req.query.archived === 'false' ? quotes.filter(quote => !quote.archived) : quotes;
  let quote = filteredQuotes[Math.floor(Math.random() * filteredQuotes.length)];
  let source = sources.find(s => s.id === quote.source);
  let authorsData = quote.authors.map(authorId => {
    let { id, first_name, last_name, nickname, image } = authors.find(a => a.id === authorId);
    return { id, first_name, last_name, nickname, image };
  });

  let data = {
    id: quote.id,
    quote_text: quote.quote_text,
    age_restriction: quote.age_restriction,
    archived: quote.archived,
    source: {
      id: source.id,
      age_restriction: source.age_restriction,
      name: source.name,
      link: source.link,
      authors: authorsData
    },
    api: {
      name: "nbvk quotes api v"+package.version
    }
  };

  return res.send(data);
});

app.listen(process.env.PORT || 21792, function () {
  console.log('Express listening on %s:%s', this.address().address, this.address().port);
});