module.exports = function (options) {
  return function drafts (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (file) {
      if (file.match(/\index.html$/)) {
        files[file]._path = file.replace(/\index.html$/, '')
      }
    })
    done()
  }
}
