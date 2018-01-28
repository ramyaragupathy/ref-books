var arr = [[0,1],[2,3],[4,5],[6,7]];
var newArr = arr.reduce(function(a,b) {return a.concat(b)},[]);

console.log(arr); //reduce is a pure function, so arr is not altered
console.log(newArr);
