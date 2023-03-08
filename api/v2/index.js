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

  let data = {
    id: quote.id,
    quote_text: quote.quote_text,
    age_restriction: quote.age_restriction,
    archived: quote.archived,
    source: [
      {
        id: SourceObj.id,
        age_restriction: SourceObj.age_restriction,
        name: SourceObj.name,
        link: SourceObj.link,
        authors: []
      }
    ]
  };

  for (let AuthorId of quote.authors) {
    let author=authors[AuthorId-1];
    data.source[0].authors.push({
      id: author.id,
      first_name: author.first_name,
      last_name: author.last_name,
      nickname: author.nickname,
      image: author.image
    });
  };

  return res.send(data);
});

app.listen(process.env.PORT || 21792, function () {
  console.log('Express listening on %s:%s', this.address().address, this.address().port);
});