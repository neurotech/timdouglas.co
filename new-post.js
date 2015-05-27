var prompt = require('prompt');
var low = require('lowdb');
var fs = require('fs');
var moment = require('moment');

var db = low('db.json');
var id = db('globals').size();

prompt.start();
prompt.get(['title', 'shortname', 'description', 'abstract'], function (err, result) {
  if (!err) {
    var template =
"include ../../../includes/_head.jade\n\n\
body\n\
  #holder\n\
    #content.container\n\
      include ../../../includes/_header.jade\n\
      .row\n\
        section#welcome.eight.columns\n\
          h3 " + result.title + "\n\
          h4 " + result.description + "\n\
          p\n\
            em " + result.abstract + "\n\n\
          //- Body goes here\n\n\
    include ../../../includes/_footer.jade";

    db('globals').push({
      id: id++,
      title: result.title,
      shortname: result.shortname,
      date: new Date(),
      description: result.description,
      abstract: result.abstract
    });

    fs.mkdirSync('./src/jade/main/articles/' + result.shortname);

    fs.createWriteStream('./src/jade/main/articles/' + result.shortname + '/index.jade').write(template);

  } else {
    console.error('Error! ' + err);
  }
});
