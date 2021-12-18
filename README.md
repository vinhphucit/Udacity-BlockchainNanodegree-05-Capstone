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

# Deployment

```
truffle migrate --reset --network ropsten

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'ropsten'
> Network id:      3
> Block gas limit: 8000000 (0x7a1200)


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0xcb8e149997a76d58aa45b0e045ff5412a5a288971b9bc7b1764f736b8c59dd48
   > Blocks: 1            Seconds: 33
   > contract address:    0xDA1D013421633C3fb9e392b70b110B79c4220C04
   > block number:        11641627
   > block timestamp:     1639797056
   > account:             0x68913EdB78a8FfC8f8b86E4c77329302abe1308B
   > balance:             5.26892886241290173
   > gas used:            236258 (0x39ae2)
   > gas price:           1.602505326 gwei
   > value sent:          0 ETH
   > total cost:          0.000378604703310108 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 11641628)
   > confirmation number: 3 (block: 11641630)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.000378604703310108 ETH


2_deploy_contracts.js
=====================

   Deploying 'Verifier'
   --------------------
   > transaction hash:    0xb9b92caac302c7df594ceebcb581dff8719638d0c95439defd21bff8f6dad251
   > Blocks: 1            Seconds: 41
   > contract address:    0x8c2DBB94bdc8a6bee0f7910b6a7BeC05206Ec4eA
   > block number:        11641633
   > block timestamp:     1639797151
   > account:             0x68913EdB78a8FfC8f8b86E4c77329302abe1308B
   > balance:             5.267233571611891822
   > gas used:            1011614 (0xf6f9e)
   > gas price:           1.60329077 gwei
   > value sent:          0 ETH
   > total cost:          0.00162191138900278 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 11641634)
   > confirmation number: 2 (block: 11641635)

   Deploying 'SolnSquareVerifier'
   ------------------------------
   > transaction hash:    0x0dc286d026fe0d6e72de11af4b399dffa43fb2951ef76bd1c108245c3abcc8aa
   > Blocks: 2            Seconds: 21
   > contract address:    0x07181B3a9cf762F956D7e60Fea09d9C2C6Be4c9C
   > block number:        11641638
   > block timestamp:     1639797258
   > account:             0x68913EdB78a8FfC8f8b86E4c77329302abe1308B
   > balance:             5.261300050601935792
   > gas used:            3700839 (0x387867)
   > gas price:           1.60329077 gwei
   > value sent:          0 ETH
   > total cost:          0.00593352100995603 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 11641639)
   > confirmation number: 2 (block: 11641640)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00755543239895881 ETH


Summary
=======
> Total deployments:   3
> Final cost:          0.007934037102268918 ETH
```

##### Contract Address

```
0x07181B3a9cf762F956D7e60Fea09d9C2C6Be4c9C
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