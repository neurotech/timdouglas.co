var fs = require('fs');

var db = require('./db.json');
var posts = db.globals;

posts.forEach(function(entry) {
  fs.mkdirSync('./build/articles/' + entry.shortname);
});