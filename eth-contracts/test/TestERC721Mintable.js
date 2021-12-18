var ERC721MintableComplete = artifacts.require('ERC721Mintable');
const {
    BN,
    expectEvent,
    expectRevert,
} = require('@openzeppelin/test-helpers');
contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    const NUMBER_OF_TOKEN = 30;
    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new("TOKEN_NAME", "TOKEN_SYMBOL", { from: account_one });

            // TODO: mint multiple tokens
            for (let i = 0; i < NUMBER_OF_TOKEN; i++) {
                await this.contract.mint(accounts[Math.floor(i / 10)], i);
            }

        })

        it('should return total supply', async function () {
            const supply = await this.contract.totalSupply();
            assert.equal(supply, 30, "Incorrect total suppy");
        })

        it('should get token balance', async function () {
            const tokenBalance = await this.contract.balanceOf(account_one);
            assert.equal(tokenBalance.toNumber(), 10, "Token balance is incorrect");
        })

        // // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            for (let i = 0; i < NUMBER_OF_TOKEN; i++) {
                const tokenURI = await this.contract.tokenURI(i);
                assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/" + i, "Token balance is incorrect");
            }

        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(accounts[0], accounts[1], 0, { from: accounts[0] });
            assert.equal(await this.contract.ownerOf(0), accounts[1]);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721MintableComplete.new("TOKEN_NAME", "TOKEN_SYMBOL", { from: account_one });
        })

        it('should fail when minting when address is not contract owner', async function () {
            await expectRevert(this.contract.mint(account_two, NUMBER_OF_TOKEN+1, { from:account_two }),"Caller is not contract owner.");
          
        })

        it('should return contract owner', async function () {
            assert.equal(await this.contract.getOwner(), account_one);
        })

    });
})