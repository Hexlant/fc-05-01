const Eos = require('eosjs');
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

// transfer 
let account = 'lazylion5555';
let code = 'eosio.token';
let symbol = 'EOS';

eos.getCurrencyBalance({
    account: account,       // 계정명
    code: 'eosio.token',    // 컨트랙트 이름 ex) eosio.token, lioninjungle
    symbol: 'EOS'           // 심볼 ex) EOS, 
}).then(result => {
    console.log('EOS : ' + result);
});

account = 'lazylion5555';
code = 'eoscointoken';
symbol = 'CLUB';
eos.getCurrencyBalance({
    account: account,       // 계정명
    code: code,             // 컨트랙트 이름 ex) eosio.token, lioninjungle
    symbol: symbol          // 심볼 ex) EOS, 
}).then(result => {
    console.log('CLUB : ' + result);
});