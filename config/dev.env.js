var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  DEBUG_MODE: true,
  NODE_ENV: '"development"',
  API_URL: 'http://localhost:3000/'
})
