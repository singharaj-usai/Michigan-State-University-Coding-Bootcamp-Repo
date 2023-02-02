DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE biographies (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL
);

