-- Drops the bamazon_db if it already exists --
USE bamazon_db;
-- DROP DATABASE IF EXISTS bamazon_db;
-- DROP TABLE IF EXISTS products;

-- Create a database called bamazon_db --
-- CREATE DATABASE bamazon_db;


-- Use programming db for the following statements --

CREATE TABLE products(
 item_id INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
 product_name VARCHAR(50) NOT NULL,
 department_name VARCHAR(50),
 price INTEGER(10),
 stock_quantity INTEGER(10)
);


-- Creates new rows containing data in all named columns --
INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Men's running shoes", "Men's", 125, 200);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Men's running shorts", "Men's", 60, 150);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Men's running shirt", "Men's", 55, 150);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Men's running socks", "Men's", 35, 150);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Men's gloves", "Men's", 30, 100);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Women's running shoes", "Women's", 125, 200);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Women's running shorts", "Women's", 60, 150);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Women's running shirt", "Women's", 55, 150);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Women's running socks", "Women's", 35, 150);

INSERT INTO products (product_name, department_name,price,stock_quantity)
VALUES ("Women's gloves", "Women's", 30, 100);

SELECT * FROM products;
  
 