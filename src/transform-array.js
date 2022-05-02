const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new NotImplementedError("'arr' parameter must be an instance of the Array!");
  }

  const res = [];

  for(let i = 0; i < arr.length; i++) {
    if (!['--double-next', '--double-prev', '--discard-next', '--discard-prev'].includes(arr[i])) {
      if (arr[i - 1] === '--double-next') {
        res.push(arr[i]);
      }

      if (arr[i + 1] === '--double-prev' && arr[i - 1] !== '--discard-next') {
        res.push(arr[i]);
      }

      if (arr[i + 1] !== '--discard-prev' && arr[i - 1] !== '--discard-next') {
        res.push(arr[i]);
      }
    }
  }

  return res;
}

module.exports = {
  transform
};
