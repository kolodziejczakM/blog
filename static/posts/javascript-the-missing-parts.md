---
title: JavaScript - the missing parts
date: 28-05-2019
writtenBy: Marcin Kołodziejczak
backgroundFile: universe-man.webp
---


# Live demo

Changes are automatically rendered as you type. You know this is hard when you want to write something meaningful but words cannot be typped, because you're sick and out of any power.
But it's not that bad you know? It's quite popular to have such bad feelings about writing after hours.

Let's just think about it, bro, it shouldn't be hard, really.

* Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual, "native" React DOM elements
* Allows you to escape or skip HTML (try toggling the checkboxes above)
* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!

## HTML block below

<blockquote>
  This blockquote will change based on the HTML settings above.
</blockquote>

## How about some code?
```js
var React = require('react');
var Markdown = require('react-markdown');

React.render(
  <Markdown source="# Your markdown here" />,
  document.getElementById('content')
);
```

Pretty neat, eh?

## Tables?

| Feature   | Support |
| --------- | ------- |
| tables    | ✔       |
| alignment | ✔       |
| wewt      | ✔       |

## More info?

Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)

---------------

A component by [Espen Hovlandsdal](https://espen.codes/)
