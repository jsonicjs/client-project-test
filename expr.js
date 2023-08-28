const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Expr } = require('@jsonic/expr')

process.stdout.write('expr0: ')

const expr = Jsonic.make().use(Expr, {
  evaluate: (rule,op,terms)=>{
    let [a,b] = terms
    if('addition-infix' === op.name) {
      return a+b
    }
    else if('subtraction-infix' === op.name) {
      return a-b
    }
    else if('multiplication-infix' === op.name) {
      return a*b
    }
    else {
      return -1
    }
  }
})

const s0 = `a:1 b:2+3 c:4-5*6`

const v0 = expr(s0)

const sv0 = JSON.stringify(v0)
// console.log(sv0)
Assert(sv0 == '{"a":1,"b":5,"c":-26}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

