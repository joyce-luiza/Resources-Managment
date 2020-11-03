CREATE DATABASE resource_register;

CREATE TABLE resources(
    resource_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    creation_date DATE
);

