function blat (foo, visitor) {
  return JSON.stringify(foo, visitor, 2)
}

blat.peek = function (foo, visitor) {
  console.log(blat(foo, visitor))
  return foo
}

module.exports = blat