const { Jsonic } = require('@jsonic/jsonic-next')
const { Csv } = require('@jsonic/csv')

const csv = Jsonic.make().use(Csv)

console.log(csv(`
a,b
1,2
3,4
`))
