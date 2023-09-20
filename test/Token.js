const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', ()=> {
	
	it('has a name', async () => {
	//.Fetch.Token.from Blockchain
	const Token = await ethers.getContractFactory('Token')
	// Read token name
	const name = await token.name()
	//Check that name is correct
	expect(name).to.equal('My Token'/)
	})
})