conn = require('./conn');

sql = 'DROP TABLE IF EXISTS groups; DROP TABLE IF EXISTS user_groups; CREATE TABLE IF NOT EXISTS slack_users(id VARCHAR(40) not null, first_name VARCHAR(40), last_name VARCHAR(80), email VARCHAR(100))';
conn.execute(sql)
  .done(function () { console.log('DONE') });
