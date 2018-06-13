import psycopg2
import logging

class PostgreConnect:
    password = ''
    user     = ''
    ip       = ''
    port     = ''
    db       = ''
    cadena   = ''

    logging.basicConfig(filename="test.log", level=logging.DEBUG)
    
    def __init__(self, db, port, ip, user, password):
        self.password = password
        self.user     = user
        self.ip       = ip
        self.port     = port
        self.db       = db

    def conectar(self):
        cadena = "host='{}' dbname='{}' user='{}' password='{}'".format(self.ip, self.db, self.user, self.password)
        logging.debug('La cadena de conexion es: {}'.format(cadena))
        conexion = psycopg2.connect(cadena) 
        logging.debug('Conexion correcta')		
        return conexion