const fs = require('fs')

// Overwrites existing content
fs.writeFile('target.txt', 'my message', function (err) {
  if (err) throw err
  else console.log('File saved!')
})
