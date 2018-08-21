const Eos = require('eosjs');

const chainConfig = {
    mainnet: {
        chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
        httpEndpoint: 'http://node1.eoscannon.io',
    },
    testnet: {
        chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
        httpEndpoint: 'http://jungle.cryptolions.io:18888'
    }
};


config = {
    chainId: chainConfig.testnet.chainId,
    keyProvider: [''],
    httpEndpoint: chainConfig.testnet.httpEndpoint,
    broadcast: true,
    verbose: false,
    sign: true
};

const eos = Eos(config);

// testnet getinfo 
// /v1/chain/get_info 와 결과는 같다.
eos.getInfo({}).then(
    result => {
        console.log(result);
    }
);


// console.log(eos.getinfo);