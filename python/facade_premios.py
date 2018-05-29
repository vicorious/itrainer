from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import datetime

class PremioFacade:

    SQL_PREMIO_TRAINER               = "SELECT ID, NOMBRE, COSTO_PUNTOS FROM PREMIO_TRAINER"

    SQL_PREMIO_USUARIO               = "SELECT ID, NOMBRE, COSTO_PUNTOS FROM PREMIO_USUARIO"

    SQL_TRAINER_PREMIOS              = "INSERT INTO TRAINER_PREMIO (TRAINER_ID, PREMIO_TRAINER_ID, FECHA_RECLAMACION_PREMIO) VALUES({},{}, '{}')"

    SQL_USUARIO_PREMIOS              = "INSERT INTO USUARIO_PREMIO (USUARIO_ID, PREMIO_USUARIO_ID, FECHA_RECLAMACION_PREMIO) VALUES({},{}, '{}')"

    ###### Constructor #######
    def __init__(self):
        pass

    ############ retorna el cursor para poder interactuar con la DB #######
    def getCursor(self):
        try:
            #Conexion a postgre
            default        = DefaultConnection()
            self.conexion  = default.postgre_connect()
            cursor         = conexion.cursor('cursor_unique_name', cursor_factory=psycopg2.extras.DictCursor)
            return cursor
        except:
            print('Error obteniendo el cursor de facade premios')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()

    ######### Premios para los trainer #############
    def premios_trainer(self):
        try:
            #Conexion a postgre            
            cursor        = self.getCursor()
            #####            
            cursor.execute(SQL_PREMIO_TRAINER)            
            filas = cursor.fetchall()
            return filas
        except:
            print('Error en premios trainer')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
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
            cursor.execute(SQL_PREMIO_USUARIO)            
            filas = cursor.fetchall()
            return filas
        except:
            print('Error en premios usuarios')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
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
            insert        = SQL_TRAINER_PREMIOS.format(json_entrada["trainer_id"], json_entrada["premio_trainer_id"], fecha_actual)
            cursor.execute(insert)
            return True
        except:
            print('Error asociar trainer premio')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
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
            insert        = SQL_USUARIO_PREMIOS.format(json_entrada["trainer_id"], json_entrada["premio_trainer_id"], fecha_actual)
            cursor.execute(insert)
            return True
        except:
            print('Error asociar usuario premio')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:
            cursor.close()
            self.cerrarConexion()
        return False
        