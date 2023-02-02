DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;

USE books_db;

CREATE TABLE book_prices (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  price INT NOT NULL
);

CREATE TABLE favorite_books (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  book_name VARCHAR(30) NOT NULL,
  in_stock BOOLEAN,
  book_price INT,
  FOREIGN KEY (book_price)
  REFERENCES book_prices(id)
  ON DELETE SET NULL
);

