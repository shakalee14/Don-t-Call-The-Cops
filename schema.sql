DROP TABLE IF EXISTS customers;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  address VARCHAR(255) NOT NULL,
  website_url VARCHAR(255) NOT NULL,
  zipcode INTEGER NOT NULL,
  created_by VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  votes INTEGER NOT NULL
);