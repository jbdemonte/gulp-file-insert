var gfi = require("../"),
  should = require("should"),
  File = require("gulp-util").File,
  Buffer = require("buffer").Buffer;

require("mocha");

describe("gulp-file-insert", function() {
  describe("gfi()", function() {

    function test(desc, fileContent, options, result) {
      var stream = gfi(options);
      it(desc, function (done) {

        stream.on("data", function (file) {
          String(file.contents).should.equal(result);
          done();
        });

        stream.write(new File({
          cwd: __dirname,
          base: "/",
          path: "data.js",
          contents: new Buffer(fileContent)
        }));

        stream.end();
      });
    }

    test(
      "should replace 2 token with the content of 2 existing files",
      "A\n/* INS1 */\nC\ntag2\nE",
      {
        "/* INS1 */": "test/files/B",
        tag2: "test/files/D"
      },
      "A\nB\nC\nD\nE"
    );

  });
});
