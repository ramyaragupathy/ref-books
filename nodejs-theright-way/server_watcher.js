'use strict'
const fs = require('fs')
const net = require('net')
const filename = process.argv[2]

// more than one subscriber can connect and
// receive updates simultaenously
const server = net.createServer((connection) => {
  // reports to the server console
  console.log('Subscriber connected.')
  // reports to the client
  connection.write("Now watching '" + filename + "' for changes...\n")
  // watcher setup
  let watcher = fs.watch(filename, function () {
    connection.write("File '" + filename + "' changed: " + Date.now() + '\n')
  })
  // when client disconnects post message on server console
  // stop watching the file
  connection.on('close', function () {
    console.log('Subscriber disconnected.')
    watcher.close()
  })
})
if (!filename) {
  throw Error('No target filename was specified.')
}
server.listen(5432, function () {
  console.log('Listening for subscribers...')
})
