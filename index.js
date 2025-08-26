import { createServer, run } from 'runme'

const server = await createServer()

// execute `export FOO="bar"` from markdown code cell with id "export"
await run(['export'], server)

// execute `echo "exported FOO=$FOO"` from markdown code cell with id "print"
const result = await run(['carl'], server)
console.log(result) // outputs: { exitCode: 0, stdout: 'exported FOO=bar\r\n', stderr: '' }