drop database chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL PRIMARY KEY auto_increment, 
  text varchar(200) NOT NULL, 
  username varchar(20) NOT NULL,
  roomname varchar(20) NOT NULL,
  userid int NOT NULL
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id int NOT NULL PRIMARY KEY, 
  username varchar(20) NOT NULL UNIQUE KEY 
);

-- don't need for now
-- CREATE TABLE rooms (
--   id int NOT NULL PRIMARY KEY, 
--   roomname varchar(20) NOT NULL
-- );
 

-- dont need to inner join, or join, rooms should be a col not table bc not directly manipulated on front end

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

