var gfi = require("../"),
  should = require("should"),
  gutil = require('gulp-util'),
  fs = require('fs');

require("mocha");


var makeFile = function (path) {
  return new gutil.File({
    path: path,
    cwd: 'test/',
    base: '/files',
    contents: fs.readFileSync(path)
  });
};

describe("gulp-file-insert", function() {

  it('should produce correct file output when including files', function (done) {

    var expectedFile = makeFile('test/files/expected/AE');
    var srcFile = makeFile('test/files/data/AE');

    var stream = gfi({
      "/* INS1 */": "test/files/data/B",
      tag2: "test/files/data/D"
    });

    stream.on('error', function (err) {
      should.exist(err);
      done(err);
    });

    stream.on('data', function (newFile) {
      should.exist(newFile);
      should.exist(newFile.contents);
      String(newFile.contents).should.equal(String(expectedFile.contents));
      done();
    });

    stream.write(srcFile);
    stream.end();
  });



  it('should detect missing file and emit error', function (done) {
    var expectedFile = makeFile('test/files/expected/AE');
    var srcFile = makeFile('test/files/data/AE');

    var stream = gfi({
      "/* INS1 */": "test/files/data/missing",
      tag2: "test/files/data/D"
    });

    stream.on('error', function (err) {
      should.exist(err);
      done();
    });

    stream.write(srcFile);
    stream.end();
  });


});
