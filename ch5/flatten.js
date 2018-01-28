/*Use the reduce method in combination with the concat method to
“flatten” an array of arrays into a single array that has all the elements of the input arrays.
*/

var arr = [[0,1],[2,3],[4,5],[6,7]];
var newArr = arr.reduce(function(a,b) {return a.concat(b)},[]);

console.log(arr); //reduce is a pure function, so arr is not altered
console.log(newArr);
