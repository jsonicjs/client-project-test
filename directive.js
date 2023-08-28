const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Directive } = require('@jsonic/directive')

process.stdout.write('directive0: ')

const directive = Jsonic.make().use(Directive, {
  name: 'upper',
  open: '@',
  action: (rule) => rule.node = ('' + rule.child.node).toUpperCase()
})

const s0 = `a:b c:@d`

const v0 = directive(s0)

const sv0 = JSON.stringify(v0)
// console.log(sv0)

Assert(sv0 == '{"a":"b","c":"D"}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

