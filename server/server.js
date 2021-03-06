import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import { schema } from './schema';
import cors from 'cors';

const PORT = 4000;

const server = express();

server.use('*', cors({ origin: 'http://localhost:3001' }));

server.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

server.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));
