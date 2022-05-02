const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let markField = [];
  for (let row = 0, h = matrix.length - 1; row <= h; row++) {
    markField.push([]);
    for (let col = 0, w = matrix[row].length - 1; col <= w; col++) {
      markField[row].push(
        1 * (row > 0 && col > 0 && matrix[row - 1][col - 1]) +
        1 * (row > 0 && matrix[row - 1][col]) +
        1 * (row > 0 && col < w && matrix[row - 1][col + 1]) +
        1 * (col > 0 && matrix[row][col - 1]) +
        1 * (col < w && matrix[row][col + 1]) +
        1 * (row < h && col > 0 && matrix[row + 1][col - 1]) +
        1 * (row < h && matrix[row + 1][col]) +
        1 * (row < h && col < w && matrix[row + 1][col + 1])
      );
    }
  }

  return markField;
}

module.exports = {
  minesweeper
};
