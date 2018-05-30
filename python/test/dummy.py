#from default_connection import DefaultConnection
import os,sys,inspect
##Esto sirve para poder usar import relativos
currentdir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parentdir = os.path.dirname(currentdir)
sys.path.insert(0,parentdir) 
## Este es el import parent
from default_connection import DefaultConnection
import psycopg2.extras
import sys
class Dummy:

    conexion = None

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
        except:
            print('Error obteniendo el cursor de dummy')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally: 
            pass		
            #cursor.close()
            #self.cerrarConexion()

    ############ crear examen ###############################
    def prueba(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            insert        = "SELECT * FROM USUARIO"
            cursor.execute(insert)
            filas = cursor.fetchall()			
            return filas
        except:
            print('Error EN LA PRUEBA DUMMY POSTGRE')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:
            cursor.close()
            self.cerrarConexion()
        return None

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()

if __name__ == '__main__':
    dum = Dummy()
    filas = dum.prueba()
    print(filas)

