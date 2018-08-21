const Eos = require('eosjs');
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());
const DecimalPad = Eos.modules.format.DecimalPad;

// transfer 
let fromAccount = 'lazylion5555';
let toAccount = 'lazylion1231';
let contractAddress = 'eoscointoken';
let actionMethod = 'transfer';
let amount = 1;
let memo = 'memo';
let symbol = 'CLUB';
let amountPayload = DecimalPad(amount, 4) + ' ' + symbol;

eos.transaction({
    actions: [{
        account: contractAddress,
        name: actionMethod,
        authorization: [{
            actor: fromAccount,
            permission: 'active'
        }],
        data: {
            from: fromAccount,
            to: toAccount,
            quantity: amountPayload,
            memo: memo
        }
    }]
}).then(result => {
    console.log(result);
});