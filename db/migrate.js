conn = require('./conn');

sql = "\
  DROP TABLE IF EXISTS groups;\
  DROP TABLE IF EXISTS user_groups;\
  ALTER TABLE kyoodos DROP COLUMN IF EXISTS to_user_id;\
  CREATE TABLE IF NOT EXISTS slack_users(id VARCHAR(40) not null, first_name VARCHAR(40), last_name VARCHAR(80), email VARCHAR(100));\
  CREATE TABLE IF NOT EXISTS to_users(user_id VARCHAR(40) not null, kyoodo_id integer not null);\
";

conn.execute(sql)
  .done(function () { console.log('DONE') });
