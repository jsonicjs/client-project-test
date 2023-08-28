const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { MultiSource } = require('@jsonic/multisource')
const { makeMemResolver } = require('@jsonic/multisource/resolver/mem')

process.stdout.write('multisource0: ')

const multisource = Jsonic.make().use(MultiSource, {
  resolver: makeMemResolver({
    'x.jsonic': 'x:1',
  })
})

const s0 = `a:b c:@"x.jsonic"`

const v0 = multisource(s0)

const sv0 = JSON.stringify(v0)
// console.log(sv0)

Assert(sv0 == '{"a":"b","c":{"x":1}}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

