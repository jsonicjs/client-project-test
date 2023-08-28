const Assert = require('node:assert')

const { Jsonic } = require('@jsonic/jsonic-next')
const { Path } = require('@jsonic/path')

process.stdout.write('path0: ')

const path = Jsonic.make().use(Path)
      .use((jsonic) => {
        jsonic.rule('val', rs => {
          rs
            .ac(false, (r) => {
              if ('object' !== typeof (r.node)) {
                r.node = `<${r.node}:${r.k.path.join('/')}>`
              }
              else {
                r.node.$ = `<${r.k.path}>`
              }
            })
        })
      })

const s0 = `a:b:1 a:c:x`

const v0 = path(s0)

const sv0 = JSON.stringify(v0)
Assert(sv0 == '{"a":{"b":"<1:a/b>","$":"<a>","c":"<x:a/c>"},"$":"<>"}')

console.log('OK', s0.replace(/\n+/g,' % '), '->', sv0)

