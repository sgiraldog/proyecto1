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


#### Datos arduíno:

##### Crear registro:
Objetivo: Agregar un nuevo registro de sensores a la base de datos.
Parámetros: Temperatura, Humedad, apiKey, gps(lat,long).
Respuesta: Objeto tipo registro o mensaje de error.

##### Listar registros por usuario:
Objetivo: Ver todos los registros asociados a un usuario.
Parámetros: Id del usuario.
Respuesta: Lista de objetos tipo registro o mensaje de error.

### ¿Cómo realizó la autenticación de los servicios API REST?



