<h1>Examen 6: Testing</h1>
<p>Módulo 6: Backend con Node y Express (68) > Prueba - Cafeteria Nanacao<br><br></p>

## Instrucciones para el usuario
1. Descargar el archivo presionando el botón verde que indica "Code", y luego seleccionar **Download ZIP**.
2. Descomprimir el archivo `examen6-main.zip` en un directorio deseado.
3. Abrir la carpeta descomprimida en **Visual Studio Code**.
4. Abrir una terminal (preferiblemente bash).
5. Escribir el comando `npm install` y ejecutar para instalar las dependencias.
6. Escribir el comando `npm run test` y ejecutar para correr los tests.

## Contexto
Se tiene una **API REST** que gestiona los datos de los productos disponibles en la Cafetería Nanacao, como sus distintos tipos de café. A través de pruebas automáticas, se busca garantizar que las operaciones CRUD (consultas, creaciones, modificaciones y eliminaciones de datos) funcionen correctamente.

### Objetivo
El objetivo es implementar pruebas automáticas para verificar:
1. Que la API REST responde correctamente a cada solicitud.
2. Que los errores se manejan de forma adecuada.
3. Que las operaciones CRUD se procesen correctamente.

### ¿Cómo saber que todo funciona correctamente?
Para esto, el proyecto incluye una suite de pruebas con **Jest** y **Supertest** que:
- Ejecuta simulaciones reales de peticiones HTTP a las rutas de la API.
- Verifica los códigos de estado (`statusCode`) y las respuestas de la API.
- Detecta errores en la lógica o el flujo del servidor.

Al ejecutar los tests (`npm run test`), se obtendrá un reporte indicando cuántos tests fueron aprobados o fallaron. Si todos los tests son aprobados, el sistema garantiza que cumple los requerimientos.

## Pruebas realizadas
Este desafío valida cuatro casos importantes de la API REST y asegura que los códigos de estado HTTP sean coherentes con las acciones realizadas. A continuación, se explican los tests junto con los códigos de estado esperados:

1. **GET /cafes**:
   - **Descripción**: Esta ruta devuelve un listado de los cafés disponibles.
   - **Código de estado esperado**: `200 OK` - Indica que la solicitud fue exitosa y el servidor devolvió la lista de cafés.
   - **Validación**:
     - La respuesta contiene un array.
     - El array incluye al menos un objeto.

2. **DELETE /cafes/:id**:
   - **Descripción**: Permite eliminar un café por su ID.
   - **Código de estado esperado**: `404 Not Found` - Indica que no se encontró un café con el ID proporcionado.
   - **Validación**:
     - El servidor responde con el código `404` si se intenta eliminar un café inexistente.
     - Se verifica que el mensaje de error sea claro.

3. **POST /cafes**:
   - **Descripción**: Permite agregar un nuevo café al listado.
   - **Código de estado esperado**: `201 Created` - Indica que el nuevo recurso (café) fue creado exitosamente.
   - **Validación**:
     - La respuesta incluye el café recién agregado.
     - Se verifica que el código de estado sea `201`.

4. **PUT /cafes/:id**:
   - **Descripción**: Permite actualizar un café existente.
   - **Código de estado esperado**: `400 Bad Request` - Indica que la solicitud es inválida porque el ID en los parámetros no coincide con el del payload.
   - **Validación**:
     - La respuesta incluye un mensaje indicando la inconsistencia de los IDs.
     - Se verifica que el código de estado sea `400`.

## Créditos
Desarrollado por Joaquín López Rojas para Desafío Latam, FullStack Javascript, Generación 68.
Saludos cordiales.
