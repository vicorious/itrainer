from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras

class ValoracionFacade:

     ## Tipo valoracion = 1 es el tipo de valoracion default (Valoracion para todos los usuarios)
    SQL_VALORACIONES_DEFAULT = "SELECT v.nombre, t.nombre, p.nombre, p.id "+" FROM VALORACION v                 INNER JOIN TIPO_VALORACION t "+"  ON v.tipo_valoracion_id = t.id  INNER JOIN PREGUNTA_VAlORACION p"+"  ON t.id = p.tipo_valoracion_id  WHERE TIPO_VALORACION = 1"

    SQL_VALORACIONES_TIPO    = "SELECT v.nombre, t.nombre, p.nombre, p.id "+" FROM VALORACION v                 INNER JOIN TIPO_VALORACION t "+"  ON v.tipo_valoracion_id = t.id  INNER JOIN PREGUNTA_VAlORACION p"+"  ON t.id = p.tipo_valoracion_id  WHERE TIPO_VALORACION = {}"

    SQL_INSERT_RESPUESTAS     = "INSERT INTO RESPUESTA_VALORACION VALUES "

    conexion = None

     ################## Constructor ####################
    def __init__(self):
        pass

    ############ retorna el cursor para poder interactuar con la DB #######
    def getCursor(self):
        try:
            #Conexion a postgre
            default        = DefaultConnection()
            self.conexion  = default.postgre_connect()
            cursor         = conexion.cursor(cursor_factory=psycopg2.extras.DictCursor)
            return cursor
        except:
            print('Error obteniendo el cursor facade valoracion')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            pass

    ############ valoracion ####################### 
    def valoracionDefault(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            cursor.execute(SQL_VALORACIONES_DEFAULT)   
            filas = cursor.fetchall()
            return filas
        except:
            print('Error obteniendo la valoracion default')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
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
            cursor.execute(SQL_VALORACIONES_TIPO.format(json_entrada["tipo_valoracion_id"]))   
            filas = cursor.fetchall()
            return filas
        except:
            print('Error obteniendo la valoracion por tipo')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
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
            insert = SQL_INSERT_RESPUESTAS.concat("(%(pregunta_valoracion_id)d, %(respuesta)s)")
            cursor.executemany(insert, json_tupla)
            return True
        except:
            print('Error asociando la respuesta a la pregunta')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()
                