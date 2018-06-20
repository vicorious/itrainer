from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import datetime
import logging
import time

class AgendamientoFacade:

    ESTADO_REAGENDADO               = "I"

    ESTADO_ACTIVO                   = "A"

    ESTADO_CANCELADO                = "C"

    ESTADO_FINALIZADO               = "T"	

    SQL_TIPO_AGENDAMIENTO_DEFAULT   = "SELECT ID, NOMBRE, PUNTOS_ASIGNAR FROM TIPO_AGENDAMIENTO"
    
    SQL_INSERT_AGENDA               = "INSERT INTO AGENDA (USUARIO_ID, TRAINER_ID, TIPO_AGENDAMIENTO_ID, ESTADO, COSTO, FECHA_EVENTO, FECHA_AGENDAMIENTO, NOMBRE, DESCRIPCION)"+" VALUES ({},{},{},'{}','{}','{}','{}','{}','{}')"

    SQL_REAGENDAR                   = "UPDATE AGENDA SET FECHA_EVENTO = '{}', ESTADO = '{}', FECHA_AGENDAMIENTO = '{}' WHERE ID = {}"

    SQL_CANCELAR_AGENDA             = "UPDATE AGENDA SET ESTADO = '{}', FECHA_AGENDAMIENTO = '{}' WHERE ID = {}"

    SQL_CALIFICAR_TRAINER           = "UPDATE AGENDA SET CALIFICACION_TRAINER = {}, ESTADO = '{}' WHERE ID = {}"

    SQL_CALIFICAR_USUARIO           = "UPDATE AGENDA SET CALIFICACION_USUARIO = {}, ESTADO = '{}' WHERE ID = {}"

    SQL_ACTUALIZAR_COSTO            = "UPDATE AGENDA SET COSTO = {}, ESTADO = '{}' WHERE ID = {}"

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
            logging.debug('Error obteniendo el cursor facade agendamiento')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            pass

    ############ Tipos de agendamiento ###############################
    def tiposAgendamiento(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            cursor.execute(self.SQL_TIPO_AGENDAMIENTO_DEFAULT)   
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error obteniendo tipos de agendamiento')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:
            cursor.close()
            self.cerrarConexion()
        return None
    
    ########### Agendar ##############################################
    def agendar(self, _json):
        try:
            #Conexion a postgre  
            cursor        = self.getCursor()
            #####
            json_entrada  = json.loads(_json)          
            fecha_actual  = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')
            insert_agenda = self.SQL_INSERT_AGENDA.format(json_entrada["usuario_id"], json_entrada["trainer_id"], json_entrada["tipo_agendamiento_id"], json_entrada["estado"], json_entrada["costo"], fecha_actual, json_entrada["fecha_agendamiento"], json_entrada["nombre"], json_entrada["descripcion"])
            cursor.execute(insert_agenda)
            self.conexion.commit()			
            return True
        except Exception as e:
            logging.debug('Error al agendar')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ######### Re agendar #############################################
    def re_agendar(self, _json):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')			
            update = self.SQL_REAGENDAR.format(json_entrada["fecha_evento"], self.ESTADO_REAGENDADO, fecha_actual, json_entrada["id"])
            cursor.execute(update)    
            self.conexion.commit()			
            return True
        except Exception as e:
            logging.debug('Error en re_agendar')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ######### Re agendar #############################################
    def cancelar_agenda(self, _json):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(time.time()).strftime('%Y-%m-%d %H:%M:%S')
            cancelar      = self.SQL_CANCELAR_AGENDA.format(self.ESTADO_CANCELADO, fecha_actual, json_entrada["id"])
            cursor.execute(cancelar) 
            self.conexion.commit()			
            return True
        except Exception as e:
            logging.debug('Error en cancelar_agenda')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ######## Calificar agenda trainer ###############################
    def calificar_agenda_trainer(self, _json):
        try:
            #Conexion a postgre            
            cursor            = self.getCursor()
            #####
            json_entrada      = json.loads(_json)            
            calificacion      = self.SQL_CALIFICAR_TRAINER.format(json_entrada["calificacion"], self.ESTADO_FINALIZADO, json_entrada["id"])
            cursor.execute(calificacion) 
            self.conexion.commit()			
            return True
        except Exception as e:
            logging.debug('Error en calificar_agenda_trainer')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ######## calificar_agenda_usuario ###############################
    def calificar_agenda_usuario(self, _json):
        try:
            #Conexion a postgre            
            cursor            = self.getCursor()
            #####
            json_entrada      = json.loads(_json)            
            calificacion      = self.SQL_CALIFICAR_USUARIO.format(json_entrada["calificacion"], self.ESTADO_FINALIZADO, json_entrada["id"])
            cursor.execute(calificacion)  
            self.conexion.commit()			
            return True
        except Exception as e:
            logging.debug('Error en calificar_agenda_usuario')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ######## calificar_agenda_usuario ###############################
    def actualizar_costo(self, _json):
        try:
            #Conexion a postgre            
            cursor            = self.getCursor()
            #####
            json_entrada      = json.loads(_json)            
            actualizar        = self.SQL_ACTUALIZAR_COSTO.format(json_entrada["costo"], self.ESTADO_REAGENDADO, json_entrada["id"])
            cursor.execute(actualizar)  
            self.conexion.commit()			
            return True
        except Exception as e:
            logging.debug('Error en actualizar_costo')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return False

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()		