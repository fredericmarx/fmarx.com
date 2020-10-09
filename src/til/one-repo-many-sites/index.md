---
layout: base
title: One repo, many sites
description: How to deploy multiple versions of the same website with Eleventy and Netlify
webmentions: true
date: 2020-10-09
---

Two days ago, I learned through an ad that the _.gay_ top-level domain is now widely available.

Against my better judgement, I went to the website of my domain provider and, who would have thought; [software.gay](software.gay) was still available.

My initial idea was to just redirect it to [my site](fmarx.com), but after I shared the good news on Twitter, I was encouraged to take it one step further:

<div>
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Please please please make a reference to this glorious domain name in your meta title or meta description.</p>&mdash; Myriam (@myriamjessier) <a href="https://twitter.com/myriamjessier/status/1314176196121440256?ref_src=twsrc%5Etfw">October 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

I recently had to deal with multiple versions of the same site that were linked using [rel="canonical"](https://en.wikipedia.org/wiki/Canonical_link_element), and so I decided to create a non-canonical, gay headcanon mirror of my original site.

My website is built using the excellent [Eleventy static site generator](https://www.11ty.dev/), and [deployed automatically to Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) whenever I push a new git commit on my main branch.

That meant all I had to do was create another Netlify project for [software.gay](software.gay) and configure it to deploy a slightly different version of the same site.

Within the Netlify project, I [created the environment variable](https://docs.netlify.com/configure-builds/environment-variables/) `ELEVENTY_ENV` and set its value to `gay` to let my build script know who it was dealing with.

I then [exposed my environment variable to Eleventy](https://www.11ty.dev/docs/data-js/#example-exposing-environment-variables), which enabled me to write the following code in my Nunjucks templates:

```
{% raw %}{% if gay.environment == 'gay' %}
  <!-- Do gay things -->
{% endif %}{% endraw %}
```

I think that is beautiful.

Thanks a lot to the [Eleventy](https://www.11ty.dev/) project for their flexible data handling, and [Netlify](https://www.netlify.com/) for making setting up continuous deployment a breeze.
