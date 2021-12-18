# Udacity Blockchain Capstone

The capstone will build upon the knowledge you have gained in the course in order to build a decentralized housing product. 

In this project you will be minting your own tokens to represent your title to the properties. Before you mint a token, you need to verify you own the property. You will use zk-SNARKs to create a verification system which can prove you have title to the property without revealing that specific information on the property.

## OpenSea

OpenSea is a decentralized marketplace that is used for selling for crypto assets such as CryptoKitties and other digital assets that are powered off Ethereum. On OpenSea, you can buy or sell any of these items through a smart contract, meaning that no central authority ever holds custody of your items. You can even check out the source code for this smart contract here.

![OpenSea logo](https://video.udacity-data.com/topher/2019/March/5c915168_opensea-logo-full-colored-blue/opensea-logo-full-colored-blue.png)

You will be using OpenSea in this project to list your property tokens for sale. In order to list a property, you'll need to go to the item on your account page. On the item detail page, click "Sell". This will walk you through the steps for selling an item. Note that the first time you auction an item, you will need to complete several MetaMask transactions in order to give the exchange contracts access to your items. After you complete these initial steps, creating an auction will only require signing a MetaMask message. This means that you can auction items without paying gas.

Resources
https://docs.opensea.io/docs

## ZoKrates

Succinct Zero-Knowledge proofs (zkSnarks) are proving to be one of the most promising frameworks for enhancing privacy and scalability in the blockchain space.

Projects like Zcash are using zkSnarks to make payments anonymous (rather than pseudonymous). Other projects such as Coda are experimenting with trustless light clients by using recursive zkSnarks to dramatically reduce the number of state verifications blockchain clients have to perform when coming online. Ethereum founder, [Vitalik Buterin wrote how zkSnarks can be used to scale transaction speed on Ethereum](https://ethresear.ch/t/on-chain-scaling-to-potentially-500-tx-sec-through-mass-tx-validation/3477)

In this lesson you will learn how to implement zkSnarks using ZoKrates, a toolbox for zkSNARKs on Ethereum. Traditionally, snarks are written using NP complete arithmetic circuits which can be compared to writing assembly code in traditional machine programming. ZoKrates provides a higher level programming language (something like C in the same metaphor) which compiles down to the underlying constraint system and thus allows programmers to write snarks much closer to how they are used to programming.

![ZoKrates](https://video.udacity-data.com/topher/2019/March/5c916148_687474703a2f2f7777772e726564616b74696f6e2e74752d6265726c696e2e64652f66696c6561646d696e2f66673330382f69636f6e732f70726f6a656b74652f6c6f676f732f5a6f4b72617465735f6c6f676f2e737667/687474703a2f2f7777772e726564616b74696f6e2e74752d6265726c696e2e64652f66696c6561646d696e2f66673330382f69636f6e732f70726f6a656b74652f6c6f676f732f5a6f4b72617465735f6c6f676f2e737667.svg)

### Getting Started with Zokrates
- #### Step 1: Install Docker

- #### Step 2: Run ZoKrates
`docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates /bin/bash`

- #### Step 3: A Quick Overview of the ZoKrates Process

![](https://video.udacity-data.com/topher/2019/March/5c9178bd_zokrates-process/zokrates-process.png)

    In the following zkSNARKs example(s) we shall use the ZoKrates framework.

    This is a 5 step process:

    - Compile Program
    - Trusted Setup
    - Compute-Witness
    - Generate-Proof
    - Export-Verifier

##### Input file(s)
    program_name.code
##### Output file(s)
    out.code
    out
    proving.key
    verification.key
    variables.inf
    witness
    proof.json
    verifier.sol

![](https://video.udacity-data.com/topher/2019/March/5c9178fe_zokrates-architecture/zokrates-architecture.png)

#### Step 4: Compile the program written in ZoKrates DSL
`/path/to/zokrates compile -i <program_name>.code`

#### Step 5: Generate the Trusted Setup
Now take the 'flattened' code, which is a circuit and go through a 'trusted setup' Repeat this process, every-time the program.code changes Two keys are generated - 'proving.key' and 'verification.key'

`/path/to/zokrates setup`

#### Step 6: Compute Witness
Having gone through the 'trusted setup' let's compute our 'witness' who knows the answer and it generates a witness file with computation steps

`/path/to/zokrates compute-witness -a <a> <b> ... <n>`

#### Step 7: Generate Proof
Next step is to 'generate our proof' based on the above 'witness' A proof.json file is generated in this step

`/path/to/zokrates generate-proof`

#### Step 8: Export Verifier
Last but never the least, let's generate our 'verifier' smart contract

`path/to/zokrates export-verifier`

#### Resources
[Official ZoKrates](https://github.com/Zokrates/ZoKrates)

## Project Steps

1. Clone the project repository
2. Explore the code base.
3. Fill out ERC721 Mintable Contract in ERC721Mintable.sol
4. Write test cases `TestERC721Mintable.js`
5. Compile and pass test cases in `TestERC721Mintable.js`
6. Implement Zokrates
- Using Docker to install and instantiate a Zokrates zkSnarks development environment
- Completes the Zokrates proof in square.code by adding the variable names in square.code
- Compile program
- Trusted setup
- Compute witness
- Generate Proof
- Export Verifier.sol
- Note: This project uses solidity version 0.5.2 so you will be required to update the code in Verifier.sol accordingly based on the compiler errors you receive
7. Write a test script to verify the solidity contract generated by Zokrates executed successfully - `TestSquareVerifier.js`
8. Write test contract for ZK and ERC721 integration - SolnSquareVerifier.sol
9. Compile and pass with TestSolnSquareVerifier.js
10. Deploy latest contracts generated by Zokrates (a.k.a verifier.sol)
11. Deploy SolnSquareVerifier contract to Rinkeby network
12. Mint 10 tokens
13. Generate OpenSea marketplace
14. Test and Verify OpenSea with your SolnSquareVerifier tokens
- List 5 of your tokens on the marketplace
- Purchase those 5 tokens using a different address
15. Complete required documentation and submit!

### Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)



## Notes
- Run zokrates on Mac M1
```
docker run --platform linux/amd64 -v ${PROJECT_PATH}:/home/zokrates/code -it zokrates/zokrates /bin/bash
```
### 1. compile
```
zokrates compile -i square.code
```

### 2. Trusted Setup
```
zokrates setup
```

### 3. Compute-Witness
```
zokrates compute-witness -a 3 9
```

### 4. Generate-Proof
```
zokrates generate-proof
```

### 5. Export-Verifier
```
zokrates export-verifier
```

After finishing above steps we will have

```
abi.json  proof.json   square.code       verifier.sol
out       proving.key  verification.key  witness

```
# Testing

```
truffle test
```

# Deployment

```
truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29941438 (0x1c8debe)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------

Error:  *** Deployment Failed ***

"Migrations" -- Unknown address - unable to sign transaction for this address: "0x6715755e1262f4120d86ff9258dcbbe61062399f".

    at /Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/deployer/src/deployment.js:365:1
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
    at Migration._deploy (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:70:1)
    at Migration._load (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:56:1)
    at Migration.run (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/migrate/Migration.js:217:1)
    at Object.runMigrations (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/migrate/index.js:150:1)
    at Object.runFrom (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/migrate/index.js:110:1)
    at Object.run (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/migrate/index.js:87:1)
    at runMigrations (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:258:1)
    at Object.run (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/core/lib/commands/migrate.js:223:1)
    at Command.run (/Users/phuc.tran/.nvm/versions/node/v14.15.0/lib/node_modules/truffle/build/webpack:/packages/core/lib/command.js:183:1)
Truffle v5.4.21 (core: 5.4.21)
Node v14.15.0
Phucs-MacBook-M1:eth-contracts phuc.tran$ truffle migrate --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29970649 (0x1c950d9)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xa7f2bde166906ae24b6748fb5c6cc027f90f750edb765e0af7594f39a7f62f07
   > Blocks: 7            Seconds: 110
   > contract address:    0xfF8F8a352dA66Db62CB743067C739638A41e9e5F
   > block number:        9834901
   > block timestamp:     1639818241
   > account:             0x77b08f490B79B654E21FF3d97FAeAdB32B439a13
   > balance:             1.499763741997873678
   > gas used:            236258 (0x39ae2)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.000236258002126322 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9834906)
   > confirmation number: 2 (block: 9834907)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000236258002126322 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0x9238429c6139edeb8afc842dafb01802b20c2f1bfe58a2172021058d83012e24
   > Blocks: 3            Seconds: 67
   > contract address:    0x3DEC3E6225Fe5a75AACcA448A1f85B1a307a0095
   > block number:        9834920
   > block timestamp:     1639818526
   > account:             0x77b08f490B79B654E21FF3d97FAeAdB32B439a13
   > balance:             1.49870635998835724
   > gas used:            1011614 (0xf6f9e)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.001011614009104526 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9834924)
   > confirmation number: 2 (block: 9834925)

   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0xcf455e5599a4652bac6d780625affee1595901713b9204a2ba91d421d9585c59
   > Blocks: 5            Seconds: 64
   > contract address:    0x7c7b0A36D991E0DCe1d945452314875d3c5a9A5b
   > block number:        9834930
   > block timestamp:     1639818676
   > account:             0x77b08f490B79B654E21FF3d97FAeAdB32B439a13
   > balance:             1.495005532955049797
   > gas used:            3700827 (0x38785b)
   > gas price:           1.000000009 gwei
   > value sent:          0 ETH
   > total cost:          0.003700827033307443 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 9834933)
   > confirmation number: 2 (block: 9834934)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.004712441042411969 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.004948699044538291 ETH

```

##### Contract Address

```
0x7c7b0A36D991E0DCe1d945452314875d3c5a9A5b
```

#### OpenSea

```
https://testnets.opensea.io/assets/uda-solnsquaretoken
```

#### Transactions

```
https://testnets.opensea.io/assets/0x7c7b0a36d991e0dce1d945452314875d3c5a9a5b/1/
https://testnets.opensea.io/assets/0x7c7b0a36d991e0dce1d945452314875d3c5a9a5b/2/
https://testnets.opensea.io/assets/0x7c7b0a36d991e0dce1d945452314875d3c5a9a5b/3/
https://testnets.opensea.io/assets/0x7c7b0a36d991e0dce1d945452314875d3c5a9a5b/4/
https://testnets.opensea.io/assets/0x7c7b0a36d991e0dce1d945452314875d3c5a9a5b/5/
```

##### Contract ABI


```
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "setOwner",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "mode",
          "type": "bool"
        }
      ],
      "name": "setPaused",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_myid",
          "type": "bytes32"
        },
        {
          "name": "_result",
          "type": "string"
        },
        {
          "name": "_proof",
          "type": "bytes"
        }
      ],
      "name": "__callback",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "isCompleted",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isPaused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "baseTokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "verifierAddress",
          "type": "address"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "symbol",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        }
      ],
      "name": "AddedSolution",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "from",
          "type": "address"
        }
      ],
      "name": "MintedSolution",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "newToken",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "totalToken",
          "type": "uint256"
        }
      ],
      "name": "PushNewToken",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerShipTransfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "name": "inputs",
          "type": "uint256[2]"
        }
      ],
      "name": "addSolution",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "inputs",
          "type": "uint256[2]"
        },
        {
          "name": "to",
          "type": "address"
        }
      ],
      "name": "mintNewNFT",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
```