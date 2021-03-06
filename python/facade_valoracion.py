from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import logging

class ValoracionFacade:

     ## Tipo valoracion = 1 es el tipo de valoracion default (Valoracion para todos los usuarios)
    SQL_VALORACIONES_DEFAULT = "SELECT v.nombre, t.nombre, p.nombre, p.id "+" FROM VALORACION v                 INNER JOIN TIPO_VALORACION t "+"  ON v.tipo_valoracion_id = t.id  INNER JOIN PREGUNTA_VAlORACION p"+"  ON t.id = p.tipo_valoracion_id  WHERE p.TIPO_VALORACION_ID = 1"

    SQL_VALORACIONES_TIPO    = "SELECT v.nombre, t.nombre, p.nombre, p.id "+" FROM VALORACION v                 INNER JOIN TIPO_VALORACION t "+"  ON v.tipo_valoracion_id = t.id  INNER JOIN PREGUNTA_VAlORACION p"+"  ON t.id = p.tipo_valoracion_id  WHERE p.TIPO_VALORACION_ID = {}"

    SQL_INSERT_RESPUESTAS     = "INSERT INTO RESPUESTA_VALORACION (PREGUNTA_VALORACION_ID, RESPUESTA) VALUES "

    conexion = None

    logging.basicConfig(filename="test.log", level=logging.DEBUG)

     ################## Constructor ####################
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
            logging.debug('Error obteniendo el cursor facade valoracion')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            pass

    ############ valoracion ####################### 
    def valoracionDefault(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            cursor.execute(self.SQL_VALORACIONES_DEFAULT)            
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error obteniendo la valoracion default')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None 
                  
    ############ valoracion por tipo ##############
    def valoracionTipo(self, _json):
        try:
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            cursor.execute(self.SQL_VALORACIONES_TIPO.format(json_entrada["tipo_valoracion_id"]))   
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error obteniendo la valoracion por tipo')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None
    
    ########### Asociar respuesta a la pregunta
    def asociarRespuestaAPregunta(self, _json):
        try:         
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            json_tupla = tuple(json_entrada)
            print('Tupla: ')
            print(json_tupla)
            insert = self.SQL_INSERT_RESPUESTAS + "(%(pregunta_valoracion_id)d, %(respuesta)s)"
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

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()
                