from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import datetime

class TrainerFacade:

    SQL_TRAINERS                         = "SELECT ID, NOMBRE, APELLIDO, EMAIL, CONTRASENA, FOTO, DESCRIPCION, TWITTER, FACEBOOK, INSTAGRAM, FECHA_INSCRIPCION"+"  FROM TRAINER"

    SQL_CUALIDADES                       = "SELECT ID, NOMBRE, FECHA_INGRESO FROM CUALIDADES"

    SQL_ASOCIAR_CUALIDADES               = "INSERT INTO CUALIDADES_TRAINER (CUALIDAD_ID, TRAINER_ID) VALUES "
	
    SQL_ACTUALIZAR_TRAINER_FOTO          = "UPDATE TRAINER SET FOTO = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_FACEBOOK      = "UPDATE TRAINER SET FACEBOOK = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_TWITTER       = "UPDATE TRAINER SET TWITTER = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_INSTAGRAM     = "UPDATE TRAINER SET INSTAGRAM = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_EMAIL         = "UPDATE TRAINER SET EMAIL = '{}' WHERE ID = {}"

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
            print('Error obteniendo el cursor de facade trainer')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            pass
	
    ############ Trainers ###############################
    def trainers(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            cursor.execute(SQL_TRAINERS)   
            filas = cursor.fetchall()
            return filas
        except:
            print('Error obteniendo trainers')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:
            cursor.close()
            self.cerrarConexion()
        return None
    
    ########### Cualidades ##############################################
    def cualidades(self):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####            
            cursor.execute(SQL_CUALIDADES)            
            filas = cursor.fetchall()
            return filas
        except:
            print('Error en cualidades')
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

    ######### Actualizar trainer #############################################
    def actualizar_trainer(self, _json):
        try:
            campo     = ''
            sentencia = ''
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####            
            json_entrada  = json.loads(_json)
            campo = json_entrada["campo"].upper()
            if campo == 'FOTO':
                sentencia = SQL_ACTUALIZAR_TRAINER_FOTO.format(json_entrada["foto"], json_entrada["id"])
            elif campo == 'FACEBOOK':
                sentencia = SQL_ACTUALIZAR_TRAINER_FACEBOOK.format(json_entrada["facebook"], json_entrada["id"])
            elif campo == 'TWITTER':
                sentencia = SQL_ACTUALIZAR_TRAINER_TWITTER.format(json_entrada["twitter"], json_entrada["id"])
            elif campo == 'INSTAGRAM':
                sentencia = SQL_ACTUALIZAR_TRAINER_INSTAGRAM.format(json_entrada["instagram"], json_entrada["id"])
            elif campo == 'EMAIL':
                sentencia = SQL_ACTUALIZAR_TRAINER_EMAIL.format(json_entrada["email"], json_entrada["id"])
            else:
                raise Exception('El campo a actualizar no existe. viene de manera vacia o erronea ')            
            cursor.execute(sentencia)            
            return True
        except:
            print('Error en actualizar trainer')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()