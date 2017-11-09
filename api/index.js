import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  console.log(`Connected to mongo`);

  mdb = db;
});

const router = express.Router();

router.get('/urls', (req, res) => {
  let urls = {};
  mdb.collection('urls').find({})
     .project({
       id: 1,
       shortUrl: 1,
       longUrl: 1
     })
     .each((err, url) => {
       assert.equal(null, err);

       if (!url) { // no more contests
         res.send(urls);
         return;
       }

       urls[url.id]=(url);
     });
});

router.post('/urls', (req, res) => {
  let longUrl = req.body.longUrl;
  console.log(`long url: ${longUrl} has been posted`)
});

export default router;
