#!/usr/bin/env node
const fs = require('fs')

// Creates file if it doesn't exist
// If file exists, overwrites existing content
fs.writeFile('target.txt', 'my message', function (err) {
  if (err) throw err
  else console.log('File saved!')
})
