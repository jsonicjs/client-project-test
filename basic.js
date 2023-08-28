const Assert = require('node:assert')

const Jsonic = require('@jsonic/jsonic-next')

process.stdout.write('basic0: ')

const s0 = 'a:1'
const v0 = Jsonic(s0)
const sv0 = JSON.stringify(v0)
Assert(sv0 == '{"a":1}')

console.log('OK', s0, '->', sv0)
