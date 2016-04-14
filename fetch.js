var fs = require('fs')
var jsdom = require('jsdom')
var path = require('path')
var toMarkdown = require('to-markdown')

var isUrl = string => string.match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)

var articleUrls = process.argv.filter(isUrl)

var fetchArticle = url => {
  jsdom.env(url, function (err, window) {
    var result = toMarkdown(window.document.body.innerHTML)
    var title = window.document.getElementsByTagName('title')[0].innerHTML
    var slug = window.location.pathname.match(/[^\/]+$/)[0]
    window.close()

    fs.writeFile(path.join(__dirname, '/tmp/' + slug + '.md'), result, err => {
      if (err) {
        console.log(err)
      }
    })
  })
}

articleUrls.map(url => fetchArticle(url))
