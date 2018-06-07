from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras

class ClienteFacade:

    SQL_LOGUEO   = "SELECT ID FROM USUARIO WHERE EMAIL = '{}' AND CONTRASENA = '{}'"

    SQL_REGISTRO = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EMAIL, CONTRASENA) VALUES ('{}','{}','{}','{}')"

    SQL_OLVIDO   = "UPDATE USUARIO SET CONTRASENA = '{}' WHERE EMAIL = '{}' AND CONTRASENA = '{}'"
    
    conexion = None

    ############ Constructor ##############################################
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
            print('Error obteniendo el cursor facade user')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))		
        finally:            
            pass

    ########################### Logueo ###############
    def logueo(self, _json):
        try:
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            cursor.execute(SQL_LOGUEO.format(json_entrada["email"], json_entrada["contrasena"]))
            registros = cursor.fetchall()
            return len(registros)
        except:
            print('Error en el logueo')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return 0

     ######################### Registrarme ############
    def registrarme(self, _json):
        insert = False
        try:
            #Conexion a postgre
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            cursor.execute(SQL_REGISTRO.format(json_entrada["nombre"], json_entrada["apellido"], json_entrada["email"], json_entrada["contrasena"]))
            insert = True
        except:
            print('Error en registrar el usuario')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return insert

    #################### Reestablecer contrasena ##########
    def olvido_contrasena(self, _json):
        try:
            #Conexion a postgre
            cursor    = self.getCursor()
            #####
            json_entrada = json.loads(_json)
            cursor.execute(SQL_OLVIDO.format(json_entrada["nueva_contrasena"], json_entrada["email"], json_entrada["contrasena"]))
            return True
        except:
            print('Error en olvido de contrasena del usuario el usuario')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))
        finally:
            cursor.close()
            self.cerrarConexion()
        return False

     ################## Encargado de cerrar la conexion #########
    def cerrarConexion(self):
        self.conexion.close()