from flask               import Flask,jsonify,json
from facade_user         import ClienteFacade
from facade_valoracion   import ValoracionFacade
from facade_agendamiento import AgendamientoFacade
from facade_trainer      import TrainerFacade
from facade_examen       import ExamenFacade
from facade_premios      import PremioFacade
import sys

###### Flask Object ######################################
app = Flask(__name__)

###### Constantes ##########
OK   = 'OK'
FAIL = 'FAIL'

#################### Usuario #############################
@app.route('/login')
def login(_json_login):    
    try:	
        facade = ClienteFacade()
        logueo = facade.logueo(_json_login)
        if logueo > 0:
            return OK
        else:
            return FAIL
    except:
        print("Error no controlado: {}".format(sys.exc_info()[0]))

@app.route('/registrarse')
def registrarse(_json_registro):
    try:
        facade   = ClienteFacade()
        registro = facade.registro(_json_registro)
        if(registro):
            return OK
        else:
            return FAIL
    except:
        print("Error no controlado: {}".format(sys.exc_info()[0]))

@app.route('/olvido_contrasena')
def olvido_contrasena(_json_olvido):
    try:
        facade = ClienteFacade()
        olvido = facade.olvido_contrasena(_json_olvido)
        if(olvido):
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

############# Valoraciones ################
@app.route('/valoracion_default')
def valoracion_default():
    try:
        facade = ValoracionFacade()
        valoracion = facade.valoracionDefault()
        return valoracion
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/valoracion_tipo')
def valoracion_tipo(_json_valoracion):
    try:
        facade = ValoracionFacade()
        valoracion = facade.valoracionTipo(_json_valoracion)
        return valoracion
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/asociar_respuesta_valoracion')
def valoracion_asociar_pregunta_respuesta(_json_asociacion):
    try:
        facade = ValoracionFacade()
        valoracion = facade.asociarRespuestaAPregunta(_json_asociacion)
        if valoracion:
           return OK
        else:
           return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))


################## Agendamientos #############
@app.route('/tipos_agendamiento_default')
def tipos_agendamiento():
    try:
        facade = AgendamientoFacade()
        tipos  = facade.tiposAgendamiento()
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/agendar')
def agendar(_json_agendar):
    try:
        facade   = AgendamientoFacade()
        agendar  = facade.agendar(_json_agendar)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

@app.route('/re_agendar')
def re_agendar(_json_re_agendar):
    try:
        facade   = AgendamientoFacade()
        agendar  = facade.re_agendar(_json_re_agendar)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

@app.route('/cancela_agenda')
def cancelar_agenda(_json_cancela_agenda):
    try:
        facade   = AgendamientoFacade()
        agendar  = facade.cancelar_agenda(_json_cancela_agenda)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

@app.route('/calificar_agenda_trainer')
def calificar_agenda_trainer(_json_califica_agenda):
    try:
        facade   = AgendamientoFacade()
        agendar  = facade.calificar_agenda_trainer(_json_califica_agenda)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

@app.route('/calificar_agenda_trainer')
def calificar_agenda_usuario(_json_califica_agenda_usuario):
    try:
        facade   = AgendamientoFacade()
        agendar  = facade.calificar_agenda_usuario(_json_califica_agenda_usuario)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

@app.route('/actualizar_costo')
def actualizar_costo(_json_actualiza_costo):
    try:
        facade   = AgendamientoFacade()
        agendar  = facade.actualizar_costo(_json_actualiza_costo)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

################# Premios ########################
@app.route('/premios_trainer')
def premios_trainer():
    try:
        facade   = PremioFacade()
        premios  = facade.premios_trainer()
        return premios
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/premios_usuario')
def premios_usuario():
    try:
        facade   = PremioFacade()
        premios  = facade.premios_usuario()
        return premios
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/asociar_trainer_premio')
def asociar_trainer_premio(_json_asociar_premio_trainer):
    try:
        facade   = PremioFacade()
        premios  = facade.asociar_trainer_premio(_json_asociar_premio_trainer)
        if premios:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))


@app.route('/asociar_usuario_premio')
def asociar_usuario_premio(_json_asociar_premio_usuario):
    try:
        facade   = PremioFacade()
        premios  = facade.asociar_usuario_premio(_json_asociar_premio_usuario)
        if premios:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

		
################# Examen ###########################
@app.route('/crear_examen')
def crear_examen():
    try:
        facade   = ExamenFacade()
        examen   = facade.crear_examen()
        if examen:
            return OK
        else:
            return FAIL
    except:
        print('Error no controlado: {}'.format(sys.exc_info()[0])))

@app.route('/tipos_examen')
def tipos_examen():
    try:
        facade   = ExamenFacade()
        tipos    = facade.tipos_examen()
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

################## Trainer ##############################
@app.route('/cualidad_trainer')
def cualidad_trainer(_json_cualidad_trainer):
    try:
        facade   = TrainerFacade()
        tipos    = facade.cualidad_trainer(_json_cualidad_trainer)
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/trainers')
def trainers():
    try:
        facade   = TrainerFacade()
        trainers = facade.trainers()
        return trainers
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/cualidades')
def trainers():
    try:
        facade        = TrainerFacade()
        cualidades    = facade.cualidades()
        return cualidades
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

@app.route('/actualizar_trainer')
def actualizar_trainer(_json_actualizar_campo_trainer):
    try:
        facade   = TrainerFacade()
        tipos    = facade.actualizar_trainer(_json_actualizar_campo_trainer)
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0])))

    return None

if __name__ == '__main__':
    app.run()