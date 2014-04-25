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

  var key,
    file = null,
    keys = [];

  for (key in options) {
    keys.push(key);
  }

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
      var key = keys.shift();
      if (key) {
        fs.readFile(options[key], function (err, data) {
          if (err) {
            self.emit('error', new gutil.PluginError(ns, "file (" + options[key] + ") is missing for tag (" + key + ")"));
          } else {
            content = content.replace(new RegExp(escapeRegExp(key), "g"), data);
          }
          next();
        });
      } else {
        finalize();
      }
    }

    next();
  }

  return through(write, end);
};
