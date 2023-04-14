const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let res = '';
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count += 1;
		} else {
			if (count === 0) {
				res += str[i];
			} else {
				res += (count + 1) + str[i];
				count = 0;
			}
		}
	}
	return res;
}

module.exports = {
  encodeLine
};
