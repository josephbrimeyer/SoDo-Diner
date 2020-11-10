-- Schema for use in MYSQL database if hosted locally

USE sodo_db;

DROP TABLE IF EXISTS 'restaurants';

CREATE TABLE restaurants
(
    id int
    AUTO_INCREMENT NOT NULL,
    restaurantName varchar
    (255) NOT NULL,
    restaurantNumber varchar
    (10) NOT NULL,
    restaurantStreet varchar
    (255) NOT NULL,
    restaurantCity varchar
    (30) NOT NULL,
    restaurantState varchar
    (20) NOT NULL,
    restaurantZip varchar
    (10) NOT NULL,
    restaurantPhone varchar
    (14) NOT NULL,
    summary varchar
    (500),
    review1 varchar
    (500),
    review2 varchar
    (500),
    review3 varchar
    (500),
    PRIMARY KEY
    (id)
); 