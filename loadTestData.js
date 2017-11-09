var { MongoClient } = require('mongodb');
var assert = require('assert');
var mongodbUri = 'mongodb://localhost:27017/test';

MongoClient.connect(mongodbUri, function (err, db) {
  assert.equal(null, err);

  db.collection('urls').insertMany([
    {
      id: "a1s2d3",
      shortUrl: "a1s2d3",
      longUrl: "www.google.com"
    },
    {
      id: "f4g5h6",
      shortUrl: "f4g5h6",
      longUrl: "www.bbc.co.uk"
    },
    {
      id: "j7k8l9",
      shortUrl: "j7k8l9",
      longUrl: "www.facebook.com"
    }
  ]);
});
