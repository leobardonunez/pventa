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
    FOREIGN KEY fk_producto(producto) REFERENCES productos(id),
    stock INT NOT NULL,    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

CREATE TABLE sucursales(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    sucursal VARCHAR(200),
    estado boolean,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ventas(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,   
   producto_venta INT NOT NULL,
   FOREIGN KEY fk_producto_venta(producto_venta) REFERENCES productos(id),
   cantidad INT,
   cliente VARCHAR(200),
   subtotal FLOAT,
   iva FLOAT,
   descuento FLOAT,
   total FLOAT,
   created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE rol_user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    rol INT,
    nombre_rol VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuarios(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    imagen VARCHAR(300),
    nombre VARCHAR(200),
    usuario VARCHAR(200),
    pass VARCHAR(200),
    estado BOOLEAN,
    rol INT,
    FOREIGN KEY fk_role(rol) REFERENCES rol_user(id),    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



/*Consulta para traer datos por foreign key*/
/*SELECT * FROM ´productos´.´nombre´ WHERE ´id´=3*/

/* Insertar tipo de usuarios por defecto en rol_user*/
INSERT INTO rol_user(rol,nombre_rol)VALUES(501,'Super usuario');
INSERT INTO rol_user(rol,nombre_rol)VALUES(502,'Admin');
INSERT INTO rol_user(rol,nombre_rol)VALUES(503,'Normal');

