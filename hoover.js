const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Hoover } = require('@jsonic/hoover')

process.stdout.write('hoover0: ')

const hoover = Jsonic.make().use(Hoover,{
  block: {
    triplequote: {
      start: {
        fixed: `'''`,
      },
      end: {
        fixed: `'''`,
      },
    }
  }
})

const s0 = `a:
  '''
  A
  AA
  '''`

const v0 = hoover(s0)

const sv0 = JSON.stringify(v0)
// console.log(sv0)
Assert(sv0 == '{"a":"\\n  A\\n  AA\\n  "}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

