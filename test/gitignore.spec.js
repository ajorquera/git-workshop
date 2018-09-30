const mocha = require('mocha');
const assert = require('assert');
const fs = require('fs');
const execSync = require('child_process').execSync;

describe('.gitignore assignment', () => {
	it('should have a README.md file', () => {
		assert(fs.existsSync('./README.md'));
	});

	it('should have node_modules in the .gitignore file', () => {
		contents = fs.readFileSync('./.gitignore', 'utf8');
		assert(contents.includes('node_modules'))
	});

	it('should octocat be in the correct folder', () => {
		assert(fs.existsSync('./imgs/octocat.jpg'));		
	})

	it('should have at least 4 extra commits', () => {
		let numberCommits = execSync('git rev-list --count assignments/gitignore', {encoding: 'utf8'});
		numberCommits = parseInt(numberCommits);
		
 		assert(numberCommits > 5);
	});
});