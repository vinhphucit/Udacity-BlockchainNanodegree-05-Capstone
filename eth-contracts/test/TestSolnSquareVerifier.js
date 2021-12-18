
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var Verifier = artifacts.require('Verifier');
var verifierProof = require('../../zokrates/code/square/proof.json');

const {
    BN,
    expectEvent,
    expectRevert,
} = require('@openzeppelin/test-helpers');
contract('Test SolnSquareVerifier', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    // Test if a new solution can be added for contract - SolnSquareVerifier
    describe('SolnSquareVerifier', function () {
        beforeEach(async function () {
            this.verifierContract = await Verifier.new();
            this.solnSquareVerifierContract = await SolnSquareVerifier.new(Verifier.address, "TOKEN_NAME", "TOKEN_SYMBOL", { from: account_one });
        })

        it('new solution can be added for contract', async function () {
            let result = await this.solnSquareVerifierContract.addSolution(verifierProof.proof.a, verifierProof.proof.b,
                verifierProof.proof.c, verifierProof.inputs, { from: account_one });
            await expectEvent(result, "AddedSolution", {
                from: account_one
            });
        })

        it('duplicate solution can not be added for contract', async function () {
            await this.solnSquareVerifierContract.addSolution(verifierProof.proof.a, verifierProof.proof.b,
                verifierProof.proof.c, verifierProof.inputs, { from: account_one });
            let promise = this.solnSquareVerifierContract.addSolution(verifierProof.proof.a, verifierProof.proof.b,
                verifierProof.proof.c, verifierProof.inputs, { from: account_one });
            await expectRevert(promise, "Solution was added");

        })

        it('an ERC721 token can be minted for contract', async function () {
            await this.solnSquareVerifierContract.addSolution(verifierProof.proof.a, verifierProof.proof.b,
                verifierProof.proof.c, verifierProof.inputs, { from: account_one });
            let result = await this.solnSquareVerifierContract.mintNewNFT(verifierProof.inputs, account_one, { from: account_one });

            await expectEvent(result, "MintedSolution");

        })

    });
})

