var config = require('./package.json').metallumConfig
var Metalsmith = require('metalsmith')
var browserSync = require('metalsmith-browser-sync')
var cleanUrls = require('metalsmith-clean-urls')
var collections = require('metalsmith-collections')
var drafts = require('metalsmith-drafts')
var inject = require('metalsmith-inject').default
var layouts = require('metalsmith-layouts')
var markdown = require('metalsmith-markdown')
var registerHelpers = require('metalsmith-register-helpers')
var rootPath = require('metalsmith-rootpath')
var sass = require('metalsmith-sass')
var watch = require('metalsmith-watch')

var metalsmith = Metalsmith(__dirname)
  .use(inject({
    paths: [
      'amplified/styles',
      'amplified/scripts'
    ]
  }))
  .use(rootPath())
  .use(sass({
    sourceMap: true,
    sourceMapContents: true,
    includePaths: [
      'amplified/styles'
    ]
  }))
  .use(drafts())
  .use(markdown({
    smartypants: true,
    gfm: true,
    tables: true
  }))
  .use(collections({
    notes: 'notes/*'
  }))
  .use(registerHelpers({
    directory: './' + config.theme + '/helpers'
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: './' + config.theme + '/layouts',
    partials: './' + config.theme + '/partials'
  }))
  .use(cleanUrls())
  .use(watch({
    paths: {
      'amplified/**/*': '**/*',
      'src/**/*': '**/*'
    }
  }))
  .use(browserSync({
    server: 'build',
    files: [
      'amplified/**/*',
      'src/**/*'
    ]
  }))
  .build(function (err) {
    if (err) throw err
  })
