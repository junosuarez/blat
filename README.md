# blat
JSON.stringify

## usage

    var blat = require('blat')
    blat({foo: 'bar'})
    // => '{\n  "foo": "bar"\n}'

Yes, I hate the JSON.stringify api this much.

# api

# blat(Object) => String
Serializes and pretty-prints a JavaScript object to a string

## blat.peek(Object) => Object
`console.log`s a `blat()`d view of the object and returns the original object.

## installation

    $ npm install blat


## running the tests

From package root:

    $ npm install
    $ npm test


## contributors

- jden <jason@denizac.org>


## license

MIT. (c) 2013 jden <jason@denizac.org>. See LICENSE.md
