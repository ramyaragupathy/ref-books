/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

*/

for (let i = 1; i < 8; i++) {
  var j = i
  var str = ''

  do {
    str += '#'
    j--
  } while (j !== 0)

  console.log(str)
}
