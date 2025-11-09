const CleanCSS = require("clean-css");
const htmlmin = require("html-minifier");

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("formatDate", (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Date(date).toLocaleDateString("en-US", options);
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addCollection("journal", function (collection) {
    const glob = "src/{journal,til}/**/*.md";
    return collection.getFilteredByGlob(glob);
  });

  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["md", "njk", "png", "jpg", "svg", "woff", "woff2"],
    passthroughFileCopy: true,
  };
};
