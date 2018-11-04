module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter('formatDate', date => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }

    return new Date(date).toLocaleDateString('en-US', options)
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: [
      'md',
      'njk',
      'png',
      'jpg',
      'woff',
      'woff2'
    ],
    passthroughFileCopy: true
  }
}
