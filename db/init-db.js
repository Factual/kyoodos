var conn = require('./conn');

var sql = `
  -- DROP ALL TABLES
  DROP SCHEMA PUBLIC CASCADE;
  CREATE SCHEMA PUBLIC;

  -- CREATE TABLES
  CREATE TABLE slack_users(
    "id"         varchar(40) NOT NULL,
    "first_name" varchar(80),
    "last_name"  varchar(80),
    "username"   varchar(80),
    "email"      varchar(100),
    "avatar"     varchar(256)
  );

  CREATE TABLE to_users(
    "user_id"   varchar(40) NOT NULL,
    "kyoodo_id" integer NOT NULL
  );

  CREATE SEQUENCE "kyoodo_id_seq";
  CREATE TABLE "kyoodos" (
    "id"           int4 NOT NULL DEFAULT nextval('kyoodo_id_seq'),
    "from_user_id" varchar(40) NOT NULL,
    "content_raw"  text NOT NULL,
    "content"      text,
    "created_at"   timestamp(6) NULL
  );

  -- INIT DATA
`;

conn.execute(sql)
    .done(function () { console.log('DONE') });
