-- create table user_names(
-- 	id serial not null primary key,
-- 	users_greeted VARCHAR ( 50 ) UNIQUE NOT NULL,
-- 	name_counter int,
-- 	description text not null
-- );
create table user_names(
	id serial not null primary key,
	users_greeted VARCHAR ( 50 ) UNIQUE NOT NULL,
	name_counter int
);
