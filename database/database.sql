CREATE DATABASE dbpunto_venta;


USE dbpunto_venta;

CREATE TABLE clientes(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200),
    apellido VARCHAR(150),
    telefono VARCHAR(15),
    correo VARCHAR(250),
    direccion VARCHAR(255),
    numero_fiscal INT,
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
    correo VARCHAR(300),
    pass VARCHAR(200),
    estado BOOLEAN,
    rol INT,
    FOREIGN KEY fk_role(rol) REFERENCES rol_user(id),    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE factura_emisor(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150),
    apellido VARCHAR(150),
    domicilio VARCHAR(200),
    denom_soc VARCHAR(300),
    numero_fiscal INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE metodo_pago(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    metodo VARCHAR (100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE facturas(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,    
    num_fact INT,
    emisor INT,        
    receptor INT,
    producto INT,
    cantidad INT,    
    subt FLOAT,
    tot FLOAT,
    metodo_pago INT,
    FOREIGN KEY fk_emi(emisor) REFERENCES factura_emisor(id),
    FOREIGN KEY fk_recep(receptor) REFERENCES clientes(id), 
    FOREIGN KEY fk_prod(producto) REFERENCES productos(id),
    FOREIGN KEY fk_metodo_pago(metodo_pago) REFERENCES metodo_pago(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



/*Consulta para traer datos por foreign key*/
/*SELECT * FROM ´productos´.´nombre´ WHERE ´id´=3*/

/* Insertar tipo de usuarios por defecto en rol_user*/
INSERT INTO rol_user(rol,nombre_rol)VALUES(501,'Super usuario');
INSERT INTO rol_user(rol,nombre_rol)VALUES(502,'Admin');
INSERT INTO rol_user(rol,nombre_rol)VALUES(503,'Normal');

/*Insertar metodos de pago*/
INSERT INTO metodo_pago(metodo)VALUES('Credito');
INSERT INTO metodo_pago(metodo)VALUES('Contado');

/*EMISOR*/
INSERT INTO factura_emisor(nombre,apellido,domicilio,denom_soc,numero_fiscal)VALUES('Javier','Andrade Duarte','Las memorias','S.A de C.V',6781);
/*Usuario root*/
INSERT INTO usuarios(nombre,usuario,correo,pass,estado,rol)VALUES('root','root','root@root','9901',1,1);
