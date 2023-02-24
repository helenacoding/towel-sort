
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix.length == 0) {
    return [];
  }
  for (i = 0; i < matrix.length && matrix[i].length >= 1; i++) {
    if (i % 2 !== 0) {
        matrix[i].reverse();
    };
    for (k = 0; k < matrix[i].length; k++) {
      if (k == undefined) {
          k = ' ';
      }
    };
}
return matrix.join().split(',').map(Number)
};
