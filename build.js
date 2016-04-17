var config = require('./package.json').metallumConfig
var Metalsmith = require('metalsmith')
var cleanUrls = require('metalsmith-clean-urls')
var collections = require('metalsmith-collections')
var drafts = require('metalsmith-drafts')
var inject = require('metalsmith-inject').default
var layouts = require('metalsmith-layouts')
var markdown = require('metalsmith-markdown')
var rootPath = require('metalsmith-rootpath')
var sass = require('metalsmith-sass')
var watch = require('metalsmith-watch')
var browserSync = require('metalsmith-browser-sync')

var metalsmith = Metalsmith(__dirname)
  .use(inject({
    paths: [
      'amplified/styles'
    ]
  }))
  .use(sass())
  .use(drafts())
  .use(collections({
    articles: '*.md'
  }))
  .use(markdown({
    smartypants: true,
    gfm: true,
    tables: true
  }))
  .use(rootPath())
  .use(layouts({
    engine: 'handlebars',
    directory: './' + config.theme + '/layouts',
    partials: './' + config.theme + '/partials'
  }))
  .use(cleanUrls())
  .use(watch({
    paths: {
      'amplified/**/*': '**/*'
    },
    livereload: true
  }))
  .use(browserSync({
    server: 'build'
  }))
  .build(function (err) {
    if (err) throw err
  })
