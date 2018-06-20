# Itrainer

### Aplicacion encargada de generar agendamiento a *Personal Trainer*

## Tecnologias:

1. Typescript 2.5.3
2. Angular CLI 1.7.4
3. Angular 5.2.11
4. CSS3
5. HTML5
6. Bootstrap
7. Font-awesome
8. JQuery
9. Glyphicon
10. Python 3.5.1

### Algunos pantallazos


Login: 
> ![SPL Pruebas](/raw/images/login.PNG)

Valoracion 1: 
> ![SPL Pruebas](/raw/images/valoracion1.PNG)

Valoracion 2: 
> ![SPL Pruebas](/raw/images/valoracion2.PNG)

Valoracion 3: 
> ![SPL Pruebas](/raw/images/valoracion3.PNG)

Retroalimentacion: 
> ![SPL Pruebas](/raw/images/retroalimentacion.PNG)

Animaciones
---
Agendar: 
> ![SPL Pruebas](/raw/gifs/agendar.gif)

Perfil: 
> ![SPL Pruebas](/raw/gifs/perfil.gif)

Flujo agendar: 
> ![SPL Pruebas](/raw/gifs/flujo-agendar.gif)


# Arquitectura

Tiene 3 componentes principales (Front, Back y DB):

1. Front:

    * Construido con HTML5 - CSS3 - Typescript y Javascript.

2. Back:

    * Todo el back se encuentra construido en Python (3.5.1)

3. DB:

    * Elegimos una base de datos Open Source y robusta como lo es PostgreSQL (9.6)
	
# Instalacion

1. Para poder ejecutar nuestra APP correctamente (La parte Front), Debemos:

   * Instalar NODE [Node](https://nodejs.org/es/)
   * Agregar a variables de entorno _NG_
   * Ir a la raiz del proyecto descargado y ejecutar(*npm install*). para poder usar los modulos incluidos en la APP
   * Si no hay ningun problema, vamos a arrancar la app (*npm start*) Arranca en *http://localhost:4200*

2. Para instalar la parte de los servicio (Python), Debemos:

   * Descargar la carpeta con nombre _Python_
   * Donde vas a guardar tu proyecto, guarda la carpeta python, y dentro de ella ejecuta ```python virtualenv venv ```
   * Entrar a la carpeta (_venv_) y buscar la subcarpeta /_Scripts_/_activate.bat_ (Ejecutar el activate.bat)
   * Luego volvemos a la carpeta _Python_ y ejecutamos el comando 
   ```python
   pip install -r requirements.txt
   ```
   * Cuando termine de instalar las librerias, vamos al archivo _servicio.py_ de la carpeta _Python_ y lo ejecutamos
   * Escucha por el puerto _5000_ y la URL es _localhost_ (http://localhost:5000)
   

# Insomnia Test
* Para instalar las pruebas unitarias a los servicios python (Despues de realizar los pasos anteriores), completa las siguientes instrucciones:
1. > ![Primer paso](/raw/images/insomnia_1.PNG)
2. > ![Primer paso](/raw/images/insomnia_2.PNG)
3. > ![Primer paso](/raw/images/insomnia_3.PNG)
4. > ![Primer paso](/raw/images/insomnia_4.PNG)
