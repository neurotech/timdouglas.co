var low = require('lowdb');
var db = low('db.json');

db('globals').push({
  title: 'A new post',
  shortname: 'newest-post',
  description: 'A post about an even newer thing.',
  date: 'May 26th, 2015',
  abstract: 'It must be 3:23 PM somewhere, maybe space?'
});