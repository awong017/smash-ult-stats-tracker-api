const postgres = require('pg');
const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')

postgres.defaults.ssl = true;

const db = knex({
  client: 'pg',
  connection: `${DATABASE_URL}?ssl=true`,
})

app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})