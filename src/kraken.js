const ccxt = require('ccxt')

let ExchangeClass = ccxt.kraken

const exchange = new ExchangeClass({
  apiKey: 'something',
  secret: '',
  timeout: 30000,
  enableRateLimit: true,
})

module.exports = exchange
