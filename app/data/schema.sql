CREATE DATABASE IF NOT EXISTS msisdb;
USE msisdb;

DROP TABLE IF EXISTS book;
CREATE TABLE book (
	id int PRIMARY KEY AUTO_INCREMENT,
    title varchar(500) NOT NULL,
    author varchar(500) NOT NULL,
    published int NOT NULL,
    publisher varchar(500) NOT NULL,
    pCount int NOT NULL,
    msrp float NOT NULL
);

INSERT INTO book (title, author, published, publisher, pCount, msrp) VALUES 
('A Game of Thrones', 'George Martin', 1996, 'Bantam Books', 835, 15.99),
('The Power of Habit', 'Charles Duhigg', 2012, 'Random House', 363, 16.00),
('The Magic of Math', 'Arthur Benjamin', 2015, 'Basic Books', 310, 16.99),
('Catching Fire', 'Suzanne Collins', 2009, 'Scholastic Press', 391, 17.99),
('House of Leaves', 'Mark Danielewski', 2000, 'Pantheon Books', 707, 22.00),
('Millennium', 'Felipe Armesto', 1995, 'Simon & Schuster NY', 815, 18.00),
('Harry Potter and the Sorcerers Stone', 'J.K. Rowling', 1997, 'Bloomsbury Publishing', 309, 10.99)

-- SELECT * FROM book;
