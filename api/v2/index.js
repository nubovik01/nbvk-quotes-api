const express = require("express");
const bodyParser = require('body-parser');
let quotes = require('../quotes.json');
let authors = require('../authors.json');
let sources = require('../sources.json');

const app = express();
app.use(bodyParser.json());

app.get("/v2", async (req, res) => {
  let filteredQuotes = req.query.archived ? quotes : quotes.filter(quote => !quote.archived);
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
    }
  };

  return res.send(data);
});

const port = process.env.PORT || 21792;
app.listen(port, () => {
  console.log(`Express listening on port ${port}`);
});