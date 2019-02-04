const webpack = require("webpack")
require('@babel/polyfill')
require('@babel/register')
require('./buildStatic').default().then(() => webpack(require('./webpack.config'), (err, stats) => {
  let info = stats.toJson()
  if (err || stats.hasErrors()) {
    console.error('ERROR:', err || info.errors)
  } else {
    console.log('Done!')
  }
}))
