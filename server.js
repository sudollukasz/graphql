const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();

const schema = require('./schema.js');

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000);
console.log('Listening...');
