# nbvk-quotes-api

## Table of contents
- [Releases](#Releases)
- [How to use?](#HowToUse)
  - [Examples on JavaScript](#HowToUse-JavaScript-0)
    - [Output of author's name, last name, and quote text](#JavaScript-0)
    - [Output of author's nickname if the name is unknown](#JavaScript-1)
    - [Output multiple authors](#JavaScript-2)

<a name="Releases"></a>
## Releases
You can track API updates and changes here: https://github.com/Nubovik01/nbvk-quotes-api/releases

<a name="HowToUse"></a> 
## Using

<a name="HowToUse-JavaScript-0"></a>
### JavaScript

<a name="JavaScript-0"></a> 
#### Output of author's name, last name, and quote text

```
const fetch = require('node-fetch'); // v2.6.1

let quote = await fetch("https://nbvk-quotes-api.vercel.app/v2").then(response => response.json());
/*
{
  "id": 3,
  "quote_text": "Есть же проще, у нас же нода >16.0.0",
  "age_restriction": "0+",
  "archived": false,
  "source": {
    "id": 7,
    "age_restriction": "0+",
    "name": "FlameOut Community :: Server of Nubovik",
    "link": "https://discord.gg/EJc8UC7yhZ",
    "authors": [
      {
        "id": 4,
        "first_name": "Илья",
        "last_name": "Петров",
        "nickname": "RedGuys",
        "image": null
      }
    ]
  }
}
*/

let author = quote.source.authors[0];
/*
{
  "id": 4,
  "first_name": "Илья",
  "last_name": "Петров",
  "nickname": "RedGuys",
  "image": null
}
*/

console.log(author.first_name + ' ' + author.last_name + ': ' + quote.quote_text);
// Илья Петров: Есть же проще, у нас же нода >16.0.0
```

<a name="JavaScript-1"></a> 
#### Output of author's nickname if the name is unknown

```
const fetch = require('node-fetch'); // v2.6.1

let quote = await fetch("https://nbvk-quotes-api.vercel.app/v2").then(response => response.json());
/*
{
  "id": 1,
  "quote_text": "Блин встретил новый год в нижнем белье",
  "age_restriction": "0+",
  "archived": false,
  "source": {
    "id": 6,
    "age_restriction": "18+",
    "name": "Цитатки Hil.su (18+)",
    "link": "https://t.me/hilsuquotes",
    "authors": [
      {
        "id": 2,
        "first_name": "Евгений",
        "last_name": null,
        "nickname": "dieKartoffel",
        "image": null
      }
    ]
  }
}
*/

let author = quote.source.authors[0];
/*
{
  "id": 2,
  "first_name": "Евгений",
  "last_name": null,
  "nickname": "dieKartoffel",
  "image": null
}

if(!(author.last_name || author.first_name)) console.log(author.nickname + ': ' + quote.quote_text);
// dieKartoffel: Блин встретил новый год в нижнем белье
```

<a name="JavaScript-2"></a> 
#### Output multiple authors
```
const fetch = require('node-fetch'); // v2.6.1

let quote = await fetch("https://nbvk-quotes-api.vercel.app/v2").then(response => response.json());
/*
{
  "id": 9,
  "quote_text": "— [Фотография]\n— Что это?\n— localhost:8000\n— А зачем мне API FlameOut?\n— ??\n— [Фотография], у меня сейчас на этом порте флейм запущен",
  "age_restriction": "0+",
  "archived": false,
  "source": {
    "id": 8,
    "age_restriction": "0+",
    "name": "Чат Telegram-канала \"nubovikxd\"",
    "link": "https://t.me/nubovikxd",
    "authors": [
      {
        "id": 7,
        "first_name": "Никита",
        "last_name": "Бабушкин",
        "nickname": "Nubovik",
        "image": "https://sun9-25.userapi.com/impg/cwyGWhU2eYGZVTXWEIBzBmMkBL3Tcz_iOJ7Lcw/xWyKAcr-NNw.jpg?size=720x1280&quality=95&sign=0f2bed6348ef796376bb138f6983ccc8"
      },
      {
        "id": 8,
        "first_name": "Тимофей",
        "last_name": "Петров",
        "nickname": "Bronnayina",
        "image": null
      }
    ]
  }
}
*/

let authors = quote.source.authors.map(author => {
  let name = `${author.first_name} ${author.last_name ? author.last_name : ""}`;
  return author.nickname ? `${name} (${author.nickname})` : name;
}).join(", ");

console.log(quote.quote_text+'\n'+authors);
```
