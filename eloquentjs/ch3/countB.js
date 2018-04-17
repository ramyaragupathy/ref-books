/* Write a function countBs that takes a string as its only argument and returns a number that indicates
how many uppercase “B” characters are in the string. */

const countBs = (str) => {
  let length = str.length
  let count = 0
  for (let i = 0; i < length; i++) {
    if (str[i] === 'B') {
      count++
    }
  }
  return count
}

console.log(countBs('BBC')) // 2
