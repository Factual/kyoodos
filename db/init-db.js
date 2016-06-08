var conn = require('./conn');

var sql = `
  DROP SCHEMA PUBLIC CASCADE;
  CREATE SCHEMA PUBLIC;

  CREATE TABLE slack_users(
    "id"         VARCHAR(40) not null,
    "first_name" VARCHAR(40),
    "last_name"  VARCHAR(80),
    "email"      VARCHAR(100)
  );

  CREATE TABLE to_users(
    "user_id"   VARCHAR(40) not null,
    "kyoodo_id" integer not null
  );

  CREATE SEQUENCE "kyoodo_id_seq";
  CREATE TABLE "kyoodos" (
    "id"           int4 NOT NULL DEFAULT nextval('kyoodo_id_seq'),
    "from_user_id" varchar(40) NOT NULL,
    "content_raw"  text NOT NULL,
    "content"      text,
    "created_at"   timestamp(6) NULL
  );
`;

conn.execute(sql)
    .done(function () { console.log('DONE') });
