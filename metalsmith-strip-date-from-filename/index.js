module.exports = function (options) {
  return function drafts (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (file) {
      if (file.match(/[0-9]{8}-/)) {
        var data = files[file]
        delete files[file]
        files[file.replace(/[0-9]{8}-/, '')] = data
      }
    })
    done()
  }
}
