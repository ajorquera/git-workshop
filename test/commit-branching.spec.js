const assert = require('assert');
const fs = require('fs');
const { execSync } = require( 'child_process' );

 describe('commit-branching', () => {
	it('should have commited a README.md file', () => {
		let files = execSync('git ls-tree --name-only master', {encoding: 'utf8'});
		files = files.split('\n');
 		assert(files.indexOf('README.md') !== -1);
	});
 	it('should have commited a .gitignore file', () => {
		let files = execSync('git ls-tree --name-only master', {encoding: 'utf8'});
		files = files.split('\n');
 		assert(files.indexOf('.gitignore') !== -1);
	});
 	it('should have at least 1 branch created, apart from master', () => {
		let branches = execSync('git branch', {encoding: 'utf8'});
		branches = branches.split('\n').filter((e) => e);
 		assert(branches.length > 1);		
	});
 	it('should had merged feat/more-tests into master', () => {
		let hasCommit = false;
 		try {
			hasCommit = !!execSync('git rev-parse --quiet --verify e0cc90e3197d5f118bc05dd5f7440a046d27f78f', {encoding: 'utf8'});
		} finally {
			assert(hasCommit);		
		}
	});
 	it('should have more commits', () => {
		let numberCommits = execSync('git rev-list --count master', {encoding: 'utf8'});
		numberCommits = parseInt(numberCommits);
 		assert(numberCommits > 11);
	});
});