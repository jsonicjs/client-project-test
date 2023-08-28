const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Aontu } = require('aontu')

process.stdout.write('aontu0: ')

const s0 = `
a: string
a: 'b'
`

const v0 = Aontu(s0).gen()

const sv0 = JSON.stringify(v0)
Assert(sv0 == '{"a":"b"}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

