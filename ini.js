const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Ini } = require('@jsonic/ini')

process.stdout.write('ini0: ')

const ini = Jsonic.make().use(Ini)

const s0 = `
a=1
[b]
c="d"
`

const v0 = ini(s0)

const sv0 = JSON.stringify(v0)
// console.log(sv0)
Assert(sv0 == '{"a":"1","b":{"c":"d"}}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

