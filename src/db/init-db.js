var conn = require('./conn');

var sql = `
  -- DROP ALL TABLES
  DROP SCHEMA PUBLIC CASCADE;
  CREATE SCHEMA PUBLIC;

  -- CREATE TABLES
  CREATE TABLE IF NOT EXISTS slack_users(
    "id"         varchar(40) NOT NULL,
    "first_name" varchar(80),
    "last_name"  varchar(80),
    "username"   varchar(80),
    "email"      varchar(100),
    "avatar"     varchar(256)
  );

  CREATE SEQUENCE "kyoodo_id_seq";

  CREATE TABLE IF NOT EXISTS "kyoodos" (
    "id"           int4 NOT NULL DEFAULT nextval('kyoodo_id_seq'),
    "from_user_id" varchar(40) NOT NULL,
    "content_raw"  text NOT NULL,
    "content"      text,
    "created_at"   timestamp(6) NULL
  );

  CREATE TABLE IF NOT EXISTS "kyoodos_receivers" (
    "to_user_id" varchar(40) NOT NULL,
    "kyoodo_id"  int4 NOT NULL
  )

  -- INIT DATA
`;

conn.execute(sql)
    .done(function () { console.log('DONE') });
