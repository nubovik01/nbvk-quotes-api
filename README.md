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

let quote = await fetch("https://nbvk-quotes-api.vercel.app/v2").then(response => response.json()); // { "id": ..., "quote_text": "...", ... }

let author = quote.source.authors[0]; // { "id": ..., "first_name": "...", ... }

console.log(author.first_name + ' ' + author.last_name + ': ' + quote.quote_text); // Text of quote
```

<a name="JavaScript-1"></a> 
#### Получение никнейма автора, если имя неизвестно

```
const fetch = require('node-fetch'); // v2.6.1

let quote = await fetch("https://nbvk-quotes-api.vercel.app/v2").then(response => response.json());

let author = quote.source.authors[0]; //  // { ..., "nickname": "...", ... }

if(!(author.last_name || author.first_name)) console.log(author.nickname + ': ' + quote.quote_text);
```

<a name="JavaScript-2"></a> 
#### Вывод нескольких авторов
```
const fetch = require('node-fetch'); // v2.6.1

let quote = await fetch("https://nbvk-quotes-api.vercel.app/v2").then(response => response.json()); // { "id": ..., "quote_text": "...", ... }

let authors = quote.source.authors.map(author => { // [ { ... }, ... ]
  let name = `${author.first_name} ${author.last_name ? author.last_name : ""}`;
  return author.nickname ? `${name} (${author.nickname})` : name;
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
