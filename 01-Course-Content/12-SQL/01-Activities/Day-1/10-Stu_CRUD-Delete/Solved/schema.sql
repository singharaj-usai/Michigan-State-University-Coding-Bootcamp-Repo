DROP DATABASE IF EXISTS books_db;
-- Creates the "places_db" database --
CREATE DATABASE books_db;

-- Use books_db database --
USE books_db;

CREATE TABLE fiction (
  -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL
);
