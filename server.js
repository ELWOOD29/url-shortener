import config from './config';
import apiRouter from './api';
import path from 'path';
import express from 'express';

const server = express();

server.use('/api', apiRouter);

server.use('/', express.static('dist'));
server.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
