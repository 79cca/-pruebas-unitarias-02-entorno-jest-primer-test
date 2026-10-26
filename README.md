# 02 Entorno, Jest y primer test

Sigue las instrucciones delineadas en el [documento de la lección](https://hub.hybridge.education/doc/2-entorno-jest-y-primer-test-unitario-Vq9XIyWdew). Deberás crear los archivos necesarios y escribir la prueba unitaria que pruebe el endpoint `/tareas`.

Al terminar, toma una captura de pantalla de tu terminal con el resultado de la ejecución. Finalmente, sube tus cambios a tu repositorio de Github.
---

# Desarrollo de la actividad 02

## 1. Objetivo

Configurar un entorno de desarrollo con TypeScript, Express, Jest y Supertest para crear y probar automáticamente el endpoint `GET /tareas`.

## 2. Tecnologías utilizadas

- Node.js y npm
- TypeScript
- Express
- Jest
- Supertest
- Git y GitHub
- Visual Studio Code

## 3. Estructura del proyecto

```text
02_primer_test/
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── controllers/
│   │   └── tareas.controller.ts
│   └── routes/
│       └── tareas.routes.ts
├── tests/
│   └── tareas.test.ts
├── jest.config.js
├── tsconfig.json
└── package.json
```

## 4. Procedimiento realizado

### Configuración inicial

1. Clonamos el repositorio de GitHub.
2. Creamos la carpeta `02_primer_test`.
3. Inicializamos el proyecto mediante `npm init -y`.
4. Instalamos las dependencias necesarias.
5. Configuramos TypeScript y Jest.

### Desarrollo de la API

Creamos un controlador que devuelve un arreglo de tareas.

Cada tarea contiene las propiedades:

- `id`: identificador.
- `titulo`: nombre de la tarea.
- `descripcion`: explicación de la actividad.
- `completada`: estado de la tarea.

Configuramos la ruta `GET /tareas` utilizando Express.

### Primera prueba automatizada

Creamos el archivo `tests/tareas.test.ts` utilizando Jest y Supertest.

La prueba verifica que:

1. El servidor responda con el código HTTP 200.
2. La respuesta sea un arreglo.
3. El arreglo contenga al menos una tarea.
4. La tarea tenga las propiedades `titulo`, `completada` y `descripcion`.

### Prueba de fallo intencional

Inicialmente, la prueba se ejecutó correctamente.

Después agregamos una comprobación para verificar la propiedad `descripcion`, que todavía no existía en el controlador.

Jest detectó el problema y mostró el resultado `FAIL`.

### Corrección del error

Agregamos la propiedad `descripcion` a los objetos del controlador.

Ejecutamos nuevamente las pruebas y obtuvimos `PASS`.

## 5. Problemas encontrados

### Incompatibilidad de TypeScript

Encontramos una incompatibilidad entre la versión inicial de TypeScript y `ts-jest`.

**Solución:** instalamos TypeScript 5.9.3.

### Error al introducir JSON

Intentamos ejecutar un ejemplo JSON directamente en la terminal.

**Solución:** identificamos que JSON representa datos y no necesariamente comandos ejecutables.

### Prueba fallida

Jest detectó que faltaba la propiedad `descripcion`.

**Solución:** modificamos el controlador para cumplir el requisito.

## 6. Resultados

Comando utilizado:

```bash
npm test
```

Resultado final:

```text
PASS tests/tareas.test.ts

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Time:        0.629 s
```

El ciclo de pruebas realizado fue:

**PASS → FAIL → CORRECCIÓN → PASS**

## 7. Conclusión

Durante esta actividad aprendi a configurar un entorno de pruebas automatizadas con Jest y Supertest.

Comprendi cómo verificar el funcionamiento de una API, detectar errores y comprobar que las modificaciones cumplen los requisitos establecidos.

También pracque el uso de Git y GitHub para respaldar  trabajo.

La actividad demuestra que las pruebas automatizadas ayudan a mejorar la confiabilidad del software y facilitan la detección de problemas durante el desarrollo.