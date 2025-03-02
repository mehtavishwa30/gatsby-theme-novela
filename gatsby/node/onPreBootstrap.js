"use strict";

const fs = require("fs-extra");

module.exports = async ({ reporter }, themeOptions) => {
  const authorsPath = themeOptions.contentAuthors || "content/authors";
  const postsPath = themeOptions.contentPosts || "content/posts";

  if (!fs.existsSync(authorsPath)) {
    reporter.warn(`
      Missing directory for Authors.
      We are creating the "${authorsPath}" directory for you.
      Pleasure ensure you add your authors within "${authorsPath}"
    `);

    fs.mkdirSync(authorsPath, { recursive: true });
  }

  if (!fs.existsSync(postsPath)) {
    reporter.warn(`
      Missing directory for Posts.
      We are creating the "${postsPath}" directory for you.
      Pleasure ensure you add your posts within "${postsPath}"
    `);

    fs.mkdirSync(postsPath, { recursive: true });
  }
};
