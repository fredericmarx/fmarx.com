module.exports = function (options) {
  return function (files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function (file) {
      if (file.match(/\.html$/)) {
        var htmlContent = files[file].contents.toString('utf-8')
        var cssContent = files['main.css'].contents.toString('utf-8')
        var htmlWithCss = htmlContent.replace(/<link(.*?)main.css" rel="stylesheet"><\/link>/, '<style>' + cssContent + '</style>')
        files[file].contents = Buffer.from(htmlWithCss, 'utf-8')
      }
    })
    done()
  }
}
