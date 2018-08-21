const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());


let account = 'lazylion5555';
let pos = 0;
let offset = 100;

eos.getActions(account, pos, offset).then(result => {
    console.log(JSON.stringify(result, undefined, 2));
});