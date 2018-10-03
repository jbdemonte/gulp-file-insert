# gulp-file-insert [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

## Usage

First, install `gulp-file-insert` as a development dependency:

```shell
npm install --save-dev gulp-file-insert
```


```javascript
var gfi = require("gulp-file-insert");

gulp.src('./sample.js')
  .pipe(gfi({
    "/* file 1 */": "tmp/file1",
    "/* file 2 */": "tmp/file2",
    version: "tmp/version_number"
  }))
  .pipe(gulp.dest('./dist/'));
```
This will replace into sample.js the tag "/\* file 1 \*/" by the content of the file "tmp/file1", "/\* file 2 \*/" by the content of "tmp/file2" and "version" by the content of "tmp/version_number" each time they appear.

## LICENSE

(MIT License)

Copyright (c) 2014 Jean-Baptiste DEMONTE <jbdemonte@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[npm-url]: https://npmjs.org/package/gulp-file-insert
[npm-image]: https://badge.fury.io/js/gulp-file-insert.png

[travis-url]: http://travis-ci.org/jbdemonte/gulp-file-insert
[travis-image]: https://secure.travis-ci.org/jbdemonte/gulp-file-insert.png?branch=master

[depstat-url]: https://david-dm.org/jbdemonte/gulp-file-insert
[depstat-image]: https://david-dm.org/jbdemonte/gulp-file-insert.png