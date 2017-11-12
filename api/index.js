import express from 'express';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import bodyParser from 'body-parser';
import hash from 'string-hash';

import config from '../config';

let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
  assert.equal(null, err);
  mdb = db;
});

const router = express.Router();

router.use(bodyParser.json());

router.get('/urls', (req, res) => {
  const urls = {};
  mdb.collection('urls').find({})
     .project({
       id: 1,
       shortUrl: 1,
       longUrl: 1
     })
     .each((err, url) => {
       assert.equal(null, err);

       if (!url) { // no more urls
         res.send(urls);
         return;
       }

       urls[url.id] = (url);
     });
});

router.post('/urls', (req, res) => {
  // extract long url from post
  const longUrl = req.body.longUrl;
  // hash long url
  const id = hash(longUrl);
  // assemble short url
  const shortUrl = `http://${config.host}:${config.port}/api/${id}`;
  // insert entry into mongodb
  mdb.collection('urls').insertOne({ longUrl, shortUrl, id }).then(() => {
    res.send({
      longUrl,
      shortUrl,
      id
    });
  }).catch((err) => {
    res.send({ err });
  });
});

router.get('/:id', (req, res) => {
  // extract id from the request
  const id = req.params.id;
  // retrieve entry from mongodb
  mdb.collection('urls').findOne({ id: Number(id) }).then((entry) => {
    let redirectUrl = entry.longUrl;
    // if the user didn't include http:// to the url, then add it to ensure redirects externally
    const regex = new RegExp(/^http:\/\//);
    if (!regex.test(redirectUrl)) {
      redirectUrl = `http://${redirectUrl}`;
    }
    res.redirect(redirectUrl);
  }).catch(() => {
    // send 404 page if its not a shortUrl
    res.send('404: Page not found');
  });
});

export default router;
