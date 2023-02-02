DROP DATABASE IF EXISTS registrar_db;
CREATE DATABASE registrar_db;

USE registrar_db;

CREATE TABLE courses (
  id INT NOT NULL,
  course_title VARCHAR(30) NOT NULL,
  course_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE students (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE instructors (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  active BOOLEAN NOT NULL,
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE classrooms (
  id INT NOT NULL,
  building_name VARCHAR(30) NOT NULL,
  room_number INT NOT NULL,
  available BOOLEAN NOT NULL,
  date_updated DATETIME NOT NULL
);
