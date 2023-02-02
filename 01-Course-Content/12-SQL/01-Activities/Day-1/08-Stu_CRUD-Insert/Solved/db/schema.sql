DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;

-- use books_db database --
USE books_db;

-- Creates the table "biographies" within books_db --
CREATE TABLE biographies (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL
);

