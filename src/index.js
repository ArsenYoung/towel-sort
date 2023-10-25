module.exports = function towelSort (matrix) {
  if (matrix == null) {
    return [];
  }
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i == 0 || i % 2 == 0) {
      matrix[i].sort((a,b) => {
        return a - b;
      })
    } else {
      matrix[i].sort((a,b) => {
        return b - a;
      })
    }
    for (let j = 0; j < matrix[i].length; j++) {
      result.push(matrix[i][j]);
    }
  }
  return result;
}
