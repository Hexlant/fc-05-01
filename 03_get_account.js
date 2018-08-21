const Eos = require('eosjs');
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());


// let account = 'lazylion5555';
// error!! 이오스 네트워크에 없는 계정
let account = 'lazylion5554';

// Parameters 
// account_name     계정 이름
eos.getAccount({account_name: account}).then(
    result => {
        console.log(result);
    }
).catch(
    error => {
        console.error(error)
    }
);