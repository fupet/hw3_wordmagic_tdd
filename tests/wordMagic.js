var assert = require('chai').assert,

	_ = require('underscore'),
	WordMagic = require('../libs/wordMagic');

suite('test Word Magic', function() {
	setup(function() {
		this.originalWord = 'arviz';
		this.wordMagic = new WordMagic(this.originalWord);
	});

	test('check original word is set', function() {
		assert.strictEqual(this.wordMagic.getOriginalWord(), this.originalWord);
	});

	test('get permutations, and check their number', function() {
		this.wordMagic._generatePermutations();

		assert.lengthOf(this.wordMagic.getPermutations(), WordMagic.factorial(this.originalWord.length));
	});

	test('find duplications', function() {
		this.wordMagic._generatePermutations();
		assert.strictEqual(_.uniq(this.wordMagic.getPermutations()).length, WordMagic.factorial(this.originalWord.length));
	});
});
