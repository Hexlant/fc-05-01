const Eos = require('eosjs');
const DecimalPad = Eos.modules.format.DecimalPad
const eosConfig = require('./config.js');
const eos = Eos(eosConfig.getConfig());


eos.getBlock({block_num_or_id: 1000230}).then(
    result => {
        console.log(result);
    }
);

