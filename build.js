var Metalsmith = require('metalsmith')
var browserSync = require('metalsmith-browser-sync')
var cleanUrls = require('metalsmith-clean-urls')
var collections = require('metalsmith-collections')
var dateInFilename = require('metalsmith-date-in-filename')
var drafts = require('metalsmith-drafts')
var inject = require('metalsmith-inject').default
var layouts = require('metalsmith-layouts')
var markdown = require('metalsmith-markdown')
var registerHelpers = require('metalsmith-register-helpers')
var rootPath = require('metalsmith-rootpath')
var sass = require('metalsmith-sass')
var stripDateFromFilename = require('./metalsmith-strip-date-from-filename')
var watch = require('metalsmith-watch')

var metalsmith = Metalsmith(__dirname)
  .use(inject({
    paths: [
      'theme/styles',
      'theme/scripts'
    ]
  }))
  .use(rootPath())
  .use(sass({
    sourceMap: true,
    sourceMapContents: true,
    includePaths: [
      'theme/styles'
    ]
  }))
  .use(dateInFilename({override: true}))
  .use(stripDateFromFilename())
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
    directory: './theme/helpers'
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: './theme/layouts',
    partials: './theme/partials'
  }))
  .use(cleanUrls())
  .use(watch({
    paths: {
      'theme/**/*': '**/*',
      'src/**/*': '**/*'
    }
  }))
  .use(browserSync({
    server: 'build',
    files: [
      'theme/**/*',
      'src/**/*'
    ]
  }))
  .build(function (err) {
    if (err) throw err
  })
