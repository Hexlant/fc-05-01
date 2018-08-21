const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

let accountName = 'hexlanthenry';

// abi 확인
eos.getAbi(accountName).then(result => {
    console.log(JSON.stringify(result, undefined, 2));
});