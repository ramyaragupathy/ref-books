/* Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its
elements.
Neither may use the standard reverse method.
*/

const reverseArray = (arr) => {
  let newArr = []
  let length = arr.length
  for (let i = length - 1; i >= 0; i--) {
    newArr.push(arr[i])
  }
  return newArr
}

const reverseArrayInPlace = (arr) => {
  var length = arr.length

  for (let i = 0; i < length / 2; i++) {
    var temp = arr[i]
    arr[i] = arr[length - 1 - i]
    arr[length - 1 - i] = temp
  }
  return arr
}

console.log(reverseArray(['A', 'B', 'C'])) //  ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue) // [5, 4, 3, 2, 1]
