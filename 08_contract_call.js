const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());

let fromAccount = 'lazylion5555';

eos.transaction({
    actions: [{
        account: 'hexlanthenry',
        name: 'hi',
        authorization: [{
            actor: fromAccount,
            permission: 'active'
        }],
        data: {
            'user': 'hexlant'
        }
    }]
}).then(result => {
    console.log(JSON.stringify(result, undefined, 2));
});