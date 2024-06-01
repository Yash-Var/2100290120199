# 2100290120199


these are the create sql commands for the database

CREATE TABLE companies (
  company_id int NOT NULL AUTO_INCREMENT,
  company_name varchar(240) NOT NULL,
  company_description varchar(240) NOT NULL,
  PRIMARY KEY (company_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


CREATE TABLE category (
  id_category int NOT NULL AUTO_INCREMENT,
  name varchar(240) NOT NULL,
  company_id int NOT NULL,
  PRIMARY KEY (id_category),
  KEY company_id_idx (company_id),
  CONSTRAINT company_id FOREIGN KEY (company_id) REFERENCES companies (company_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

CREATE TABLE products (
  id_products int NOT NULL AUTO_INCREMENT,
  name_pro varchar(240) NOT NULL,
  price int NOT NULL,
  rating int NOT NULL,
  discount int NOT NULL,
  availability varchar(240) NOT NULL DEFAULT 'yes',
  category_id int NOT NULL,
  PRIMARY KEY (id_products),
  KEY category_id_idx (category_id),
  CONSTRAINT category_id FOREIGN KEY (category_id) REFERENCES category (id_category)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci


INSERT INTO companies (company_name, company_description) VALUES 
('Tech Innovators Inc.', 'A leading tech innovation company'),
('Gourmet Foods Ltd.', 'Specialists in gourmet food products'),
('Eco Friendly Corp.', 'Manufacturer of eco-friendly products'),
('Fashion Forward LLC', 'Trendy fashion brand for young adults'),
('Health and Wellness Co.', 'Provider of health and wellness products');

INSERT INTO category (name, company_id) VALUES 
('Electronics', 1),
('Software', 1),
('Snacks', 2),
('Beverages', 2),
('Recyclable Materials', 3),
('Organic Products', 3),
('Clothing', 4),
('Accessories', 4),
('Fitness Equipment', 5),
('Supplements', 5)


INSERT INTO products (name_pro, price, rating, discount, availability, category_id) VALUES 
-- Electronics (category_id = 1)
('Smartphone X', 999, 5, 10, 'yes', 1),
('Laptop Pro', 1299, 4, 15, 'yes', 1),
('Tablet Plus', 499, 4, 10, 'yes', 1),
('Wireless Earbuds', 199, 5, 5, 'yes', 1),
('Smartwatch', 299, 4, 10, 'yes', 1),
('4K Monitor', 399, 5, 15, 'yes', 1),
('Gaming Console', 499, 5, 20, 'yes', 1),
('Bluetooth Speaker', 99, 4, 10, 'yes', 1),
('External Hard Drive', 89, 4, 5, 'yes', 1),
('Digital Camera', 599, 4, 20, 'yes', 1),
('Fitness Tracker', 149, 4, 15, 'yes', 1),
('VR Headset', 299, 5, 10, 'yes', 1),
('Smart Home Hub', 149, 4, 5, 'yes', 1),
('Wireless Charger', 49, 4, 10, 'yes', 1),
('Portable Projector', 299, 5, 15, 'yes', 1),

-- Software (category_id = 2)
('Antivirus Software', 49, 4, 20, 'yes', 2),
('Project Management Tool', 199, 5, 10, 'yes', 2),
('Photo Editing Software', 79, 4, 15, 'yes', 2),
('Video Editing Suite', 129, 5, 10, 'yes', 2),
('Office Suite', 99, 4, 10, 'yes', 2),
('Accounting Software', 149, 5, 5, 'yes', 2),
('Customer Relationship Management', 249, 5, 20, 'yes', 2),
('Cloud Storage Service', 99, 4, 10, 'yes', 2),
('E-Learning Platform', 199, 4, 15, 'yes', 2),
('Graphic Design Software', 89, 5, 10, 'yes', 2),
('Web Development Tool', 149, 4, 20, 'yes', 2),
('Music Production Software', 129, 5, 15, 'yes', 2),
('Data Analysis Tool', 199, 4, 10, 'yes', 2),
('Network Security Software', 249, 5, 5, 'yes', 2),
('Game Development Suite', 299, 5, 10, 'yes', 2),

-- Snacks (category_id = 3)
('Organic Chips', 3, 4, 5, 'yes', 3),
('Protein Bars', 2, 5, 10, 'yes', 3),
('Trail Mix', 4, 4, 0, 'yes', 3),
('Veggie Crisps', 3, 5, 5, 'yes', 3),
('Fruit Snacks', 3, 4, 10, 'yes', 3),
('Granola Bars', 2, 5, 0, 'yes', 3),
('Popcorn', 3, 4, 5, 'yes', 3),
('Rice Cakes', 2, 4, 10, 'yes', 3),
('Nuts and Seeds Mix', 4, 5, 5, 'yes', 3),
('Energy Bites', 3, 4, 0, 'yes', 3),
('Dark Chocolate', 5, 5, 10, 'yes', 3),
('Kale Chips', 3, 4, 5, 'yes', 3),
('Dried Fruits', 4, 5, 0, 'yes', 3),
('Gluten-Free Crackers', 3, 4, 10, 'yes', 3),
('Organic Pretzels', 2, 5, 5, 'yes', 3),

-- Beverages (category_id = 4)
('Gourmet Coffee', 12, 5, 0, 'yes', 4),
('Herbal Tea', 8, 4, 5, 'yes', 4),
('Green Smoothie', 5, 5, 10, 'yes', 4),
('Energy Drink', 3, 4, 0, 'yes', 4),
('Organic Juice', 4, 5, 5, 'yes', 4),
('Alkaline Water', 2, 4, 10, 'yes', 4),
('Protein Shake', 6, 5, 0, 'yes', 4),
('Matcha Latte', 5, 4, 5, 'yes', 4),
('Kombucha', 4, 5, 10, 'yes', 4),
('Cold Brew Coffee', 4, 4, 0, 'yes', 4),
('Chai Tea', 3, 5, 5, 'yes', 4),
('Detox Drink', 5, 4, 10, 'yes', 4),
('Sparkling Water', 2, 5, 0, 'yes', 4),
('Turmeric Latte', 6, 4, 5, 'yes', 4),
('Coconut Water', 3, 5, 10, 'yes', 4),

-- Recyclable Materials (category_id = 5)
('Recycled Paper', 2, 5, 0, 'yes', 5),
('Eco-friendly Notebooks', 3, 4, 5, 'yes', 5),
('Recycled Plastic Bags', 1, 5, 10, 'yes', 5),
('Bamboo Straws', 2, 4, 0, 'yes', 5),
('Recycled Glass Bottles', 3, 5, 5, 'yes', 5),
('Eco-friendly Pens', 1, 4, 10, 'yes', 5),
('Recycled Cardboard', 2, 5, 0, 'yes', 5),
('Compostable Cutlery', 4, 4, 5, 'yes', 5),
('Recycled Fabric', 3, 5, 10, 'yes', 5),
('Eco-friendly Tape', 1, 4, 0, 'yes', 5),
('Recycled Metal Cans', 2, 5, 5, 'yes', 5),
('Recycled Wood Products', 5, 4, 10, 'yes', 5),
('Biodegradable Packaging', 3, 5, 0, 'yes', 5),
('Recycled Rubber Products', 4, 4, 5, 'yes', 5),
('Eco-friendly Cleaning Products', 5, 5, 10, 'yes', 5),

-- Organic Products (category_id = 6)
('Bamboo Toothbrush', 4, 4, 10, 'yes', 6),
('Organic Cotton Towels', 15, 5, 0, 'yes', 6),
('Natural Deodorant', 6, 4, 5, 'yes', 6),
('Organic Shampoo', 8, 5, 10, 'yes', 6),
('Organic Soap', 5, 4, 0, 'yes', 6),
('Organic Face Cream', 20, 5, 5, 'yes', 6),
('Bamboo Hairbrush', 7, 4, 10, 'yes', 6),
('Organic Lip Balm', 3, 5, 0, 'yes', 6),
('Organic Cotton Bedding', 30, 4, 5, 'yes', 6),
('Natural Sunscreen', 12, 5, 10, 'yes', 6),
('Organic Toothpaste', 6, 4, 0, 'yes', 6),
('Natural Cleaning Spray', 7, 5, 5, 'yes', 6),
('Organic Cotton Clothing', 25, 4, 10, 'yes', 6),
('Organic Baby Products', 10, 5, 0, 'yes', 6),
('Organic Essential Oils', 15, 4, 5, 'yes', 6),

-- Clothing (category_id = 7)
('Summer Dress', 45, 5, 20, 'yes', 7),
('Winter Jacket', 120, 4, 10, 'yes', 7),
('Casual T-shirt', 20, 5, 15, 'yes', 7),
('Jeans', 60, 4, 5, 'yes', 7),
('Sweater', 50, 5, 10, 'yes', 7),
('Formal Shirt', 40, 4, 20, 'yes', 7),
('Shorts', 25, 5, 15, 'yes', 7),
('Skirt', 35, 4, 10, 'yes', 7),
('Blouse', 30, 5, 5, 'yes', 7),
('Suit', 150, 4, 20, 'yes', 7),
('Hoodie', 50, 5, 10, 'yes', 7),
('Pajamas', 30, 4, 15, 'yes', 7),
('Sportswear', 40, 5, 10, 'yes', 7),
('Jumpsuit', 55, 4, 5, 'yes', 7),
('Cardigan', 45, 5, 15, 'yes', 7),

-- Accessories (category_id = 8)
('Leather Wallet', 60, 4, 5, 'yes', 8),
('Sunglasses', 30, 5, 10, 'yes', 8),
('Watch', 100, 4, 15, 'yes', 8),
('Scarf', 20, 5, 10, 'yes', 8),
('Hat', 25, 4, 20, 'yes', 8),
('Belt', 15, 5, 10, 'yes', 8),
('Handbag', 80, 4, 5, 'yes', 8),
('Necklace', 50, 5, 15, 'yes', 8),
('Bracelet', 35, 4, 10, 'yes', 8),
('Earrings', 40, 5, 5, 'yes', 8),
('Ring', 60, 4, 15, 'yes', 8),
('Tie', 20, 5, 10, 'yes', 8),
('Backpack', 70, 4, 20, 'yes', 8),
('Keychain', 10, 5, 5, 'yes', 8),
('Socks', 10, 4, 10, 'yes', 8),

-- Fitness Equipment (category_id = 9)
('Yoga Mat', 30, 5, 15, 'yes', 9),
('Dumbbells', 40, 4, 10, 'yes', 9),
('Treadmill', 500, 5, 20, 'yes', 9),
('Exercise Bike', 300, 4, 15, 'yes', 9),
('Kettlebells', 60, 5, 10, 'yes', 9),
('Resistance Bands', 20, 4, 5, 'yes', 9),
('Pull-up Bar', 50, 5, 10, 'yes', 9),
('Jump Rope', 15, 4, 20, 'yes', 9),
('Foam Roller', 25, 5, 10, 'yes', 9),
('Fitness Tracker', 150, 4, 15, 'yes', 9),
('Gym Bag', 50, 5, 5, 'yes', 9),
('Workout Bench', 100, 4, 20, 'yes', 9),
('Medicine Ball', 30, 5, 10, 'yes', 9),
('Speed Ladder', 40, 4, 15, 'yes', 9),
('Boxing Gloves', 60, 5, 10, 'yes', 9),

-- Supplements (category_id = 10)
('Vitamin C Supplement', 20, 4, 0, 'yes', 10),
('Protein Powder', 50, 5, 10, 'yes', 10),
('Omega-3 Capsules', 30, 4, 5, 'yes', 10),
('Probiotics', 40, 5, 15, 'yes', 10),
('Multivitamins', 25, 4, 10, 'yes', 10),
('Calcium Tablets', 15, 5, 20, 'yes', 10),
('Vitamin D Supplement', 20, 4, 5, 'yes', 10),
('Magnesium Supplement', 30, 5, 10, 'yes', 10),
('Zinc Tablets', 15, 4, 0, 'yes', 10),
('Iron Supplement', 25, 5, 5, 'yes', 10),
('Collagen Powder', 40, 4, 10, 'yes', 10),
('Turmeric Capsules', 20, 5, 15, 'yes', 10),
('Fish Oil', 35, 4, 10, 'yes', 10),
('Vitamin B12 Supplement', 20, 5, 5, 'yes', 10),
('Elderberry Gummies', 25, 4, 20, 'yes', 10);



![Screenshot of Feature X](./Screenshot%20from%202024-06-01%2013-15-40.png)

![Screenshot of Feature y](./Screenshot%20from%202024-06-01%2013-16-07.png)
 
 ![Screenshot of Feature y](./Screenshot%20from%202024-06-01%2013-16-21.png)

 ![Screenshot of Feature y](./Screenshot%20from%202024-06-01%2013-16-40.png)

 ![Screenshot of Feature y](./Screenshot%20from%202024-06-01%2013-16-45.png)
 ![Screenshot of Feature y](./Screenshot%20from%202024-06-01%2013-47-51.png)

 ![Screenshot of Feature](./Screenshot%20from%202024-06-01%2013-47-57.png)