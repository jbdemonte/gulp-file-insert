var through = require("through"),
  gutil = require("gulp-util"),
  Buffer = require("buffer").Buffer,
  PluginError = gutil.PluginError,
  fs = require("fs"),
  File = gutil.File,
  ns = "gulp-file-insert";

module.exports = function (options) {
  if (typeof options !== "object") {
    options = {};
  }

  var file = null;

  function write (f){
    if (!f.isNull()) {
      if (f.isStream()) {
        this.emit("error", new PluginError(ns,  "Streaming not supported"));
      } else {
        file = f;
      }
    }
  }

  function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  function end () {
    var self = this,
      content = file.contents.toString();

    function finalize() {
      var newFile = new File({
        cwd: file.cwd,
        base: file.base,
        path: file.path,
        contents: new Buffer(content)
      });
      self.emit("data", newFile);
      self.emit("end");
    }

    function next() {
      for (token in options) {
        fs.readFile(options[token], function (err, data) {
          if (err) {
            throw new Error(ns + ": file (" + options[token] + ") is missing for tag (" + token + ")");
          } else {
            content = content.replace(new RegExp(escapeRegExp(token), "g"), data);
          }
          delete options[token];
          next();
        });
        return;
      }
      finalize();
    }

    next();
  }

  return through(write, end);
};
