const htmlmin = require('html-minifier')

require('dotenv').config();
const PORT = process.env.PORT || 443;
const CERT_KEY_PATH = process.env.CERT_KEY || 'localhost+2-key.pem';
const CERT_PATH = process.env.CERT || 'localhost+2.pem';
const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
  // Use a local key/certificate to opt-in to local HTTP/2 with https
    port: process.env.PORT,
    https: {
      key: CERT_KEY_PATH,
      cert: CERT_PATH
    }
  });

  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({
    './_tmp/style.css': './style.css',
  })

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified
    }

    return content
  })

};