from flask       import Flask,jsonify,json
import urllib3
import codecs
from facade_user import ClienteFacade
import sys

app = Flask(__name__)

@app.route('/login')
def login(_json_login):
    #http = urllib3.PoolManager()
    #r = http.request('GET', 'https://sports-itainment.biahosted.com/generic/prelive.aspx?token=246994625239791&clientTimeZoneOffset=300&lang=es-ES&walletcode=620917&betProduct=mixed&skinid=wplay&parentUrl=https%3A//wplay.co/apuestas#page=prelive')
    try:	
        facade = ClienteFacade()
        logueo = facade.logueo(_json_login)
        if logueo > 0:
            return "OK"
        else:
            return "FAIL"
    except:
        print "Error no controlado: {}".format(sys.exc_info()[0])

def registrarse(_json_registro):
    try:
        facade   = ClienteFacade()
        registro = facade.registro(_json_registro)
    except:

    
		
if __name__ == '__main__':
    app.run()


