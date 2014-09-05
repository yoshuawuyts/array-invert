# array-invert
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

Invert a JavaScript array. Though you probably want to use
[array.reverse()][arr-rev] instead.

## Installation
```bash
$ npm i --save array-invert
```
## Overview
```js
var invert = require('array-invert');

invert([1, 2, 3, 4, 5]);
// => [5, 4, 3, 2, 1]
```

## API
#### invert(array)
Invert the order of an array.
```js
invert(['chicken', 'cow', 'pig']);
// => ['pig', 'cow', 'chicken']
```

## License
[MIT](https://tldrlegal.com/license/mit-license) ©
[Yoshua Wuyts](yoshuawuyts.com)

[npm-image]: https://img.shields.io/npm/v/array-invert.svg?style=flat-square
[npm-url]: https://npmjs.org/package/array-invert
[travis-image]: https://img.shields.io/travis/yoshuawuyts/array-invert.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/array-invert
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/array-invert.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/array-invert?branch=master

[arr-rev]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
