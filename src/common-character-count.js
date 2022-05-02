const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let freq1 = new Array(26).fill(0);
  let freq2 = new Array(26).fill(0);

  let count = 0;

  for (let i = 0; i < s1.length; i++) {
    freq1[s1[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (let i = 0; i < s2.length; i++) {
    freq2[s2[i].charCodeAt() - 'a'.charCodeAt()]++;
  }

  for (let i = 0; i < 26; i++) {
    count += (Math.min(freq1[i], freq2[i]));
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
