const fs = require('fs')
/* First parameter to the readFile() callback handler
 * is `err`. If readFile() is successful then err is false,
 * otherwise `err` parameter will contain an Error object.
 * Second parameter to callback is `data`, a buffer
 */
fs.readFile('target.txt', function (err, data) {
  // Error is an uncaught exception here
  // Uncaught exceptions halts the program by
  // escaping the event loop
  if (err) throw err
  else {
    console.log(data.toString())
  }
})
