drop database chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL PRIMARY KEY, 
  message varchar(40) NOT NULL, 
  user varchar(20) NOT NULL,
  room varchar(20) NOT NULL
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id int NOT NULL PRIMARY KEY, 
  userName varchar(20) NOT NULL
);

CREATE TABLE rooms (
  id int NOT NULL PRIMARY KEY, 
  room varchar(20) NOT NULL
);
 

-- dont need to inner join, or join, rooms should be a col not table bc not directly manipulated on front end

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

