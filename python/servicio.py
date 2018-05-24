from flask       import Flask,jsonify,json
from facade_user import ClienteFacade
import sys

app = Flask(__name__)

@app.route('/login')
def login(_json_login):    
    try:	
        facade = ClienteFacade()
        logueo = facade.logueo(_json_login)
        if logueo > 0:
            return "OK"
        else:
            return "FAIL"
    except:
        print("Error no controlado: {}".format(sys.exc_info()[0]))

@app.route('/registrarse')
def registrarse(_json_registro):
    try:
        facade   = ClienteFacade()
        registro = facade.registro(_json_registro)
        if(registro):
            return "OK"
        else:
            return "FAIL"
    except:
        print("Error no controlado: {}".format(sys.exc_info()[0]))

@app.route('/olvido_contrasena')
def olvido_contrasena(_json_olvido):
    try:
        facade = ClienteFacade()
        olvido = facade.olvido_contrasena(_json_olvido)
        if(olvido):
            return "OK"
        else:
            return "FAIL"
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))
		
if __name__ == '__main__':
    app.run()


