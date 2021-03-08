CREATE DATABASE dbpunto_venta;


USE dbpunto_venta;

CREATE TABLE clientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    telefono VARCHAR(15),
    correo VARCHAR(250),
    direccion VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE productos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(500),
    codigo  INT NOT NULL,  
    nombre VARCHAR(200) NOT NULL,
    iva FLOAT,
    estado BOOLEAN NOT NULL,
    precio FLOAT NOT NULL,
    descripcion VARCHAR(400),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
 
 CREATE TABLE entradas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    producto INT NOT NULL,
    FOREIGN KEY (producto) REFERENCES productos(id),
    stock INT NOT NULL,    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);