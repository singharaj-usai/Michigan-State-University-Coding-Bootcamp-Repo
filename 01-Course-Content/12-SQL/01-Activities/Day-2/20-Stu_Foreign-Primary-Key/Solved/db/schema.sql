DROP DATABASE IF EXISTS grocery_db;
CREATE DATABASE grocery_db;

USE grocery_db;

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order (
  id INT,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);
