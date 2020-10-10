const CleanCSS = require("clean-css");

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

  eleventyConfig.addCollection("til", function (collection) {
    const glob = "src/til/**/*.md";
    return collection.getFilteredByGlob(glob);
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
