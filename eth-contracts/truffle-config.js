var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "fade attack defense sound nothing riot rug aim cigar embody until check";

module.exports = {
  networks: {
    // development: {
    //   provider: function() {
    //     return new HDWalletProvider(mnemonic, "http://127.0.0.1:9545/", 0, 50);
    //   },
    //   network_id: '*',
    //   gas: 999999999
    // }
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 999999999
    },
  },
  compilers: {
    solc: {
      version: "0.5.2", 
    }
  }
};