var Metalsmith = require('metalsmith')
var browserSync = require('metalsmith-browser-sync')
var collections = require('metalsmith-collections')
var dateFormatter = require('metalsmith-date-formatter')
var dateInFilename = require('metalsmith-date-in-filename')
var drafts = require('metalsmith-drafts')
var inject = require('metalsmith-inject').default
var inlineMainCss = require('./metalsmith-inline-main-css')
var layouts = require('metalsmith-layouts')
var markdown = require('metalsmith-markdown')
var readTime = require('./metalsmith-read-time')
var rootPath = require('metalsmith-rootpath')
var sass = require('metalsmith-sass')
var stripDateFromFilename = require('./metalsmith-strip-date-from-filename')
var stripIndexHtmlFromPath = require('./metalsmith-strip-index-html-from-path')
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
  .use(dateFormatter({dates: [
    {
      key: 'date',
      format: 'MMMM D YYYY'
    }
  ]}))
  .use(drafts())
  .use(collections({
    nav: {
      sortBy: 'navPriority'
    },
    notes: {
      sortBy: 'date'
    }
  }))
  .use(markdown({
    smartypants: true,
    gfm: true,
    tables: true
  }))
  .use(readTime())
  .use(stripIndexHtmlFromPath())
  .use(layouts({
    engine: 'handlebars',
    directory: './theme/layouts',
    partials: './theme/partials'
  }))
  .use(inlineMainCss())
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
