var chai = require('chai')
chai.should()
var sinon = require('sinon')
chai.use(require('sinon-chai'))

describe('blat', function () {
  var blat = require('../')
  
  it('prints human readable json', function () {
    blat({foo: 'bar'}).should.equal('{\n  "foo": "bar"\n}')
  })

  describe('.peek', function () {
    var c = console.log
    console.log = sinon.spy()

    try {
      var obj = {foo: 'bar'}
      blat.peek(obj).should.equal(obj)
      console.log.should.have.been.calledWithExactly('{\n  "foo": "bar"\n}')
    } finally {
      console.log = c
    }
  })
})