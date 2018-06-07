from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras

class CalendarioFacade:

     ## Tipo valoracion = 1 es el tipo de valoracion default (Valoracion para todos los usuarios)
    SQL_CALENDARIO_ACTUAL = "SELECT ID, ANO, MES, DIA_INICIO, NUMERO_DIAS FROM CALENDARIO WHERE ANO = '{}'"

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
    def calendario_actual(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            cursor.execute(SQL_CALENDARIO_ACTUAL.format('2018'))   
            filas = cursor.fetchall()
            return filas
        except:
            print('Error obteniendo la valoracion default')
            raise Exception('Error no controlado: {}'.format(sys.exc_info()[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None                      

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()
                