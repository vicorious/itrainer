-- RESPUESTA_EXAMEN_TRAINER
CREATE TABLE RESPUESTA_EXAMEN_TRAINER
(
	ID 						   INT PRIMARY KEY,
	PREGUNTA_EXAMEN_TRAINER_ID INT,
	RESPUESTA				   TEXT
);

-- PREGUNTA_EXAMEN_TRAINER
CREATE TABLE PREGUNTA_EXAMEN_TRAINER
(
	ID 						INT PRIMARY KEY,
	TIPO_EXAMEN_ID			INT,
	NOMBRE					TEXT
);

-- TIPO_EXAMEN
CREATE TABLE TIPO_EXAMEN
(
	ID 					INT PRIMARY KEY,
	NOMBRE				TEXT,
	PUNTOS_ASIGNAR		INT
);

-- EXAMEN
CREATE TABLE EXAMEN
(
	ID 				INT PRIMARY KEY,
	TIPO_EXAMEN_ID	INT,
	TRAINER_ID		INT,
	NOMBRE			TEXT,
	CALIFICACION	INT,
	FECHA_EXAMEN	TIMESTAMP
);

-- TRAINER
CREATE TABLE TRAINER
(
	ID 					INT PRIMARY KEY,
	NOMBRE				TEXT,
	APELLIDO			TEXT,
	EMAIL				TEXT,
	CONTRASENA			TEXT,
	FOTO				TEXT,
	DESCRIPCION			TEXT,
	TWITTER				TEXT,
	FACEBOOK		  	TEXT,
	INSTAGRAM		  	TEXT,
	FECHA_INSCRIPCION	TIMESTAMP
);

-- CUALIDADES
CREATE TABLE CUALIDAD
(
	ID				INT PRIMARY KEY,
	NOMBRE			TEXT,
	FECHA_INGRESO	TIMESTAMP
);

-- CUALIDAD_TRAINER
CREATE TABLE CUALIDAD_TRAINER
(
	ID				INT PRIMARY KEY,
	CUALIDAD_ID		INT,
	TRAINER_ID		INT,
	FECHA_INGRESO	TIMESTAMP
);

-- AGENDA
CREATE TABLE AGENDA
(
	ID					 INT PRIMARY KEY,
	USUARIO_ID			 INT,
	TRAINER_ID			 INT,
	TIPO_AGENDAMIENTO_ID INT,
	ESTADO				 CHAR(1),
	COSTO				 INT,
	FECHA_EVENTO		 TIMESTAMP,
	FECHA_AGENDAMIENTO	 TIMESTAMP,
	FECHA_FIN_AGENDA	 TIMESTAMP,
	CALIFICACION_USUARIO INT,
	CALIFICACION_TRAINER INT,
	NOMBRE				 TEXT,
	DESCRIPCION			 TEXT
);

-- TIPO_AGENDAMIENTO
CREATE TABLE TIPO_AGENDAMIENTO
(
	ID					INT PRIMARY KEY,
	NOMBRE				TEXT,
	PUNTOS_ASIGNAR		INT
);

-- USUARIO
CREATE TABLE USUARIO
(
	ID 					INT PRIMARY KEY,
	NOMBRE				TEXT,
	APELLIDO			TEXT,
	EMAIL				TEXT,
	CONTRASENA			TEXT,
	FOTO				TEXT
);

-- VALORACION
CREATE TABLE VALORACION
(
	ID					INT PRIMARY KEY,
	USUARIO_ID			INT,
	TIPO_VALORACION_ID	INT,
	NOMBRE				TEXT
);

-- TIPO VALORACION
CREATE TABLE TIPO_VALORACION
(
	ID 					INT PRIMARY KEY,
	NOMBRE				TEXT,
	PUNTOS_ASIGNAR		INT
);

-- PREGUNTA_VALORACION
CREATE TABLE PREGUNTA_VALORACION
(
	ID					INT PRIMARY KEY,
	TIPO_VALORACION_ID	INT,
	NOMBRE				TEXT
);

-- RESPUESTA_VALORACION
CREATE TABLE RESPUESTA_VALORACION
(
	ID							INT PRIMARY KEY,
	PREGUNTA_VALORACION_ID		INT,
	RESPUESTA					TEXT
);

--TRAINER PREMIOS
CREATE TABLE TRAINER_PREMIO
(
	ID 							INT PRIMARY KEY,
	TRAINER_ID					INT,
	PREMIO_TRAINER_ID			INT,
	FECHA_RECLAMACION_PREMIO	TIMESTAMP
);

--PREMIO_TRAINER
CREATE TABLE PREMIO_TRAINER
(
	ID					INT PRIMARY KEY,
	NOMBRE				TEXT,
	COSTO_PUNTOS		INT
);

--USUARIO_PREMIO
CREATE TABLE USUARIO_PREMIO
(
	ID							INT PRIMARY KEY,
	USUARIO_ID					INT,
	PREMIO_USUARIO_ID			INT,
	FECHA_RECLAMACION_PREMIO	TIMESTAMP
);

--PREMIO_USUARIO
CREATE TABLE PREMIO_USUARIO
(
	ID 						INT PRIMARY KEY,
	NOMBRE					TEXT,
	COSTO_PUNTOS			INT
);


-- CONSTRAINTS

ALTER TABLE RESPUESTA_EXAMEN_TRAINER
ADD CONSTRAINT fk_respuesta_pregunta_examen_trainer
FOREIGN KEY (PREGUNTA_EXAMEN_TRAINER_ID)
REFERENCES PREGUNTA_EXAMEN_TRAINER (ID);

ALTER TABLE PREGUNTA_EXAMEN_TRAINER
ADD CONSTRAINT fk_pregunta_examen_tipo
FOREIGN KEY (TIPO_EXAMEN_ID)
REFERENCES TIPO_EXAMEN (ID);

ALTER TABLE EXAMEN
ADD CONSTRAINT fk_tipo_examen_examen
FOREIGN KEY (TIPO_EXAMEN_ID)
REFERENCES TIPO_EXAMEN (ID);

ALTER TABLE EXAMEN
ADD CONSTRAINT fk_examen_trainer
FOREIGN KEY (TRAINER_ID)
REFERENCES TRAINER (ID);

ALTER TABLE CUALIDAD_TRAINER
ADD CONSTRAINT fk_trainer_cualidad_trainer
FOREIGN KEY (TRAINER_ID)
REFERENCES TRAINER (ID);

ALTER TABLE CUALIDAD_TRAINER
ADD CONSTRAINT fk_cualidad_trainer_cualidad
FOREIGN KEY (CUALIDAD_ID)
REFERENCES CUALIDAD (ID);

ALTER TABLE AGENDA
ADD CONSTRAINT fk_agenda_usuario
FOREIGN KEY (USUARIO_ID)
REFERENCES USUARIO (ID);

ALTER TABLE AGENDA
ADD CONSTRAINT fk_agenda_trainer
FOREIGN KEY (TRAINER_ID)
REFERENCES TRAINER (ID);

ALTER TABLE AGENDA
ADD CONSTRAINT fk_agenda_tipo_agendamiento
FOREIGN KEY (TIPO_AGENDAMIENTO_ID)
REFERENCES TIPO_AGENDAMIENTO (ID);

ALTER TABLE AGENDA 
ADD CONSTRAINT chk_estado
CHECK (ESTADO IN ('A','I','T'));

ALTER TABLE VALORACION
ADD CONSTRAINT fk_valoracion_tipo
FOREIGN KEY (TIPO_VALORACION_ID)
REFERENCES TIPO_VALORACION (ID);

ALTER TABLE VALORACION
ADD CONSTRAINT fk_valoracion_usuario
FOREIGN KEY (USUARIO_ID)
REFERENCES USUARIO (ID);

ALTER TABLE PREGUNTA_VALORACION
ADD CONSTRAINT fk_pregunta_valoracion_tipo
FOREIGN KEY (TIPO_VALORACION_ID)
REFERENCES TIPO_VALORACION (ID);

ALTER TABLE RESPUESTA_VALORACION
ADD CONSTRAINT fk_respuesta_valoracion_pregunta
FOREIGN KEY (PREGUNTA_VALORACION_ID)
REFERENCES PREGUNTA_VALORACION (ID);

ALTER TABLE TRAINER_PREMIO
ADD CONSTRAINT fk_trainer_premio_trainer
FOREIGN KEY (TRAINER_ID)
REFERENCES TRAINER (ID);

ALTER TABLE TRAINER_PREMIO
ADD CONSTRAINT fk_trainer_premio_premio
FOREIGN KEY (PREMIO_TRAINER_ID)
REFERENCES PREMIO_TRAINER (ID);

ALTER TABLE USUARIO_PREMIO
ADD CONSTRAINT fk_usuario_premio_usuario
FOREIGN KEY (USUARIO_ID)
REFERENCES USUARIO (ID);

ALTER TABLE USUARIO_PREMIO
ADD CONSTRAINT fk_usuario_premio_usuario
FOREIGN KEY (PREMIO_USUARIO_ID)
REFERENCES PREMIO_USUARIO (ID);