DROP
DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE
DATABASE books_db;
USE
books_db;

-- Add biography table --
CREATE TABLE biography
(
    id             INT PRIMARY KEY,
    name           VARCHAR(255) NOT NULL,
    author         VARCHAR(255) NOT NULL,
    published_date DATE         NOT NULL,
    summary        TEXT         NOT NULL,
    isbn           VARCHAR(255) NOT NULL
);