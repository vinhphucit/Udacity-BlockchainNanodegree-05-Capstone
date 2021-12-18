

 const BigNumber = require('bignumber.js');
 const { exit } = require('process');
 const HDWalletProvider = require("truffle-hdwallet-provider");
 const PROOF_FILECONTENT = require('../zokrates/code/square/proof144.json');
 const web3 = require("web3");
 
 const SolnSquareVerifier = require("./build/contracts/SolnSquareVerifier.json");
 const NFT_ABI = SolnSquareVerifier.abi;
 
 /**
  * Environment Variables - initialization
  */
 
 const ENV_OWNER_ADDRESS = '0x77b08f490B79B654E21FF3d97FAeAdB32B439a13';
 
 const ENV_INFURA_API_KEY = '2b3c6e2c9a9b4f3794cff6486f359798';
 const ENV_NFT_CONTRACT_ADDRESS = '0x7c7b0A36D991E0DCe1d945452314875d3c5a9A5b';
 
 var mnemonic = "abuse cliff kick shiver speak rookie rather armor describe machine fame exist";
 
 /**
  * Code Logic - starts here
  */
 
 // utils to convert the 0x-(HEX) format data to its decimal value
 function getProofData(proofJsonFileContent) {
     return {
         a: [
             new BigNumber(proofJsonFileContent.proof.a[0], 16).toFixed(),
             new BigNumber(proofJsonFileContent.proof.a[1], 16).toFixed(),
         ],
         b: [
             [
                 new BigNumber(proofJsonFileContent.proof.b[0][0], 16).toFixed(),
                 new BigNumber(proofJsonFileContent.proof.b[0][1], 16).toFixed(),
             ],
             [
                 new BigNumber(proofJsonFileContent.proof.b[1][0], 16).toFixed(),
                 new BigNumber(proofJsonFileContent.proof.b[1][1], 16).toFixed(),
             ],
         ],
         c: [
             new BigNumber(proofJsonFileContent.proof.c[0], 16).toFixed(),
             new BigNumber(proofJsonFileContent.proof.c[1], 16).toFixed(),
         ],
         inputs: [
             new BigNumber(proofJsonFileContent.inputs[0], 16).toFixed(),
             new BigNumber(proofJsonFileContent.inputs[1], 16).toFixed(),
         ],
     };
 }
 
 async function main() {
     const provider = new HDWalletProvider(
        mnemonic,
         "https://rinkeby.infura.io/v3/" + ENV_INFURA_API_KEY,
         0,
         10
     );
     const web3Instance = new web3(provider);
     const contract = new web3Instance.eth.Contract(
         NFT_ABI,
         ENV_NFT_CONTRACT_ADDRESS
     );
 
     const proofData = getProofData(PROOF_FILECONTENT);
 
     try {
         let result = await contract.methods
             .addSolution(proofData.a, proofData.b, proofData.c, proofData.inputs)
             .send({ from: ENV_OWNER_ADDRESS });
         console.log(`addSolution(...) is successful. Owner='${ENV_OWNER_ADDRESS}', Transaction='${result.transactionHash}'. Proof: ${JSON.stringify(proofData)}`);
     } catch (error) {
         console.error(`addSolution(...) is failed. Owner='${ENV_OWNER_ADDRESS}'. ${error}`);
     }
 
     try {
         let result = await contract.methods
             .mintNewNFT(proofData.inputs, ENV_OWNER_ADDRESS)
             .send({ from: ENV_OWNER_ADDRESS });
         console.log(`mintNewNFT(...) is successful. Owner='${ENV_OWNER_ADDRESS}', Transaction='${result.transactionHash}'. Proof: ${JSON.stringify(proofData)}`);
     } catch (error) {
         console.error(`mintNewNFT(...) is failed. Owner='${ENV_OWNER_ADDRESS}'. ${error}`);
     }
 
     exit(0);
 }
 
 main();