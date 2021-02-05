
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let res = [];
  if(arguments.length !== 0 && matrix.length !== 0){ 
    for(let i=0; i<matrix.length; i++){
      if(i%2 !== 0) res = res.concat(matrix[i].sort((a, b) => b - a));
      else res = res.concat(matrix[i].sort((a, b) => a - b))  
    }
  }
  return res;
}
