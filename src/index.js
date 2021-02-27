
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix !== undefined ? matrix.reduce((a, b, index) => a.concat((index % 2) === 0 ? b : b.reverse()), []) : [];
}
