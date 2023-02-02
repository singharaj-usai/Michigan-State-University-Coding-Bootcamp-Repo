DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id INT NOT NULL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  value_card_member BOOLEAN
);
