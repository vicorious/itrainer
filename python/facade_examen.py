from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import datetime

class ExamenFacade:

    SQL_EXAMEN                    = "INSERT INTO EXAMEN (NOMBRE, TIPO_EXAMEN_ID, TRAINER_ID, FECHA_EXAMEN) VALUES('{}',{},{},'{}')"

    SQL_TIPOS_EXAMEN              = "SELECT ID, NOMBRE, PUNTOS_ASIGNAR FROM TIPO_EXAMEN"

    SQL_PREGUNTA_TIPO             = "SELECT t.id, t.nombre, p.id, p.nombre"+"  FROM TIPO_EXAMEN t  INNER JOIN PREGUNTA_EXAMEN_TRAINER p"+"    ON t.id = p.tipo_examen_id"

    SQL_ASOCIAR_RESPUESTAS        = "INSERT INTO RESPUESTA_EXAMEN_TRAINER (PREGUNTA_EXAMEN_TRAINER_ID, RESPUESTA) VALUES "

    SQL_ACTUALIZAR_CALIFICACION   = "UPDATE EXAMEN SET CALIFICACION = {} WHERE ID = {}"

    conexion = None


    ####### Constructor ############
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
            print('Error obteniendo el cursor de facade examen')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            pass

    ############ crear examen ###############################
    def crear_examen(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
            insert        = SQL_EXAMEN.format(json_entrada["nombre"], json_entrada["tipo_examen_id"], json_entrada["trainer_id"], fecha_actual)
            cursor.execute(insert)
            return True
        except:
            print('Error creando el examen')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
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
            cursor.execute(SQL_TIPOS_EXAMEN)            
            filas = cursor.fetchall()
            return filas
        except:
            print('Error en tipos examen')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
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
            insert = SQL_ASOCIAR_CUALIDADES.concat("(%(cualidad_id)d, %(trainer_id)d)")
            cursor.executemany(insert, json_tupla)
            return True
        except:
            print('Error asociando la cualidad al trainer')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()