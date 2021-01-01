require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note soccer unfold inner clock olympic general'; 
let testAccounts = [
"0x1e615f91e98f93991dc68a94b81631a13ebad76e1b6913dff2d363b83d1e124b",
"0xa6d9a7fed1197acd0b88daeef99ebdee77fc8ca3faa32bfc2f7f9d920a1a1cea",
"0xd39f67b652d005e8eb9591efe92eff3e98257aa9d8d15365affa1550e14766d0",
"0x1c4e948fae9f451766646797e52d8297ac20a1a259011a5e458cd3678326b4ac",
"0x35d2ffce765de86ae9acb39c745cabe4790ec206bc00e13ab6a146889c61f186",
"0x005f2f79c4aa74b478d1469514eb3f43aa6f02f40f5ea41505e7802781d73cd9",
"0x5dea235cf3cf3b50eaa8c50cdac2d5499eb58654ccf820acc04327f3e7c6f696",
"0xdada235f90e3688196de0384cb5b62173660d72526afbb38b95ab85be888a1f4",
"0xb953aab9eacc1a9e7fe70845f66b14333c240f320f78e760e44e37da4949204e",
"0xdb46d2a5abd9cf5be3e0954fa14a845d543f9fab25d622ba984e83a3ec79fb63"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
