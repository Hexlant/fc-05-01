const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

let fromAccount = 'lazylion5555';
let receiverAccount = 'lazylion5555';

eos.undelegatebw({
    from: fromAccount,
    receiver: fromAccount,
    unstake_net_quantity: '1.0000 EOS',
    unstake_cpu_quantity: '1.0000 EOS'
}).then( 
    result => {
        console.log(result);
    }
);
