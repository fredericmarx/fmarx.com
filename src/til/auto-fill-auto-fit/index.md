---
layout: base
title: Auto‑fill or auto‑fit?
webmentions: true
date: 2018-11-04
---
One of my favorite snippets of CSS Grid is the following one:

```
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

I once spent a significant amount of time wondering why it would create more columns than grid-items. Turns out, there is a subtle difference between `auto-fill` and `auto-fit`. If you want to make sure that your grid-items always span at least the full width of your grid you need to use `auto-fit` for that.

[Sara Soueidan](https://www.sarasoueidan.com/) has kindly written a [comprehensive explanation over at CSS-Tricks](https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/). Thank you, Sara!
