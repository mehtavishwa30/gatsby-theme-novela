<a href="https://gatsby-theme-novela.netlify.com" target="_blank">
<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-hero.jpg" alt="gatsby-novela-theme hero image" />
</a>

<br/>

# Novela — A Gatsby theme by Narative

With minimal styling and maximum features — including multiple homepage layouts, built-in social sharing and dark mode — Novela makes it easy to start publishing beautiful articles and stories with Gatsby.

Novela is built by the team at [Narative](https://www.narative.co), and built for everyone that loves the web.

<div>
<a href="https://gatsby-theme-novela.netlify.com" target="_blank">
<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-cta-demo.jpg" alt="gatsby-novela-theme live demo" width="295px" />
</a>
</div>

<div>
<a href="https://www.narative.co/design/open/novela" target="_blank">
<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-cta-figma.jpg" alt="gatsby-novela-theme figma link" width="295px" />
</a>
</div>

### Table of Contents

- [Getting Started](#getting-started)

  - With Gatsby Starter Novela

    - [Installation](#step-1-starter-installation)
    - [Develop & Build](#step-2-develop--build)

  - From scatch

    - [Installation](#step-1-installation)
    - [Folder structure](#step-2-folder-structure)
    - [Using Novela Theme](#step-3-using-narativegatsby-theme-novela)
    - [Adding an Author](#step-4-adding-an-author)
    - [Adding a Post](#step-5-adding-a-post)
    - [Configuring Site Metadata](#step-6-configuring-sitemetadata)

* [Customization](#customization)

  - [Changing styles](#changing-styles)
  - [Component shadowing](#component-shadowing)
  - [Adding your logo](#adding-your-logo)

- [Data Models](#data-models)

  - [Authors](#authors)
  - [Posts](#posts)
  - [Site Metadata](#site-metadata)

<br />
<br />

## Why use Novela?

There are many Gatsby themes to choose from. Here’s why we think you won’t regret choosing Novela:

### Multiple Homepage Layouts

Choose between a variable width grid or a simpler list style to display each story.

### Toggleable Light and Dark Mode

Out of the box, Novela includes both light and dark designs that can be toggled by the user anywhere across the site.

<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-light-dark.gif" alt="gatsby-novela-theme light dark theme demonstration" />

### Simple Customization with [Theme UI](https://theme-ui.com/)

Consistent, easy-to-read code let you quickly customize every color and setting.

### Highlight-to-Share

Users can select text within an article to copy or share to platforms like Twitter and LinkedIn.

<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-share.jpg" alt="gatsby-novela-theme light dark theme demonstration" />

### Read Time and Progress

Read time is automatically generated for each article based on length, with an animated bar tracking the reader’s progress through each piece.

### Accessibility in Mind

Navigable by cursor or keyboard, readable via screens and screen readers, Novela ensures everyone on the web can read what you write.

<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-accessibility.gif" alt="gatsby-novela-theme accessibility demonstration" />

# Getting Started with Gatsby Starter Novela

This guide will take you through setting up Novela with Gatsby Starter Novela.

### Step 1: Starter installation

##### With `gatsby-cli`:

```sh
gatsby new novela-site https://github.com/narative/gatsby-starter-novela
```

##### With `git clone`:

```sh
git clone git@github.com:narative/gatsby-starter-novela.git novela-site

cd novela-site

yarn
```

### Step 2: Develop & Build

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn develop

# Build your Gatsby site
yarn build
```

To learn more about adding Authors, Posts, and Site Metadata see:

- [Adding an Author](#step-4-adding-an-author)
- [Adding a Post](#step-5-adding-a-post)
- [Configuring Site Metadata](#step-6-configuring-sitemetadata)

# Getting Started from scratch

This guide will take you through adding Novela to a new project. You do not require any Gatsby starters or similar, but you can add Novela to an existing Gatsby project.

You can also view the completed [example repository](https://github.com/narative/gatsby-theme-novela-example).

### Step 1: Installation

```sh
# Create an empty directory and go into it
mkdir novela-site && cd novela-site

# Add all required depedencies
yarn add react react-dom gatsby @narative/gatsby-theme-novela
```

### Step 2: Folder structure

Once you've installed React, Gatsby, and Novela you'll want to add your first Author and Post.

The recommended project structure for your content and site looks like this:
```
  novela-site
  └── content
    ├── authors
    │  ├── avatars
    │  │    └── avatar.jpg
    │  └── authors.yml
    ├── posts
    │  └── 2020-01-01-my-first-novela-post
    │       ├── images
    │       │   └── novela-hero.jpg
    │       └── index.mdx
    ├── node_modules
    ├── gatsby-config.js
    └── package.json
```

### Step 3: Using `@narative/gatsby-theme-novela`

You must add `@narative/gatsby-theme-novela` as a plugin in `gatsby-config.js`.
`@narative/gatsby-theme-novela` is configurable through plugin options but we will use the defaults for now.

```js
// gatsby-config.js

module.exports = {
  plugins: ["@narative/gatsby-theme-novela"],
};
```

---

Once you've setup `@narative/gatsby-theme-novela` plugin in `gatsby-config.js` you can start creating your first Posts. In order to create a Post you also need at least one Author.

### Step 4: Adding an Author

In [step 2](#step-2-folder-structure) we created the folder structure of our project. We can now add an Author by populating `/content/authors/authors.yml`:

```
  novela-site
  └── content
    └── authors
        ├── avatars
        │    └── brotzky-avatar.jpg
        └── authors.yml
```

In `authors.yml` add an Author. There **must** be at least one `featured` Author.

`/content/authors/authors.yml`:

```yml
- name: Dennis Brotzky
  bio: |
    Written by Dennis Brotzky who lives and works in Vancouver building useful things.
    You should follow him on Twitter.
  avatar: ./avatars/brotzky-avatar.jpg
  featured: true
```

### Step 5: Adding a Post

Once you have at least one Author defined in `authors.yml` you can add your first Post.

Start by creating a new folder in `content/posts`. You can name it anything you like but we recommend including the date at the front to organize your posts. Once you've created your folder you can add an `index.mdx` file and an `images` folder.

`/content/posts/2020-01-01/index.mdx`

```yml
---
title: Why Narative loves Gatsby
author: Dennis Brotzky
date: 2019-04-27
hero: ./images/narative-gatsby-hero.jpg
excerpt: This is a love story about Narative and Gatsby
---
# And then under the heading YML you can insert any MDX you like
# like headings, links, code, images, etc
# This will show up in the body of your post
# ...
```

### Step 6: Configuring siteMetadata

In order to configure the theme to properly genreate the pages and meta tags you must add specific data to `siteMetadata`.

The fields that are unique to Novela are `hero.heading`, `hero.maxWidth`, and `social`.

Add your Site Metadata to the `gatsby-config.js` file.

```js
// gatsby-config.js

module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://gatsby-theme-novela.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Perspectives on technology, design and business from the team at Narative.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
    ],
  },
  plugins: ["@narative/gatsby-theme-novela"],
};
```

### You can now run your site

Once all steps have been completed you can run your site. In the root of your project run `gatsby develop`.

If you ran into problems you can reference the [example repository](https://github.com/narative/gatsby-theme-novela-example) or create an issue.

<br />

# Customization

Once you've created the Logo component it should automatically appear in your site.

The technique we have used is called Component Shadowing and is a core feature of Gatsby Themes.

### Changing styles

Novela allows you to change the default theme styling by updating the [theme-ui](https://theme-ui.com/) values. If you're familiar with Styled Components or Emotion it's the same as adapting the theme you pass to `ThemeProvider`.

First, you must create a theme file and then you can override `novelaTheme` values.
[See all Novela theme values](https://github.com/narative/gatsby-theme-novela/tree/master/src/gatsby-plugin-theme-ui)

```js
// src/gatsby-plugin-theme-ui/index.js

import novelaTheme from "@narative/gatsby-theme-novela/src/gatsby-plugin-theme-ui";

export default {
  ...novelaTheme,
  initialColorMode: `dark`,
  colors: {
    ...novelaTheme.colors,
    primary: "#000",
    secondary: "#73737D",
    accent: "#6166DC",
    grey: "#73737D",
    background: "#fff",
  },
};
```

### Component Shadowing

> This feature allows users to override a component in order to customize its rendering.

> Component Shadowing let’s you replace the theme’s original file, gatsby-theme-novela/src/components/Logo.js, with your own to implement any changes you need.

Any [component](https://github.com/narative/gatsby-theme-novela/tree/master/src/components) or [section](https://github.com/narative/gatsby-theme-novela/tree/master/src/sections) is able to be replaced with your own custom component.

This opens up a full customization of Novela to your designed needs. You can copy any component directly from Novela and alter it how you like, or you can create your own component to replace Novela's entirely.

A basic example of component shadowing is explained below by [adding your logo](#adding-your-logo).

### Adding your logo

Your logo must be in SVG (vector) format in order to add it to the theme. This is required because we will be making a React component containing your SVG Logo.

Start by creating the component file at:

```
  novela-site
  └── src
    └── @narative
      └── gatsby-theme-novela
        └── components
          └── Logo
            └── index.js
```

It is important you create the exact folder structure so Gatsby knows to shadow this component. Once the file is created you can create your Logo component.

```jsx
import React from "react";

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 */
export default function Logo() {
  return (
    <svg viewBox="0 0 106 28" height="30px">
      <path d="M62.9 12h2.8v10...." />
      <path fill="#fff" d="M25 14h-..." />
      <path d="M14 0C6.3..." fill="#639" />
    </svg>
  );
}
```

<br />

# Data Models

## Novela Theme

It is recommended to use the Default options, but if your project requires something else you can configure them to your need.

| Option         |     Default     |                                        Description                                        |
| -------------- | :-------------: | :---------------------------------------------------------------------------------------: |
| contentAuthors |  content/posts  |                     Define where you want to pull your Post data from                     |
| contentPosts   | content/authors |                    Define where you want to pull your Author data from                    |
| basePath       |        /        | Where should the site be served from? `/blog` will change all paths to start with `/blog` |

[View Theme option example](https://github.com/narative/gatsby-theme-novela-example/blob/master/gatsby-config.js#L36)

```js
plugins: [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      basePath: "/",
    },
  },
];
```

## Author

[View Author example](https://github.com/narative/gatsby-theme-novela-example/blob/master/content/authors/authors.yml)

| Key      | Required |  Type   |                                 Desciption                                  |
| -------- | :------: | :-----: | :-------------------------------------------------------------------------: |
| name     | required | String  | The Author's full name which is used should be used as a reference in Posts |
| bio      | required | String  |            The Author's bio which is displayed on the home page             |
| avatar   | required |  Image  |                             The Author's avatar                             |
| featured | optional | Boolean |              If `true` the Author will appear on the homepage               |

```yml
- name: Dennis Brotzky
  bio: |
    Written by You. This is where your author bio lives. Share your work, your
    joys and of course, your Twitter handle.
  avatar: ./avatars/dennis-brotzky.jpg
  featured: true

- name: Thiago Costa
  bio: |f
    Written by You. This is where your author bio lives. Share your work, your
    joys and of course, your Twitter handle.
  avatar: ./avatars/thiago-costa.png
```

## Post

| Key     | Required |    Type    |          Description          |
| ------- | :------: | :--------: | :---------------------------: |
| title   | required |   String   |      Also used for slug       |
| author  | required | String Ref | _Must match a defined Author_ |
| date    | required |    Date    |       YYYY-MM-DD format       |
| hero    | required |   Image    |                               |
| excerpt | required |   String   |      140 character limit      |

[View Post example](https://github.com/narative/gatsby-theme-novela-example/blob/master/content/posts/2019-04-31-understanding-the-gatsby-lifecycle/index.mdx)

```yml
# novela-site/content/posts/2020-01-01/index.mdx
---
title: Why Narative loves Gatsby
author: Dennis Brotzky
date: 2019-04-27
hero: ./images/narative-gatsby-hero.jpg
excerpt: This is a love story about Narative and Gatsby
---
# And then under the heading YML you can insert any MDX you like
# like headings, links, code, images, etc
# This will show up in the body of your post
# ...
```

## Site Metadata

| Key           | Required |    Type    |                                                               Description                                                               |
| ------------- | :------: | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------: |
| title         | required |   String   |                                                      Used for the <title></title>                                                       |
| name          | required | String Ref |                                     Used in multiple locations including meta tags and site footer                                      |
| siteUrl       | required |    Date    |                                                            Used in meta tags                                                            |
| description   | required |   Image    |                                                            Used in meta tags                                                            |
| hero.heading  | required |   String   |                                                            Used in the Hero                                                             |
| hero.maxWidth | optional |   number   |                                                    Used in the Hero. Defaults to 652                                                    |
| social        | required |   Array    | [{ name, url}]. Supported names include github, twitter, linkedin, facebook, instagram, and dribbble. Used in site footer and meta tags |

[View Site Metadata example](https://github.com/narative/gatsby-theme-novela-example/blob/master/gatsby-config.js)

Within `gatsby-config.js` you can configure `siteMetadata` to show the values you wish.
It is `required` to add `siteMetada`

```js
// gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `Novela by Narative`,
    name: `Narative`,
    siteUrl: `https://gatsby-theme-novela.netlify.com`,
    description: `This is my description that will be used in the meta tags and important for search results`,

    // hero
    // A required key and will be displayed on the main page of Noveal
    hero: {
      heading: `Perspectives on technology, design and business from the team at Narative.`,
      maxWidth: 652,
    },

    // social
    // Add in the social links that will be displayed in the footer
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`,
      },
      {
        name: `github`,
        url: `https://github.com/narative`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/narative.co/`,
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`,
      },
    ],
  },
};
```

<br />

# The Future

This project is early in development and we are interested in creating an even more extensible experience, and increased out-of-box functionality, including:

- Data sources such as Prismic, Sanity, Contentful, Netlify CMS, and others
- Built in search with Algolia or similar
- Tags, categories, and more
- More theme variations
- More customization options

<div>
<a href="https://gatsby-theme-novela.netlify.com" target="_blank">
<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-cta-demo.jpg" alt="gatsby-novela-theme live demo" width="295px" />
</a>
</div>

<div>
<a href="https://www.narative.co/design/open/novela" target="_blank">
<img src="https://raw.githubusercontent.com/narative/gatsby-theme-novela-example/master/assets/gatsby-theme-novela-cta-figma.jpg" alt="gatsby-novela-theme figma link" width="295px" />
</a>
</div>
