# nbvk-quotes-api

## Table of contents
1. [Релизы](#Releases)
2. [Поддерживаемые версии](#supported)
3. [Использование](#HowToUse)
  1. [Примеры на JavaScript](#HowToUse-JavaScript-0)
     1. [Вывод цитаты, имени и фамилии автора](#JavaScript-0)
     2. [Получение никнейма автора, если имя неизвестно](#JavaScript-1)
     3. [Вывод нескольких авторов](#JavaScript-2)
4. [Зарепортить уязвимость](#report-a-vulnerability)
5. [Добавить цитату](#add-your-quote)
   1. [через GitHub](#add-your-quote-gh)
   2. [по почте](#add-your-quote-email)

<a name="Releases"></a>
## Релизы
Вы можете отслеживать изменения и обновления API здесь: https://github.com/Nubovik01/nbvk-quotes-api/releases

<a name="supported"></a>
## Поддерживаемые версии
Пожалуйста, не используйте очень старые версии API. Используйте старые версии только если вы уверены в своих действиях ⚠️

| Version | Supported  |
| ------- | ---------- |
| 2.2.0   | ✅        |
| 2.1.\*  | ❌        |
| 2.0.0   | ❌        |
| 1.0.0   | ✅        |
| < 1.0.0 | ❌        |

<a name="HowToUse"></a> 
## Использование

<a name="HowToUse-JavaScript-0"></a>
### JavaScript

<a name="JavaScript-0"></a> 
#### Вывод цитаты, имени и фамилии автора

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
#### Получение никнейма автора, если имя неизвестно

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
#### Вывод нескольких авторов
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
  // Никита Бабушкин (Nubovik)
}).join(", ");

console.log(quote.quote_text+'\n'+authors);
```

<a name="report-a-vulnerability"></a>
## Зарепортить уязвимость
Расскажите про уязвимость по почте nubovik01@gmail.com

<a name="add-your-quote"></a>
## Добавить цитату
В данный момент принимаются цитаты только на русском языке, однако заявки принимаются на любом языке

<a name="add-your-quote-gh"></a>
### Через GitHub
Создайте новый issue: https://github.com/Nubovik01/nbvk-quotes-api/issues
<br>Форма: 
```
Title: Новая цитата для nbvk-quotes-api

Comment:
Пожалуйста, добавьте эту цитату в nbvk-quotes-api

Текст: [текст цитаты]
Источник: [<название источника> <ссылка> <возрастн. огр.>]
Авторы: [<имя> <фамилия> <никнейм> <ссылка на фото>]
Возрастное ограничение: [0+/6+/12+/16+/18+]
```
Пример формы:
![image](https://user-images.githubusercontent.com/50026919/226184092-ce19ba00-681e-464f-b340-0e03811c05ce.png)

<a name="add-your-quote-email"></a>
### По почте
Напишите письмо по этой форме на qwkrtezzz@gmail.com:
```
Привет, я [имя].

Пожалуйста, добавьте эту цитату в nbvk-quotes-api

Текст: [текст цитаты]
Источник: [<название источника> <ссылка> <возрастн. огр.>]
Авторы: [<имя> <фамилия> <никнейм> <ссылка на фото>]
Возрастное ограничение: [0+/6+/12+/16+/18+]

```
Пример формы:
```
Добрый день, я Кир.

Пожалуйста, добавьте эту цитату в nbvk-quotes-api

Под старость жить такая гадость...
livelib.ru, https://livelib.ru/quote/121598-evgenij-onegin-as-pushkin (0+)
Александр Пушкин (https://phonoteka.org/uploads/posts/2021-05/1622279835_17-phonoteka_org-p-aleksandr-pushkin-art-krasivo-19.jpg)
0+
```
