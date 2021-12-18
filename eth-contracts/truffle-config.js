var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "fade attack defense sound nothing riot rug aim cigar embody until check";
var ropstenMnemonic = "board youth lottery load waste link hamster tooth text latin bid pigeon";
const infuraKey = "bafa84dd09a74280b667c718632528a5";
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
    ropsten: {
      networkCheckTimeout: 10000,

      provider: () => new HDWalletProvider(ropstenMnemonic, `https://ropsten.infura.io/v3/${infuraKey}`),
      network_id: 3,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      networkCheckTimeout: 999999, // <- New attribute HERE
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby: {
      provider: () => new HDWalletProvider("abuse cliff kick shiver speak rookie rather armor describe machine fame exist", "https://rinkeby.infura.io/v3/2b3c6e2c9a9b4f3794cff6486f359798"),
      network_id: 4,       // Rinkeby's id
      gas: 5500000,        // Rinkeby has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      networkCheckTimeout: 999999, // <- New attribute HERE
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      
    }
  },
  compilers: {
    solc: {
      version: "0.5.2",
    }
  }
};