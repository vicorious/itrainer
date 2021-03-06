from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import datetime
import logging
import time

class ExamenFacade:

    SQL_EXAMEN                    = "INSERT INTO EXAMEN (NOMBRE, TIPO_EXAMEN_ID, TRAINER_ID, FECHA_EXAMEN) VALUES('{}',{},{},'{}')"

    SQL_TIPOS_EXAMEN              = "SELECT ID, NOMBRE, PUNTOS_ASIGNAR FROM TIPO_EXAMEN"

    SQL_PREGUNTA_TIPO             = "SELECT t.id, t.nombre, p.id, p.nombre"+"  FROM TIPO_EXAMEN t  INNER JOIN PREGUNTA_EXAMEN_TRAINER p"+"    ON t.id = p.tipo_examen_id WHERE p.tipo_examen_id = {}"

    SQL_ASOCIAR_RESPUESTAS        = "INSERT INTO RESPUESTA_EXAMEN_TRAINER (PREGUNTA_EXAMEN_TRAINER_ID, RESPUESTA) VALUES "

    SQL_ACTUALIZAR_CALIFICACION   = "UPDATE EXAMEN SET CALIFICACION = {} WHERE ID = {}"

    conexion = None

    logging.basicConfig(filename="test.log", level=logging.DEBUG)


    ####### Constructor ############
    def __init__(self):
        pass

    ############ retorna el cursor para poder interactuar con la DB #######
    def getCursor(self):
        try:
            #Conexion a postgre
            default        = DefaultConnection()
            self.conexion  = default.postgre_connect()
            cursor         = self.conexion.cursor(cursor_factory=psycopg2.extras.DictCursor)
            return cursor
        except Exception as e:
            logging.debug('Error obteniendo el cursor de facade examen')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            pass

    ############ crear examen ###############################
    def crear_examen(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')
            insert        = self.SQL_EXAMEN.format(json_entrada["nombre"], json_entrada["tipo_examen_id"], json_entrada["trainer_id"], fecha_actual)
            cursor.execute(insert)
            self.conexion.commit()
            return True
        except Exception as e:
            logging.debug('Error creando el examen')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:
            cursor.close()
            self.cerrarConexion()
        return False
    
    ########### tipos examen ##############################################
    def tipos_examen(self):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####            
            cursor.execute(self.SQL_TIPOS_EXAMEN)            
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error en tipos examen')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None

    ######### asociar cualidades a trainer #############################################    
    def cualidad_trainer(self, _json):
        try:         
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            json_tupla = tuple(json_entrada)
            insert = self.SQL_ASOCIAR_CUALIDADES + "(%(cualidad_id)d, %(trainer_id)d)"
            cursor.executemany(insert, json_tupla)
            self.conexion.commit()
            return True
        except Exception as e:
            logging.debug('Error asociando la cualidad al trainer')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ########### Asociar respuesta a la pregunta
    def asociarRespuestaAPregunta(self, _json):
        try:         
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            json_tupla = tuple(json_entrada)
            insert = self.SQL_ASOCIAR_RESPUESTAS + "(%(pregunta_examen_trainer)d, %(respuesta)s)"
            cursor.executemany(insert, json_tupla)
            self.conexion.commit()
            return True
        except Exception as e:
            logging.debug('Error asociando la respuesta a la pregunta')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ############## Acutalizar calificacion ###############
    def actualizar_calificacion(self, _json):
        try:         
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            update = self.SQL_ACTUALIZAR_CALIFICACION.format(json_entrada["calificacion"], json_entrada["id"])
            cursor.execute(update)
            self.conexion.commit()
            return True
        except Exception as e:
            logging.debug('Error actualizando calificacion')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ############ Preguntas tipo de examen #############
    def preguntas_tipo_de_examen(self, _json):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####  
            json_entrada = json.loads(_json)			
            cursor.execute(self.SQL_TIPOS_EXAMEN.format(json_entrada["tipo_examen_id"]))            
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error en preguntas_tipo_de_examen')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None		


    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()