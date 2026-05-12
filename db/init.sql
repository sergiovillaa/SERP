-- =========================
-- TABLA LEAD
-- =========================
CREATE TABLE lead (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    empresa VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20),
    estado VARCHAR(50),
    fuente VARCHAR(50)
);

-- =========================
-- TABLA CLIENTE
-- =========================
CREATE TABLE cliente (
    id SERIAL PRIMARY KEY,
    nombre_empresa VARCHAR(100),
    industria VARCHAR(100),
    telefono_empresa VARCHAR(20),
    direccion TEXT,
    estado VARCHAR(50),
    lead_id INT,
    FOREIGN KEY (lead_id) REFERENCES lead(id)
);

-- =========================
-- TABLA CONTACTO
-- =========================
CREATE TABLE contacto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20),
    puesto VARCHAR(100),
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

-- =========================
-- TABLA OPORTUNIDAD
-- =========================
CREATE TABLE oportunidad (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    valor_estimado DECIMAL(12,2),
    etapa VARCHAR(50),
    probabilidad INT,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

-- =========================
-- TABLA PROYECTO
-- =========================
CREATE TABLE proyecto (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    fecha_inicio DATE,
    fecha_fin DATE,
    estado VARCHAR(50),
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

-- =========================
-- TABLA USUARIO
-- =========================
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100),
    rol VARCHAR(50)
);

-- =========================
-- TABLA TAREA (con subtareas)
-- =========================
CREATE TABLE tarea (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(100),
    descripcion TEXT,
    estado VARCHAR(50),
    prioridad VARCHAR(50),
    fecha_inicio DATE,
    fecha_fin DATE,
    proyecto_id INT,
    usuario_id INT,
    parent_id INT,
    FOREIGN KEY (proyecto_id) REFERENCES proyecto(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (parent_id) REFERENCES tarea(id) -- subtareas
);

-- =========================
-- TABLA ACTIVIDAD
-- =========================
CREATE TABLE actividad (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(50),
    descripcion TEXT,
    fecha DATE,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES cliente(id)
);

-- =========================
-- TABLA COMENTARIO
-- =========================
CREATE TABLE comentario (
    id SERIAL PRIMARY KEY,
    contenido TEXT,
    fecha DATE,
    usuario_id INT,
    tarea_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id),
    FOREIGN KEY (tarea_id) REFERENCES tarea(id)
);

-- =========================
-- TABLA ARCHIVO
-- =========================
CREATE TABLE archivo (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    url TEXT,
    tarea_id INT,
    FOREIGN KEY (tarea_id) REFERENCES tarea(id)
);