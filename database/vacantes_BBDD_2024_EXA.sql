CREATE TABLE `Categorias` (
  id_categoria int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  descripcion varchar(2000),
  PRIMARY KEY (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Perfiles`;
CREATE TABLE `Perfiles` (
  id_perfil int NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  PRIMARY KEY (id_perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Usuarios`;
CREATE TABLE `Usuarios` (
  username varchar(45) NOT NULL PRIMARY KEY,
  nombre varchar(45) NOT NULL,
  apellidos varchar(100) not null,
  email varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  enabled int NOT NULL DEFAULT 1,
  fecha_Registro date,
  UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Vacantes`;
CREATE TABLE `Vacantes` (
  id_vacante int NOT NULL AUTO_INCREMENT,
  nombre varchar(200) NOT NULL,
  descripcion text NOT NULL,
  fecha date NOT NULL,
  salario double NOT NULL,
  estatus enum('CREADA','CUBIERTA','CANCELADA') NOT NULL,
  destacado tinyint NOT NULL,
  imagen varchar(250) NOT NULL,
  detalles text NOT NULL,
  id_Categoria int NOT NULL,
  PRIMARY KEY (id_vacante),
  FOREIGN KEY (id_categoria) REFERENCES `Categorias` (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `Solicitudes`;
CREATE TABLE `Solicitudes` (
  id_solicitud int NOT NULL AUTO_INCREMENT,
  fecha date NOT NULL,
  archivo varchar(250) NOT NULL,
  comentarios varchar(2000),
  estado  tinyint NOT NULL default 0,
  -- 0 presentada, 1 adjudicada
  id_Vacante int NOT NULL,
  username varchar(45) NOT NULL,
  PRIMARY KEY (id_solicitud),
  UNIQUE(id_Vacante,username),
  FOREIGN KEY (username) REFERENCES `Usuarios` (username),
  FOREIGN KEY (id_Vacante) REFERENCES `Vacantes` (id_vacante)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- DROP TABLE IF EXISTS `UsuarioPerfil`;
CREATE TABLE `UsuarioPerfil` (
  username varchar(45) NOT NULL,
  id_Perfil int NOT NULL,
  PRIMARY KEY(username,id_Perfil),
 FOREIGN KEY (username) REFERENCES `Usuarios` (username),
  FOREIGN KEY (id_Perfil) REFERENCES `Perfiles` (id_perfil)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insertar datos en la tabla Categorias
INSERT INTO Categorias (nombre, descripcion) VALUES 
('Sector IT', 'Vacantes relacionadas con el sector tecnológico'),
('Administrativo', 'Vacantes relacionadas con el área administrativa'),
('Ventas', 'Vacantes relacionadas con el área de ventas');

-- Insertar datos en la tabla Perfiles
INSERT INTO Perfiles (nombre) VALUES 
('Empresa'),
('Usuario');

-- Insertar datos en la tabla Usuarios
INSERT INTO Usuarios (username, nombre, apellidos, email, password, fecha_Registro) VALUES 
('usuario1', 'Juan', 'Pérez', 'juan@example.com', '$2a$12$zfZx48TV.tO2agZx.WJepOsMilWKy8RJKBZVbiq0ANRmjeyJv0OsS', '2024-02-21'), -- usuario1 / juan
('usuario2', 'María', 'González', 'maria@example.com', '$2a$12$xz72J.bCGtmYk46Pj7g5muAgoZHyuZImhSqVpk1l05O.zm1uS.7ye', '2024-02-21'), -- usuario2 / maria
('admin', 'Admin', 'Admin', 'admin@example.com', '$2a$12$qxZ0Mn7Q4z42ECR7V6yRT.8C/gfYOlTefTBiWyT2ZSlSQp9UJ64pG', '2024-02-21'); -- admin / admin

-- Insertar datos en la tabla Vacantes
INSERT INTO Vacantes (nombre, descripcion, fecha, salario, estatus, destacado, imagen, detalles, id_Categoria) VALUES 
('Desarrollador Web', 'Se busca desarrollador web con experiencia en HTML, CSS, y JavaScript.', '2024-02-21', 35000, 'CREADA', 1, 'imagen1.jpg', 'Detalles de la vacante de desarrollador web.', 1),
('Asistente Administrativo', 'Se busca asistente administrativo con conocimientos en Excel y habilidades de organización.', '2024-02-21', 25000, 'CREADA', 0, 'imagen2.jpg', 'Detalles de la vacante de asistente administrativo.', 2),
('Ejecutivo de Ventas', 'Se busca ejecutivo de ventas con experiencia en el sector y habilidades de negociación.', '2024-02-21', 40000, 'CREADA', 1, 'imagen3.jpg', 'Detalles de la vacante de ejecutivo de ventas.', 3);

-- Insertar datos en la tabla Solicitudes
INSERT INTO Solicitudes (fecha, archivo, comentarios, estado, id_Vacante, username) VALUES 
('2024-02-21', 'archivo1.pdf', 'Comentarios sobre la solicitud.', 0, 1, 'usuario1'),
('2024-02-21', 'archivo2.pdf', 'Comentarios sobre la solicitud.', 0, 2, 'usuario2'),
('2024-02-21', 'archivo3.pdf', 'Comentarios sobre la solicitud.', 0, 3, 'usuario1');

-- Insertar datos en la tabla UsuarioPerfil
INSERT INTO UsuarioPerfil (username, id_Perfil) VALUES 
('usuario1', 2),
('usuario2', 2),
('admin', 1);
