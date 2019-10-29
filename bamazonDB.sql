DROP DATABASE IF EXISTS bamazon;

CREATE database bamazon;

USE bamazon;

CREATE TABLE products(
	item_id INT(4) NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT(20) NOT NULL,
	PRIMARY KEY (item_id)
);

Select * FROM products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) 
VALUES (101, "Alexa TV Remote", "TV/Music/Movies", 39.99, 60),
	   (202, "Instant Pot", "Appliances", 99.99, 70),
	   (303, "Donkey Kong Nintendo Switch Game", "Video Games", 39.99, 50),
	   (404, "Fujifilm Instax Camera", "Technology", 129.99, 38),
	   (505, "Alexa Echo Dot Smart Speaker", "TV/Music/Movies", 89.99, 49),
	   (606, "Grill Mat", "Patio, Lawn, & Garden", 19.99, 65),
	   (707, "Pet Nail Clippers", "Pet Supplies", 12.99, 88),
	   (808, "Yoga Mat", "Sports & Outdoors", 11.99, 75),
	   (909, "Bento Boxes (20 pk.)", "Kitchen & Dining", 18.99, 55),
	   (1001, "Stainless Steel Straws (8 pcs.)", "Kitchen & Dining", 8.99, 112)