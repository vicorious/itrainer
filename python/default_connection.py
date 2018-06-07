from postgre_connect    import PostgreConnect
from constante          import Constante

class DefaultConnection:

    def __init__(self):
        pass

    def postgre_connect(self):
        usuario  = Constante.user_default
        ip       = Constante.ip_default
        port     = Constante.port_default
        db       = Constante.db_default
        password = Constante.password_default
        postgre  = PostgreConnect(db, port, ip, usuario, password)    
        return postgre.conectar()