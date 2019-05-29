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
 price decimal(10,2),
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
  
 
 CREATE TABLE departments(
dept_id integer auto_increment NOT NULL PRIMARY KEY,
department_name varchar(30) NULL,
overhead_costs numeric(10,2)
);


INSERT INTO departments (department_name, overhead_costs)
VALUES ("Women's", 1000.00);

INSERT INTO departments (department_name, overhead_costs)
VALUES  ("Men's", 1000.00);
-- INSERT INTO departments (department_name, overhead_costs)
-- VALUES  ("Accessories", 20000)
-- INSERT INTO departments (department_name, overhead_costs)
-- VALUES  ("Appliances", 15000)
-- INSERT INTO departments (department_name, overhead_costs)
-- VALUES  ("Electronics", 7000)
-- VALUES  ("Outdoors", 6500);

SELECT * FROM departments;
