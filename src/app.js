import express from 'express';

const app = express();

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('hola mundo');
});
