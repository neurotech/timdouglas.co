// Original script by Ricardo Pedroni:
// http://stackoverflow.com/a/28438357/733948

var fs = require('fs');
var path = require('path');
var exec = require('child_process').exec;

var jadePath = process.argv[2];
var base = process.argv[3];

// To do: Create a function that produces a JSON file listing all articles/portfolio items called posts.json

var _build = function(dir) {
  var dirName, f, files, fullPath, i, len, results, stat;
  files = fs.readdirSync(dir);
  results = [];
  for (i = 0, len = files.length; i < len; i++) {
    f = files[i];
    if (f === path.basename(__filename)) {
      continue;
    }
    fullPath = path.join(dir, f);
    stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      try {
        fs.mkdirSync(path.join(base, fullPath));
      } catch (_error) {}
      results.push(_build(fullPath));
    } else if (path.extname(f) === '.jade') {
      dirName = path.join(base, path.dirname(fullPath));
      dirName = dirName.replace(jadePath, '');
      dirName = dirName.replace('//', '/');
      console.log("Compiling jade file '" + fullPath + "' to directory " + dirName);
      results.push(exec('jade -o ' + dirName + ' ' + fullPath + ' --obj' + ' db.json'));
    } else {
      results.push(void 0);
    }
  }
  return results;
};

_build(jadePath);