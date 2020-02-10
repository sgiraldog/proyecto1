# Proyecto 1 - Tópicos Especiales en Telemática

#### Realizado por: Sebastián Giraldo Gómez
#### Código: 201710025010
#### Correo: sgiraldog@eafit.edu.co


## Preguntas:

### ¿Qué tecnología de desarrollo utilizó?

#### Backend
Express: framework de desarrollo web para Node.js.

#### Frontend
Angular: framework de desarrollo web basado en TypeScript.

### Modelo de datos:

Usuario: Id, email, nombre, contraseña, apiKey.

Registro: Id, temperatura, humedad, gps(lat,long), userId, apiKey, timestamp.

### ¿Cuáles son y cuál es la específicación de los servicios API REST del backend?

#### Autenticación:

##### Login:
Objetivo: Verificar que el usuario exista en la base de datos y sus credenciales estén correctas.
Parámetros: Email y contraseña.
Respuesta: UserId y token o mensaje de error.

##### Registro:
Objetivo: Registrar un usuario en la base de datos.
Parámetros: Email, nombre y contraseña.
Respuesta: Mensaje de éxito o error.


#### Datos sensores:

##### Crear registro:
Objetivo: Agregar un nuevo registro de sensores a la base de datos.
Parámetros: Temperatura, Humedad, apiKey, gps(lat,long).
Respuesta: Objeto tipo registro o mensaje de error.

##### Listar registros por usuario:
Objetivo: Ver todos los registros asociados a un usuario.
Parámetros: Id del usuario.
Respuesta: Lista de objetos tipo registro o mensaje de error.


### ¿Cómo realizó la autenticación de los servicios API REST?
En este proyecto se usó JWT(JSON Web Token) con el objetivo de facilitar la creación de token de sesión y la apiKey.

Para la app web:

El endpoint de login genera un token y un tiempo de vida los cuales son almacenados localmente por la aplicación web y los utiliza para dos validaciones principales:

-Revisar si la sesión aún está activa usando la librería "moment" para verificar el tiempo de vida del token.

-Enviar el token a los endpoints que los requiera para su autenticación.

Para los endpoints:

Para autenticar los endpoint se agregó la necesidad de enviar un header llamado token, en el cual va el token generado por JWT en el endpoint de login, el backend hace la validación de que el token sea valido y aún tenga un tiempo de vida que le permita trabajar.


Para el arduino:

Para autenticar el arduino el backend genera un token en el registro del usuario, el cual debe ser ingresado como parámetro apiKey en el endpoint de crear registro de sensores. Una vez el backend recibe el apiKey, verifica que esté asociado a un usuario para permitir así guardar los valores del sensor.





