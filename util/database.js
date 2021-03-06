import camelcaseKeys from 'camelcase-keys';
import postgres from 'postgres';

import setPostgresDefaultsOnHeroku from './setPostgresDefaultsHeroku';

setPostgresDefaultsOnHeroku();

require('dotenv-safe').config();

// one time connection to the dataBase watch_you_got
function connectOneTimeToDataBase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }
  return sql;
}

// Connect to PostgresSQL
const sql = connectOneTimeToDataBase();

function camelcaseRecords(records) {
  return records.map((record) => camelcaseKeys(record));
}

export async function getWatchesDataBase() {
  const watches = await sql`SELECT * FROM watches`;
  return camelcaseRecords(watches);
}

export async function getWatchesDataBaseId(id) {
  const singleWatchItem = await sql`SELECT *FROM
      watches
    WHERE
      id = ${id}`;

  return camelcaseRecords(singleWatchItem)[0];
}
