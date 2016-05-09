module.exports = function (options) {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (file) {
      var wordCount = files[file].contents.toString('utf-8').split(' ').length
      files[file].wordCount = wordCount
      files[file].readTime = Math.ceil(wordCount / 275)
    })
    done()
  }
}
