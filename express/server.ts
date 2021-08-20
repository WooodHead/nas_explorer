import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from '../graphql/typeDefs/typeDefs';
import { resolvers } from '../graphql/resolvers/resolvers';
import { HTTP_PORT } from '../env';
import Knex from '../postgres/knex';
import path from 'path';

const corsOptions = {
  origin: `*`,
};

async function startServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
      db: Knex,
    }),
  });

  app.use(morgan(`:method :url :status :res[content-length] - :response-time ms`));
  app.use(cors(corsOptions));

  await server.start();
  server.applyMiddleware({ app, path: `/api/graphql` });
  app.listen({ port: HTTP_PORT }, () => console.log(`App is listening on Port ${HTTP_PORT}`));
  app.use(express.static(path.resolve(__dirname, `../../html`)));
}

try {
  startServer();
} catch (serverError) {
  console.error(serverError);
}
