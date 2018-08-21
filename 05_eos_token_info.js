const Eos = require('eosjs');
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

// transfer 
let account = 'lazylion5555';
let code = 'eoscointoken';
let symbol = 'CLUB';

eos.getCurrencyStats({
    code: code,
    symbol: symbol
}).then(result => {
    console.log(result);
});