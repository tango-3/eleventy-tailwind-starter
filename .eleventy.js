const htmlmin = require('html-minifier')

const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./styles/tailwind.css')

  // return {
  //   passthroughFileCopy: true,
  //   dir: {
  //       input: 'src',
  //       // includes is relative to the input directory
  //       includes: '_includes',
  //       data: '_data',
  //       output: '_site',
  //   },
  // };

  eleventyConfig.addPassthroughCopy({
    './_tmp/style.css': './style.css',
    './node_modules/alpinejs/dist/cdn.min.js': './js/alpine.js',
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
