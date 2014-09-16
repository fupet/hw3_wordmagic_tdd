/**
 * WordMagic
 *
 * @constructor
 */
var WordMagic = function(originalWord) {
	this._originalWord = originalWord;
	this._permutations = [];
};

/**
 * Returns the permutations array
 *
 * @returns {boolean}
 */
WordMagic.prototype._generatePermutations = function() {
	this._generatePermutation(this._originalWord);

	//console.log(this._permutations);
};

/**
 * Returns the permutations array
 *
 * @returns {boolean}
 */
WordMagic.prototype._generatePermutation = function(str, prefix) {

	var i, singleChar, balanceStr, word;

	//The first time round, prefix will be empty
	prefix = prefix || '';

	//Loop over the str to separate each single character
	//from the rest of it's characters
	for(i = 0; i < str.length; i++) {
		singleChar = str[i];
		balanceStr = str.slice(0, i) + str.slice(i+1);

		//join the prefix with each of the combinations
		word = prefix + singleChar + balanceStr;

		//Inject this word only if it does not exist
		if(this._permutations.indexOf(word) < 0) {
			this._permutations.push(word);
		}

		//Recursively call this function in case there are balance characters
		if(balanceStr.length > 1) {
			this._generatePermutation(balanceStr, prefix + singleChar);
		}

	}
};

/**
 * Returns the private variable
 *
 * @returns {string}
 */
WordMagic.prototype.getOriginalWord = function() {
	return this._originalWord;
};

/**
 * Returns the permutations array
 *
 * @returns {boolean}
 */
WordMagic.prototype.getPermutations = function() {
	return this._permutations;
};

WordMagic.factorial = function(value) {
	var factVal = 1;
	for (var i = 2; i <= value; i++) {
		factVal *= i;
	}
	return factVal;
};

module.exports = WordMagic;
