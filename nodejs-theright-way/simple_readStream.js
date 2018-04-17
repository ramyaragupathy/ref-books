#!/usr/bin/env node
// chmod +x simple_readStream.js
// ./simple_readStream.js filename

// Approach 1
require('fs').createReadStream(process.argv[2]).pipe(process.stdout)

// Approach 2
const fs = require('fs')
const filename = process.argv[2]
const stream = fs.createReadStream(filename)
stream.on('data', function (chunk) {
  process.stdout.write(chunk)
})
stream.on('error', function (error) {
  process.stdout.write('ERROR: ' + error.message)
})
