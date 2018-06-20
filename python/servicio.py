from flask               import Flask,jsonify,json, request
from flask_api           import status
from facade_user         import ClienteFacade
from facade_valoracion   import ValoracionFacade
from facade_agendamiento import AgendamientoFacade
from facade_trainer      import TrainerFacade
from facade_examen       import ExamenFacade
from facade_premios      import PremioFacade
from facade_calendario   import CalendarioFacade
import sys
import logging

###### Flask Object ######################################
app = Flask(__name__)

###### Constantes ##########
OK   = 'OK'
FAIL = 'FAIL'

###### Log #################

logging.basicConfig(filename="test.log", level=logging.DEBUG)

#################### Usuario #############################
@app.route('/login', methods=['POST'])
def login():    
    try:
        _json_login = request.get_json()
        logging.debug(_json_login)
        facade = ClienteFacade()
        logueo = facade.logueo(_json_login)
        if logueo > 0:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/registrarse', methods=['POST'])
def registrarse():
    try:
        _json_registro = request.get_json()
        facade   = ClienteFacade()
        registro = facade.registrarme(_json_registro)
        if(registro):
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/olvido_contrasena', methods=['POST'])
def olvido_contrasena():
    try:
        _json_olvido = request.get_json()
        facade = ClienteFacade()
        olvido = facade.olvido_contrasena(_json_olvido)
        if(olvido):
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

############# Valoraciones ################
@app.route('/valoracion_default', methods=['GET'])
def valoracion_default():
    try:
        facade = ValoracionFacade()
        valoracion = facade.valoracionDefault()
        if len(valoracion) > 0:
            return jsonify(valoracion)
        else:
            return jsonify(valoracion), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/valoracion_tipo', methods=['POST'])
def valoracion_tipo():
    try:
        _json_valoracion = request.get_json()
        facade = ValoracionFacade()
        valoracion = facade.valoracionTipo(_json_valoracion)
        if len(valoracion) > 0:
            return jsonify(valoracion)
        else:
            return jsonify(valoracion), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/asociar_respuesta_valoracion', methods=['POST'])
def valoracion_asociar_pregunta_respuesta():
    try:
        _json_asociacion = request.get_json()
        facade = ValoracionFacade()
        valoracion = facade.asociarRespuestaAPregunta(_json_asociacion)
        if valoracion:
           return jsonify(OK)
        else:
           return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT


################## Agendamientos #############
@app.route('/tipos_agendamiento_default', methods=['GET'])
def tipos_agendamiento():
    try:
        facade = AgendamientoFacade()
        tipos  = facade.tiposAgendamiento()
        if len(tipos) > 0:
            return jsonify(tipos)
        else:
            return jsonify(tipos), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/agendar', methods=['POST'])
def agendar():
    try:
        _json_agendar = request.get_json()
        facade   = AgendamientoFacade()
        agendar  = facade.agendar(_json_agendar)
        if agendar:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/re_agendar', methods=['POST'])
def re_agendar():
    try:
        _json_re_agendar = request.get_json()
        facade   = AgendamientoFacade()
        agendar  = facade.re_agendar(_json_re_agendar)
        if agendar:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/cancela_agenda', methods=['POST'])
def cancelar_agenda():
    try:
        _json_cancela_agenda = request.get_json()
        facade   = AgendamientoFacade()
        agendar  = facade.cancelar_agenda(_json_cancela_agenda)
        if agendar:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/calificar_agenda_trainer', methods=['POST'])
def calificar_agenda_trainer():
    try:
        _json_califica_agenda = request.get_json()
        facade   = AgendamientoFacade()
        agendar  = facade.calificar_agenda_trainer(_json_califica_agenda)
        if agendar:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/calificar_agenda_usuario', methods=['POST'])
def calificar_agenda_usuario():
    try:
        _json_califica_agenda_usuario = request.get_json()
        facade   = AgendamientoFacade()
        agendar  = facade.calificar_agenda_usuario(_json_califica_agenda_usuario)
        if agendar:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/actualizar_costo', methods=['POST'])
def actualizar_costo():
    try:
        _json_actualiza_costo = request.get_json()
        facade   = AgendamientoFacade()
        agendar  = facade.actualizar_costo(_json_actualiza_costo)
        if agendar:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

################# Premios ########################
@app.route('/premios_trainer', methods=['GET'])
def premios_trainer():
    try:
        facade   = PremioFacade()
        premios  = facade.premios_trainer()
        if len(premios) > 0:
            return jsonify(premios)
        else:
            return jsonify(premios), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/premios_usuario', methods=['GET'])
def premios_usuario():
    try:
        facade   = PremioFacade()
        premios  = facade.premios_usuario()
        if len(premios) > 0:
            return jsonify(premios)
        else:
            return jsonify(premios), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/asociar_trainer_premio', methods=['POST'])
def asociar_trainer_premio():
    try:
        _json_asociar_premio_trainer = request.get_json()
        facade   = PremioFacade()
        premios  = facade.asociar_trainer_premio(_json_asociar_premio_trainer)
        if premios:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT


@app.route('/asociar_usuario_premio', methods=['POST'])
def asociar_usuario_premio():
    try:
        _json_asociar_premio_usuario = request.get_json()
        facade   = PremioFacade()
        premios  = facade.asociar_usuario_premio(_json_asociar_premio_usuario)
        if premios:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

		
################# Examen ###########################
@app.route('/crear_examen', methods=['POST'])
def crear_examen():
    try:
        _json_crear_examen = request.get_json()
        facade             = ExamenFacade()
        examen             = facade.crear_examen(_json_crear_examen)
        if examen:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug('Error no controlado: {}'.format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/tipos_examen', methods=['GET'])
def tipos_examen():
    try:
        facade   = ExamenFacade()
        tipos    = facade.tipos_examen()
        if len(tipos) > 0:
            return jsonify(tipos)
        else:
            return jsonify(tipos), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

################## Trainer ##############################
@app.route('/cualidad_trainer', methods=['POST'])
def cualidad_trainer():
    try:
        _json_cualidad_trainer = request.get_json()
        facade   = TrainerFacade()
        tipos    = facade.cualidad_trainer(_json_cualidad_trainer)
        if len(tipos) > 0:
            return jsonify(tipos)
        else:
            return jsonify(tipos), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/trainers', methods=['GET'])
def trainers():
    try:
        facade   = TrainerFacade()
        trainers = facade.trainers()
        if len(trainers) > 0:
            return jsonify(trainers)
        else:
            return jsonify(trainers), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado trainers: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/cualidades', methods=['GET'])
def cualidades():
    try:
        facade        = TrainerFacade()
        cualidades    = facade.cualidades()
        if len(cualidades) > 0:
            return jsonify(cualidades)
        else:
            return jsonify(cualidades), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/actualizar_trainer', methods=['POST'])
def actualizar_trainer():
    try:
        _json_actualizar_campo_trainer = request.get_json()
        facade   = TrainerFacade()
        tipos    = facade.actualizar_trainer(_json_actualizar_campo_trainer)
        if tipos:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug("Error no controlado: {}".format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

########### Proveedores ###############
@app.route('/proveedor_usuario', methods=['POST'])
def proveedor_usuario():
    try:
        _json_proveedor = request.get_json()
        facade          = PremioFacade()
        proveedor       = facade.proveedor_usuario_inscripcion(_json_proveedor)
        if proveedor:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug('Error no controlado: {}'.format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/proveedor_trainer', methods=['POST'])
def proveedor_trainer():
    try:
        _json_proveedor = request.get_json()
        facade          = PremioFacade()
        proveedor       = facade.proveedor_trainer_inscripcion(_json_proveedor)
        if proveedor:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug('Error no controlado: {}'.format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/asociar_premio_proveedor_usuario', methods=['POST'])
def asociar_premio_proveedor_usuario():
    try:
        _json_proveedor = request.get_json()
        facade          = PremioFacade()
        proveedor       = facade.asociar_premio_proveedor_usuario(_json_proveedor)
        if proveedor:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug('Error no controlado: {}'.format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT


@app.route('/asociar_premio_proveedor_trainer', methods=['POST'])
def asociar_premio_proveedor_trainer():
    try:
        _json_proveedor = request.get_json()
        facade          = PremioFacade()
        proveedor       = facade.asociar_premio_proveedor_trainer(_json_proveedor)
        if proveedor:
            return jsonify(OK)
        else:
            return jsonify(FAIL), status.HTTP_409_CONFLICT
    except Exception as e:
        logging.debug('Error no controlado: {}'.format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT

@app.route('/calendario_actual', methods=['GET'])
def calendario_actual():
    try:        
        facade          = CalendarioFacade()
        calendario      = facade.calendario_actual()
        if len(calendario) > 0:
            return jsonify(calendario)
        else:
            return jsonify(calendario), status.HTTP_204_NO_CONTENT
    except Exception as e:
        logging.debug('Error no controlado: {}'.format(e))
    return jsonify(FAIL), status.HTTP_409_CONFLICT
####### Main ############
if __name__ == '__main__':
    app.run()
