CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created DATETIME,
    modified DATETIME
);

INSERT INTO users (email, password, created, modified)
VALUES
('test@gmail.com', 'secret', NOW(), NOW());
