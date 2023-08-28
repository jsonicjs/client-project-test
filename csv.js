const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Csv } = require('@jsonic/csv')

process.stdout.write('csv0: ')

const csv = Jsonic.make().use(Csv)

const s0 = `
a,b
1,2
3,4
`

const v0 = csv(s0)

const sv0 = JSON.stringify(v0)
Assert(sv0 == '[{"a":"1","b":"2"},{"a":"3","b":"4"}]')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

