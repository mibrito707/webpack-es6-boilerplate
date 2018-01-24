const test = require('tape')
const {sayHello} = require('../src/hello')
test('Testing hello world', function (t) {
    t.plan(1)
    t.equal(sayHello(), 'Hello World!')
})
