from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import datetime
import logging

class PremioFacade:

    SQL_PREMIO_TRAINER               = "SELECT ID, NOMBRE, COSTO_PUNTOS FROM PREMIO_TRAINER"

    SQL_PREMIO_USUARIO               = "SELECT ID, NOMBRE, COSTO_PUNTOS FROM PREMIO_USUARIO"

    SQL_TRAINER_PREMIOS              = "INSERT INTO TRAINER_PREMIO (TRAINER_ID, PREMIO_TRAINER_ID, FECHA_RECLAMACION_PREMIO) VALUES({},{}, '{}')"

    SQL_USUARIO_PREMIOS              = "INSERT INTO USUARIO_PREMIO (USUARIO_ID, PREMIO_USUARIO_ID, FECHA_RECLAMACION_PREMIO) VALUES({},{}, '{}')"

    SQL_PROVEEDOR_USUARIO			 = "INSERT INTO PROVEEDOR_USUARIO (NOMBRE, DIRECCION, FECHA_INSCRIPCION) VALUES ('{}','{}','{}')"

    SQL_PROVEEDOR_TRAINER			 = "INSERT INTO PROVEEDOR_TRAINER (NOMBRE, DIRECCION, FECHA_INSCRIPCION) VALUES ('{}','{}','{}')"

    SQL_PREMIO_USUARIO_PROVEEDOR	 = "INSERT INTO PREMIO_USUARIO_PROVEEDOR (PREMIO_USUARIO_ID, PROVEEDOR_USUARIO_ID, FECHA_INSCRIPCION) VALUES ({},{},'{}')"

    SQL_PREMIO_TRAINER_PROVEEDOR	 = "INSERT INTO PREMIO_TRAINER_PROVEEDOR (PREMIO_TRAINER_ID, PROVEEDOR_TRAINER_ID, FECHA_INSCRIPCION) VALUES ({},{},'{}')"

    conexion = None

    logging.basicConfig(filename="test.log", level=logging.DEBUG)

    ###### Constructor #######
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
            logging.debug('Error obteniendo el cursor de facade premios')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:            
            pass

    ######### Premios para los trainer #############
    def premios_trainer(self):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####            
            cursor.execute(self.SQL_PREMIO_TRAINER)            
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error en premios trainer')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None

    ######### Premios para los usuarios #############
    def premios_usuario(self):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####            
            cursor.execute(self.SQL_PREMIO_USUARIO)            
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error en premios usuarios')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None

    ############ Asociar premio a trainer ###############################
    def asociar_trainer_premio(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
            insert        = self.SQL_TRAINER_PREMIOS.format(json_entrada["trainer_id"], json_entrada["premio_trainer_id"], fecha_actual)
            cursor.execute(insert)
            return True
        except Exception as e:
            logging.debug('Error asociar trainer premio')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return False

    ############ Asociar premio a usuario ###############################
    def asociar_usuario_premio(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
            insert        = self.SQL_USUARIO_PREMIOS.format(json_entrada["usuario_id"], json_entrada["premio_usuario_id"], fecha_actual)
            cursor.execute(insert)
            return True
        except Exception as e:
            logging.debug('Error asociar usuario premio')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return False

    ############## Inscribe un proveedor usuario ############
    def proveedor_usuario_inscripcion(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
            insert        = self.SQL_PROVEEDOR_USUARIO.format(json_entrada["nombre"], json_entrada["direccion"], fecha_actual)
            cursor.execute(insert)
            return True
        except Exception as e:
            logging.debug('Error asociar proveedor_usuario_inscripcion')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return False

    ############## Inscribe un proveedor trainer ############
    def proveedor_trainer_inscripcion(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
            insert        = self.SQL_PROVEEDOR_TRAINER.format(json_entrada["nombre"], json_entrada["direccion"], fecha_actual)
            cursor.execute(insert)
            return True
        except Exception as e:
            logging.debug('Error asociar proveedor_trainer_inscripcion')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return False

    ############## Asocia un premio a un proveedor usuario ############
    def asociar_premio_proveedor_usuario(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
            insert        = self.SQL_PREMIO_USUARIO_PROVEEDOR.format(json_entrada["premio_usuario_id"],json_entrada["proveedor_usuario_id"], fecha_actual)
            cursor.execute(insert)
            return True
        except Exception as e:
            logging.debug('Error asociar_premio_proveedor_usuario')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return False

    ############## Asocia un premio a un proveedor trainer ############
    def asociar_premio_proveedor_trainer(self, _json):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada  = json.loads(_json)
            fecha_actual  = datetime.datetime.fromtimestamp(ts).strftime('%Y-%m-%d %H:%M:%S')
            insert        = self.SQL_PREMIO_TRAINER_PROVEEDOR.format(json_entrada["premio_trainer_id"],json_entrada["proveedor_trainer_id"], fecha_actual)
            cursor.execute(insert)
            return True
        except Exception as e:
            logging.debug('Error asociar_premio_proveedor_trainer')
            raise Exception('Error no controlado: {}'.format(e.args[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return False

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()
        