SELECT
  favorite_books.book_name AS name, book_prices.price AS price
FROM favorite_books
JOIN book_prices ON favorite_books.book_price = book_prices.id;

