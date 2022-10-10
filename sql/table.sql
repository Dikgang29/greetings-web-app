create table user_names(
	id serial not null primary key,
	users_greeted VARCHAR ( 50 ) UNIQUE NOT NULL,
	name_counter int,
	description text not null
);

GRANT ALL PRIVILEGES on TABLE user_names TO greet_unit;
GRANT ALL PRIVILEGES on SEQUENCE user_names_id_seq TO greet_unit;

ALTER TABLE databasechangelog OWNER TO arwin_ash;

GRANT posgress TO greet_unit;


-- create table testing_names(
-- 	id serial not null primary key,
-- 	username VARCHAR ( 50 ) UNIQUE NOT NULL,
-- 	user_counter int,
-- 	description text not null
-- );

create table user_names(
	id serial not null primary key,
	users_greeted VARCHAR ( 50 ) UNIQUE NOT NULL,
	name_counter int
);



-- create table products (
-- 	id serial not null primary key,
--     description text not null,     
-- 	price decimal(10,2),
-- 	category_id int,
-- 	foreign key (category_id) references categories(id)
-- );