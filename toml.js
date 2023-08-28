const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Toml } = require('@jsonic/toml')

process.stdout.write('toml0: ')

const toml = Jsonic.make().use(Toml)

const s0 = `
a=1
[b]
c="d"
`

const v0 = toml(s0)

const sv0 = JSON.stringify(v0)
// console.log(sv0)
Assert(sv0 == '{"a":1,"b":{"c":"d"}}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

