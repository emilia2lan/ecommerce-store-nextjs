import postgres from 'postgres';
require('dotenv-safe').config();

const sql = postgres();

export async function getWatches() {
  return await sql`SELECT * FROM watches`;
}
