/* A UNIX socket is an inter-process communication
 * mechanism that allows bidirectional data exchange
 * between processes running on the same machine.
 * IP sockets (especially TCP/IP sockets) are a mechanism
 * allowing communication between processes over the network.
 * In some cases, you can use TCP/IP sockets to talk with
 * processes running on the same computer (by using the loopback interface).
 * UNIX domain sockets know that they’re executing on the same system,
 * so they can avoid some checks and operations (like routing);
 * which makes them faster and lighter than IP sockets.
 * So if you plan to communicate with processes on the same host,
 * this is a better option than IP sockets.

 */

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
server.listen('/tmp/watcher.sock', function () {
  console.log('Listening for subscribers...')
})

// client: nc -U /tmp/watcher.sock
