# Ping Poet Product Site Template

This is a template for a website for a product.

## Usage

The content for the site is all in MDX (markdown but you can use react in it too). All content is in the content directory.

Edit the [content/index.mdx](content/index.mdx) and [content/\_data/site.yaml](content/_data/site.yaml)

### Markdown

To edit with markdown just name a file anywhere under the content directory with an \*.mdx extension and write markdown.

### MDX: Markdown+React JSX

Since MDX supports React's JSX syntax, you can write HTML-like JSX too when you need the flexibility to break out of markdown. For example:

```html
---
title: Contact Ping Poet Products
layout: default
---

<div
  id="wrapper"
  data-tf-widget="DC4O5fdO"
  data-tf-inline-on-mobile
  data-tf-medium="snippet"
></div>
<script src="//embed.typeform.com/next/embed.js"></script>
```

### Common Layouts

Select a layout with some front-matter in front of your mdx file like so:

```yaml
---
layout: default
---
Hello World!
```

### SEO/Social Media Metadata

Include front-matter in the file to include SEO metadata including title, description, image. For example:

```yaml
---
layout: default
title: My Page Title
description: My page description
image: /images/my-seo-banner.png
---
Hello World!
```

### Icons

The MIT-licensed iconic library is included as a sprite. You can reference them like so in HTML:

```html
<svg viewBox="0 0 8 7" class="rounded-4 shadow">
  <use
    href="/images/iconic/sprite/open-iconic.min.svg#spreadsheet"
    style="fill:red"
  ></use>
</svg>
```

Another great way to get svg icons is at
https://blade-ui-kit.com/blade-icons?search=stock+market#search

### Running Site Locally

To run a site locally while developing:

```console
npm install
npm start # watches for changed files
```

### Deploying Site

To deploy you site as a set of static files:

```console
npm install
npm build
```

Then deploy the \_site folder.
