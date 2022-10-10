create database greeted_names;
create role greeted_admin login password 'Dikgang';
grant all privileges on database greeted_names to greeted_admin;


-- new database 
create database greet;
create role greete_admin login password 'greetings123';
grant all privileges on database greet to greete_admin;


-- database for my tests 
create database greet_tests;
create role greet_unit login password 'testing';
grant all privileges on database greet_tests to greet_unit;

