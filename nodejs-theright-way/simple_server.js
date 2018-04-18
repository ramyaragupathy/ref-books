const net = require('net')

/* createServer() takes a callback function
 * and returns a `Server` object
 * Node invokes callback whenever another endpoint connects
 * Connection parameter in callback is a `Socket` object,
 * that can be used to send/receive data
 */
const server = net.createServer((connection) => {
  console.log('new client')
})
server.listen(5432)
