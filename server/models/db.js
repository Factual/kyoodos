var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/kyoodos';

var client = new pg.Client(connectionString);

client.connect();

// update existing pg tables from clj project 
var query = client.query('DROP TABLE IF EXISTS groups; DROP TABLE IF EXISTS user_groups; CREATE TABLE IF NOT EXISTS slack_users(id VARCHAR(40) not null, first_name VARCHAR(40), last_name VARCHAR(80), email VARCHAR(100))');
query.on('end', function() { client.end(); });

