from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import datetime
import logging

class TrainerFacade:

    SQL_TRAINERS                         = "SELECT ID, NOMBRE, APELLIDO, EMAIL, CONTRASENA, FOTO, DESCRIPCION, TWITTER, FACEBOOK, INSTAGRAM, FECHA_INSCRIPCION"+"  FROM TRAINER"

    SQL_CUALIDADES                       = "SELECT ID, NOMBRE, FECHA_INGRESO FROM CUALIDAD"

    SQL_ASOCIAR_CUALIDADES               = "INSERT INTO CUALIDADES_TRAINER (CUALIDAD_ID, TRAINER_ID) VALUES "
	
    SQL_ACTUALIZAR_TRAINER_FOTO          = "UPDATE TRAINER SET FOTO = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_FACEBOOK      = "UPDATE TRAINER SET FACEBOOK = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_TWITTER       = "UPDATE TRAINER SET TWITTER = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_INSTAGRAM     = "UPDATE TRAINER SET INSTAGRAM = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_TRAINER_EMAIL         = "UPDATE TRAINER SET EMAIL = '{}' WHERE ID = {}"

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
            logging.debug('Cursor correcto Trainer!')
            return cursor
        except Exception as e:
            logging.debug('Error obteniendo el cursor de facade trainer')
            raise Exception('Error no controlado en el cursor: {}'.format(e.args[0]))
        finally:            
            pass
	
    ############ Trainers ###############################
    def trainers(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            cursor.execute(self.SQL_TRAINERS)
            filas = cursor.fetchall()            
            return filas
        except Exception as e:
            logging.debug('Error no controlado trainers: {}'.format(e.args[0]))
            raise Exception('Error no controlado trainers: {}'.format(e.args[0]))
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
            cursor.execute(self.SQL_CUALIDADES)            
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error en cualidades')
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
            insert = self.SQL_ASOCIAR_CUALIDADES.concat("(%(cualidad_id)d, %(trainer_id)d)")
            cursor.executemany(insert, json_tupla)
            return True
        except Exception as e:
            logging.debug('Error asociando la cualidad al trainer')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
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
                sentencia = self.SQL_ACTUALIZAR_TRAINER_FOTO.format(json_entrada["foto"], json_entrada["id"])
            elif campo == 'FACEBOOK':
                sentencia = self.SQL_ACTUALIZAR_TRAINER_FACEBOOK.format(json_entrada["facebook"], json_entrada["id"])
            elif campo == 'TWITTER':
                sentencia = self.SQL_ACTUALIZAR_TRAINER_TWITTER.format(json_entrada["twitter"], json_entrada["id"])
            elif campo == 'INSTAGRAM':
                sentencia = self.SQL_ACTUALIZAR_TRAINER_INSTAGRAM.format(json_entrada["instagram"], json_entrada["id"])
            elif campo == 'EMAIL':
                sentencia = self.SQL_ACTUALIZAR_TRAINER_EMAIL.format(json_entrada["email"], json_entrada["id"])
            else:
                raise Exception('El campo a actualizar no existe. viene de manera vacia o erronea ')            
            cursor.execute(sentencia)            
            return True
        except Exception as e:
            logging.debug('Error en actualizar trainer')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()