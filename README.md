## Information

<table>
<tr> 
<td>Package</td><td>gulp-jquery-closure</td>
</tr>
<tr>
<td>Description</td>
<td>Enclose the content with jQuery definition and more</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

## Usage

```javascript
var concat = require('gulp-concat'),
    jqc = require('gulp-jquery-closure');

gulp.task('sample', function() {
  gulp.src('./sample.js')
    .pipe(jqc())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('scripts', function() {
  gulp.src('./lib/*.js')
    .pipe(concat('all.js'))
    .pipe(jqc({$: false, window: true, document: true, undefined: true))
    .pipe(gulp.dest('./dist/'))
});
```

This will enclose the content defining some variable ($, window, document and undefined) depending on options as describe in jQuery plugin [boilerplate](https://github.com/jquery-boilerplate/jquery-boilerplate/blob/master/src/jquery.boilerplate.js).

Examples:

options: none
```
;(function ($) {
  /* content */
  })(jQuery);
```

options: {window: true, document: true, undefined: "undef"}
```
;(function ($, window, document, undef) {
  /* content */
})(jQuery, window, document);
```

### Options
All parameters are optionals.
<table>
<tr>
  <th>Parameter</th>
  <th>Type</th>
  <th>Default</th>
  <th>Description</th>
</tr>
<tr>
  <td>$</td>
  <td>bool|string</td>
  <td>true</td>
  <td>define $ for jQuery</td>
</tr>
<tr>
  <td>window</td>
  <td>bool|string</td>
  <td>false</td>
  <td>define window (current window)</td>
</tr>
<tr>
  <td>document</td>
  <td>bool|string</td>
  <td>false</td>
  <td>define document (current document)</td>
</tr>
<tr>
  <td>undefined</td>
  <td>bool|string</td>
  <td>false</td>
  <td>define undefined from real undefined value</td>
</tr>
<tr>
  <td>newLine</td>
  <td>string</td>
  <td>\n</td>
  <td>newLine separator</td>
</tr>
</table>


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
