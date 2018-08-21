const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

let fromAccount = 'lazylion5555';
let receiverAccount = 'lazylion5555';

eos.delegatebw({
    from: fromAccount,
    receiver: fromAccount,
    stake_net_quantity: '1.0000 EOS',
    stake_cpu_quantity: '1.0000 EOS',
    transfer: 0
}).then(
    result => {
        console.log(result);
    }
).catch(
    error => {
        console.error(error)
    }
);