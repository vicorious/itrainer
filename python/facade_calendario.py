from default_connection import DefaultConnection
import json
import sys
import psycopg2.extras
import logging

class CalendarioFacade:

     ## Tipo valoracion = 1 es el tipo de valoracion default (Valoracion para todos los usuarios)
    SQL_CALENDARIO_ACTUAL = "SELECT ID, ANO, MES, DIA_INICIO, NUMERO_DIAS FROM CALENDARIO WHERE ANO = '{}'"

    conexion = None

    logging.basicConfig(filename="test.log", level=logging.DEBUG)

     ################## Constructor ####################
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
            logging.debug('Error obteniendo el cursor facade valoracion')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            pass

    ############ valoracion ####################### 
    def calendario_actual(self):
        try:        
            #Conexion a postgre            
            cursor    = self.getCursor()
            #####
            cursor.execute(self.SQL_CALENDARIO_ACTUAL.format('2018'))   
            filas = cursor.fetchall()
            return filas
        except Exception as e:
            logging.debug('Error obteniendo la valoracion default')
            raise Exception('Error no controlado: {}'.format(e.args[0]))			
        finally:            
            cursor.close()
            self.cerrarConexion()
        return None                      

    ########## Cerrar conexion ###################
    def cerrarConexion(self):
         self.conexion.close()
                