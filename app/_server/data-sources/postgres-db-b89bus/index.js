import { KnexPgAdapter } from '@kottster/server';
import knex from 'knex';

/**
 * Learn more at https://knexjs.org/guide/#configuration-options
 */
const client = knex({
  client: 'pg',
  connection: 'postgres://401a5c44a65d96b6d02ba9313c32f699771b5e1ca8d7b34138cae7e3b137fbad:sk_uuwNqrmzc-31727LqgyGn@db.prisma.io:5432/?sslmode=require',
  searchPath: ['public'],
});

export default new KnexPgAdapter(client);