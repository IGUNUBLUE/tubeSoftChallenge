# Tubesoft Challenge
Challenge to Tubesoft.
## Version
- 0.0.1
# Instrucciones
### Base de datos:
#### Local:
- Paso 1: Usar el archivo "docker-compose.yml" ubicado en la carpeta docker/postgres para construir el docker con postgres. Puede usar desde la terminal el command:
##### ⚠️ Debe tener instalado docker y docker-compose
```terminal
$ docker-compose up
```
- Paso 2: Renombrar el .env.example a .env y agregar los datos necesarios para la conexión con postgres. A continuación los datos por defecto:
```terminar
	- DB_USER=postgres
	- DB_PASSWORD=12345
	- DB_NAME=cart_tubesoft ⚠️ Se debe crear la base de datos en postgres y después proporcionar el nombre
	- DB_HOST=localhost
	- DB_PORT=5432
```
- paso 3: Una ves postres sea configurado puede ejecutar los scripts a continuación desde la raíz de proyecto:
##### Instalar todas las dependencias
```terminal
$ yarn install 
```
##### Iniciar el cliente (frontend) y el servidor (backend)
```terminal
$ yarn start:dev 
```
##### Iniciar solo el servidor
```terminal
$ yarn start:server 
```
##### Iniciar solo el cliente
```terminal
$ yarn start:client 
```
##### compilar el proyecto para producción
```terminal
$ yarn build
```
##### Agregar datos de prueba
```terminal
$ yarn add-demos 
```
##### Remover datos de prueba
```terminal
$ yarn remove-demos 
```
- Paso 4 Iniciar sesión:
⚠️  No hay un flujo que permita agregar usuarios. Los usuarios para iniciar sesión se crearan al usar los seeders, al igual que los productos (datos de prueba)
```terminal
	- email: "jhon.doe@challenge.tubesoft"
		password: "1a2b3c"
	
	- email: "tomas.morales@challenge.tubesoft"
		password: "1122aabb"

	- email: "lenin.doe@challenge.tubesoft"
		password: "1a2b3c"
```



