# Creating a table MenuItems 

create table MenuItem (
    item_id INT PRIMARY KEY ,
    item_name VARCHAR(50) UNIQUE ,
    Price INT NOT NULL,
    Category VARCHAR(20)
);

# Inserting three values 

insert into MenuItems (item_id, item_name, price , category)
VALUES 
(1, 'pizza' , 200, 'mexican'),
(2, 'samosa', 50, 'fast food'),
(3, 'rice', 40, 'main course');

# Update the price of nay item 

UPDATE MenuItems SET price = 100 WHERE item_id =  1;

# Delete one item using Item_id 

DELETE FROM MenuItems WHERE item_id = 3;

# Find the average price of all items 

SELECT AVG(prices) AS AVeragePrice FROM MenuItems

# Find the sum of all prices 

SELECT SUM(prices) AS SUMPrice FROM MenuItems
