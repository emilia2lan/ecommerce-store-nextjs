import camelcaseKeys from 'camelcase-keys';
import postgres from 'postgres';
require('dotenv-safe').config();

// one time connection to the dataBase watch_you_got
function connectOneTimeToDataBase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    sql = postgres({ ssl: true });
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
  console.log('id', id);
  return camelcaseRecords(singleWatchItem)[0];
}
