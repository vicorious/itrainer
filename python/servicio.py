from flask               import Flask,jsonify,json, request
from facade_user         import ClienteFacade
from facade_valoracion   import ValoracionFacade
from facade_agendamiento import AgendamientoFacade
from facade_trainer      import TrainerFacade
from facade_examen       import ExamenFacade
from facade_premios      import PremioFacade
from facade_calendario   import CalendarioFacade
import sys

###### Flask Object ######################################
app = Flask(__name__)

###### Constantes ##########
OK   = 'OK'
FAIL = 'FAIL'

#################### Usuario #############################
@app.route('/login', methods=['POST'])
def login():    
    try:
        _json_login = request.json	
        facade = ClienteFacade()
        logueo = facade.logueo(_json_login)
        if logueo > 0:
            return OK
        else:
            return FAIL
    except:
        print("Error no controlado: {}".format(sys.exc_info()[0]))

@app.route('/registrarse', methods=['POST'])
def registrarse():
    try:
        _json_registro = request.json
        facade   = ClienteFacade()
        registro = facade.registro(_json_registro)
        if(registro):
            return OK
        else:
            return FAIL
    except:
        print("Error no controlado: {}".format(sys.exc_info()[0]))

@app.route('/olvido_contrasena', methods=['POST'])
def olvido_contrasena():
    try:
        _json_olvido = request.json
        facade = ClienteFacade()
        olvido = facade.olvido_contrasena(_json_olvido)
        if(olvido):
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

############# Valoraciones ################
@app.route('/valoracion_default', methods=['GET'])
def valoracion_default():
    try:
        facade = ValoracionFacade()
        valoracion = facade.valoracionDefault()
        return valoracion
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/valoracion_tipo', methods=['POST'])
def valoracion_tipo():
    try:
        _json_valoracion = request.json
        facade = ValoracionFacade()
        valoracion = facade.valoracionTipo(_json_valoracion)
        return valoracion
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/asociar_respuesta_valoracion', methods=['POST'])
def valoracion_asociar_pregunta_respuesta():
    try:
        _json_asociacion = request.json
        facade = ValoracionFacade()
        valoracion = facade.asociarRespuestaAPregunta(_json_asociacion)
        if valoracion:
           return OK
        else:
           return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))


################## Agendamientos #############
@app.route('/tipos_agendamiento_default', methods=['GET'])
def tipos_agendamiento():
    try:
        facade = AgendamientoFacade()
        tipos  = facade.tiposAgendamiento()
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/agendar', methods=['POST'])
def agendar():
    try:
        _json_agendar = request.json
        facade   = AgendamientoFacade()
        agendar  = facade.agendar(_json_agendar)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

@app.route('/re_agendar', methods=['POST'])
def re_agendar():
    try:
        _json_re_agendar = request.json
        facade   = AgendamientoFacade()
        agendar  = facade.re_agendar(_json_re_agendar)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

@app.route('/cancela_agenda', methods=['POST'])
def cancelar_agenda():
    try:
        _json_cancela_agenda = request.json
        facade   = AgendamientoFacade()
        agendar  = facade.cancelar_agenda(_json_cancela_agenda)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

@app.route('/calificar_agenda_trainer', methods=['POST'])
def calificar_agenda_trainer():
    try:
        _json_califica_agenda = request.json
        facade   = AgendamientoFacade()
        agendar  = facade.calificar_agenda_trainer(_json_califica_agenda)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

@app.route('/calificar_agenda_usuario', methods=['POST'])
def calificar_agenda_usuario():
    try:
        _json_califica_agenda_usuario = request.json
        facade   = AgendamientoFacade()
        agendar  = facade.calificar_agenda_usuario(_json_califica_agenda_usuario)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

@app.route('/actualizar_costo', methods=['POST'])
def actualizar_costo():
    try:
        _json_actualiza_costo = request.json
        facade   = AgendamientoFacade()
        agendar  = facade.actualizar_costo(_json_actualiza_costo)
        if agendar:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

################# Premios ########################
@app.route('/premios_trainer', methods=['GET'])
def premios_trainer():
    try:
        facade   = PremioFacade()
        premios  = facade.premios_trainer()
        return premios
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/premios_usuario', methods=['GET'])
def premios_usuario():
    try:
        facade   = PremioFacade()
        premios  = facade.premios_usuario()
        return premios
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/asociar_trainer_premio', methods=['POST'])
def asociar_trainer_premio():
    try:
        _json_asociar_premio_trainer = request.json
        facade   = PremioFacade()
        premios  = facade.asociar_trainer_premio(_json_asociar_premio_trainer)
        if premios:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))


@app.route('/asociar_usuario_premio', methods=['POST'])
def asociar_usuario_premio():
    try:
        _json_asociar_premio_usuario = request.json
        facade   = PremioFacade()
        premios  = facade.asociar_usuario_premio(_json_asociar_premio_usuario)
        if premios:
            return OK
        else:
            return FAIL
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

		
################# Examen ###########################
@app.route('/crear_examen', methods=['POST'])
def crear_examen():
    try:
        _json_crear_examen = request.json
        facade             = ExamenFacade()
        examen             = facade.crear_examen(_json_crear_examen)
        if examen:
            return OK
        else:
            return FAIL
    except:
        print('Error no controlado: {}'.format(sys.exc_info()[0]))

@app.route('/tipos_examen', methods=['GET'])
def tipos_examen():
    try:
        facade   = ExamenFacade()
        tipos    = facade.tipos_examen()
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

################## Trainer ##############################
@app.route('/cualidad_trainer', methods=['POST'])
def cualidad_trainer():
    try:
        _json_cualidad_trainer = request.json
        facade   = TrainerFacade()
        tipos    = facade.cualidad_trainer(_json_cualidad_trainer)
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/trainers', methods=['GET'])
def trainers():
    try:
        facade   = TrainerFacade()
        trainers = facade.trainers()
        return trainers
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/cualidades', methods=['GET'])
def cualidades():
    try:
        facade        = TrainerFacade()
        cualidades    = facade.cualidades()
        return cualidades
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

@app.route('/actualizar_trainer', methods=['POST'])
def actualizar_trainer():
    try:
        _json_actualizar_campo_trainer = request.json
        facade   = TrainerFacade()
        tipos    = facade.actualizar_trainer(_json_actualizar_campo_trainer)
        return tipos
    except:
        print("Error con controlado: {}".format(sys.exc_info()[0]))

    return None

########### Proveedores ###############
@app.route('/proveedor_usuario', methods=['POST'])
def proveedor_usuario():
    try:
        _json_proveedor = request.json
        facade          = PremioFacade()
        proveedor       = facade.proveedor_usuario_inscripcion(_json_proveedor)
        if proveedor:
            return OK
        else:
            return FAIL
    except:
        print('Error no controlado: {}'.format(sys.exc_info()[0]))

@app.route('/proveedor_trainer', methods=['POST'])
def proveedor_trainer():
    try:
        _json_proveedor = request.json
        facade          = PremioFacade()
        proveedor       = facade.proveedor_trainer_inscripcion(_json_proveedor)
        if proveedor:
            return OK
        else:
            return FAIL
    except:
        print('Error no controlado: {}'.format(sys.exc_info()[0]))

@app.route('/asociar_premio_usuario', methods=['POST'])
def asociar_premio_proveedor_usuario():
    try:
        _json_proveedor = request.json
        facade          = PremioFacade()
        proveedor       = facade.asociar_premio_proveedor_usuario(_json_proveedor)
        if proveedor:
            return OK
        else:
            return FAIL
    except:
        print('Error no controlado: {}'.format(sys.exc_info()[0]))


@app.route('/asociar_premio_trainer', methods=['POST'])
def asociar_premio_proveedor_trainer():
    try:
        _json_proveedor = request.json
        facade          = PremioFacade()
        proveedor       = facade.asociar_premio_proveedor_trainer(_json_proveedor)
        if proveedor:
            return OK
        else:
            return FAIL
    except:
        print('Error no controlado: {}'.format(sys.exc_info()[0]))

@app.route('/calendario_actual', methods=['GET'])
def calendario_actual():
    try:        
        facade          = CalendarioFacade()
        calendario      = facade.calendario_actual()
        return calendario
    except:
        print('Error no controlado: {}'.format(sys.exc_info()[0]))    
####### Main ############
if __name__ == '__main__':
    app.run()
