import psycopg2

class PostgreConnect:
    password = ''
    user     = ''
    ip       = ''
    port     = ''
    db       = ''
    cadena   = ''
    
    def __init__(self, db, port, ip, user, password):
        self.password = password
        self.user     = user
        self.ip       = ip
        self.port     = port
        self.db       = db

    def conectar(self):
        cadena = "host='{}' dbname='{}' user='{}' password='{}'".format(self.ip, self.db, self.user, self.password)
        print('La cadena de conexion es: {}'.format(cadena))
        conexion = psycopg2.connect(cadena)        
        return conexion