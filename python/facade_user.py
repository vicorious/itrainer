from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras

class ClienteFacade:

    SQL_LOGUEO   = "SELECT ID FROM USUARIO WHERE EMAIL = '{}' AND CONTRASENA = '{}'"
    SQL_REGISTRO = "INSERT INTO USUARIO (NOMBRE, APELLIDO, EMAIL, CONTRASENA) VALUES ('{}','{}','{}','{}')"

    def __init__(self):
        pass

    ########################### Logueo ###############
    def logueo(self, _json):
        try:
            #Conexion a postgre
            default   = DefaultConnection()
            conexion  = default.postgre_connect()
            cursor    = conexion.cursor('cursor_unique_name', cursor_factory=psycopg2.extras.DictCursor)
            #####
            json_entrada = json.loads(_json)
            cursor.execute(SQL_LOGUEO.format(json_entrada["email"], json_entrada["contrasena"]))
            registros = cursor.fetchall()
            return len(registros)
        except:
            print 'Error en el logueo'
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            cursor.close()
            conexion.close()
        return 0
    
    ######################### Registrarme ############
    def registrarme(self, _json):
        insert = False
        try:
            #Conexion a postgre
            default = DefaultConnection()
            conexion  = default.postgre_connect()			
            cursor  = conexion.cursor('cursor_unique_name', cursor_factory=psycopg2.extras.DictCursor)
            #####
            json_entrada = json.loads(_json)
            cursor.execute(SQL_REGISTRO.format(json_entrada["nombre"], json_entrada["apellido"], json_entrada["email"], json_entrada["contrasena"]))
            insert = True
        except:
            print 'Error en registrar el usuario'
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))
        finally:
            cursor.close()
            conexion.close()
        return insert