CREATE SEQUENCE "user_id_seq";
--;;
CREATE TABLE "users" (
	"id" int8 NOT NULL DEFAULT nextval('user_id_seq'),
	"token" varchar,
	"username" varchar NOT NULL,
	"email" varchar
)
--;;
ALTER TABLE "users" ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;
--;;
CREATE SEQUENCE "group_id_seq";
--;;
CREATE TABLE "groups" (
	"id" int4 NOT NULL DEFAULT nextval('group_id_seq'),
	"name" varchar NOT NULL
)
--;;
ALTER TABLE "groups" ADD CONSTRAINT "groups_pkey" PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;
--;;
CREATE SEQUENCE "kyoodo_id_seq";
--;;
CREATE TABLE "kyoodos" (
	"id" int4 NOT NULL DEFAULT nextval('kyoodo_id_seq'),
	"from_user_id" int4 NOT NULL,
	"to_user_id" int4 NOT NULL,
	"content_raw" text NOT NULL,
	"content" text,
	"created_at" timestamp(6) NULL
)
--;;
ALTER TABLE "kyoodos" ADD CONSTRAINT "kyoodos_pkey" PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;
--;;
CREATE SEQUENCE "concern_id_seq";
--;;
CREATE TABLE "concerns" (
	"id" int4 NOT NULL DEFAULT nextval('concern_id_seq'),
	"kyoodo_id" int4 NOT NULL,
	"user_id" int4 NOT NULL
)
--;;
ALTER TABLE "concerns" ADD CONSTRAINT "concerns_pkey" PRIMARY KEY ("id") NOT DEFERRABLE INITIALLY IMMEDIATE;
--;;
CREATE TABLE "user_groups" (
	"user_id" int4 NOT NULL,
	"group_id" int4 NOT NULL
)
