// Node classes: EventEmitters, ChildProcess, Streams, Buffers
'use strict'
const fs = require('fs')
const spawn = require('child_process').spawn
const filename = process.argv[2]
const childProcess = process.argv.slice(3)
if (!filename) {
  throw Error('A file to watch must be specified')
}

const fileExists = fs.existsSync(filename)

if (fileExists) {
  fs.watch(filename, (event) => {
    /* first parameter is the name of the program to execute
     * second parameter is a bunch of command line arguments
     * Object returned by spawn is a child_process
     */
    console.log('EventType: ', event)
    if (event === 'rename') {
      throw Error('Target file renamed/deleted')
    }
    let ls = spawn(childProcess[0], [...childProcess.slice(1), filename])

    let output = ''
    // ls.stdout.pipe(process.stdout)
    // console.log('File ' + filename + ' just changed')
    /* on() method adds an event listener for the
     * specified event type
     * events listeners are callbacks
     * Events send in extra information that can be used
     * as parameters to the callbacks
     * Data events pass along a buffer object
     * Buffer: node's way of representing binary data
     * It points to a blob of memory allocated by Node's native core,
     * outside of Javascript engine
     * Buffers can't be resized & they require encoding & decoding,
     * to conver to and from JS strings
     */
    ls.stdout.on('data', function (chunk) {
      console.log('Chunk: ', chunk.toString())
      // Buffer's converted to JS string using Node's default encoding UTF-8
      // Buffer contents are copied to Node's heap for the operation
      output += chunk.toString()
    })

    /* Similar to event listeners for Streams, child processes
     * also extends EventEmitters class, so we can add listeners
     * After a child process has been exited and all its stream flushed,
     * child process emits a `close` event
     */
    ls.on('close', function () {
      // Following splits output based on white space characters
      let parts = output.split(/\s+/)

      /*
       * Parts:  [ '-rw-r--r--',
       * '1',
       * 'ramyaragupathy',
       * 'staff',
       * '83B',
       * 'Apr',
       * '17',
       * '14:24',
       * 'target.txt',
       * '' ]
       */
      console.log('Parts: ', parts)
      console.dir([parts[0], parts[4], parts[8]])
    })
  })
  console.log('Now watching ' + filename + ' for changes...')
} else {
  throw Error('No such filename "' + filename + '"')
}
