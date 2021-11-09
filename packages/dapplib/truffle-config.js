require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food novel cruise ranch coast coral light army ghost'; 
let testAccounts = [
"0xc8f2ed050f7b332b253c1b2337c4f84f52e7ddce63a37b6b01696090c52b662d",
"0x5bcc884edffea6080840ab4b76903a4262e8b30d0179b574530206951b0107a8",
"0xe6d13368be04a2713c00166cd73dccbb60ab4fd35307e8ac3c08146ca2fd035a",
"0x964780cae25939852fa85a5f273505a84503fde799e5446ff4c9dd5835779405",
"0xaada68744a4bc4fdb321fbd505cdceb4e2c9bf2cf4bb2885ebedebe32ad7a6ac",
"0x2bfbadd352b74f411f796b03131e4824ecccfdce2ad8f70b42aabbaa0c0ad69d",
"0x023ced601e7074de7d40f9c73eabae80263e65f8364a13ab768d822e4dbab311",
"0xc0b4c962312c15187f8fab3714cb2774918c865a483fba3991e8cd42d80c57fc",
"0xbf79a8ff452bfef414afa15d6492c59d7a434f90ea076e3105cbb7ee6e12fdaa",
"0xe0b5ff0c3c3b16aa6ad12dbfd6fdcb61e52eaef112f9f920381725ed9068ec2e"
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
            version: '^0.8.0'
        }
    }
};

