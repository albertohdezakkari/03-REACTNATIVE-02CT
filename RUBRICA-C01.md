# RÚBRICA C01 · NESTJS + REACT NATIVE · CONEXIÓN API

**Repositorio docente auditado:** `03-REACTNATIVE-02CT`  
**Fuente del enunciado:** web del cuaderno `index.html` / GitHub Pages.  
**Puntuación máxima:** 108 puntos.

## Principios de corrección

- Se corrige el trabajo real entregado, no la coincidencia literal con la solución de referencia.
- Se aceptan soluciones técnicamente equivalentes.
- No se penaliza dos veces el mismo error.
- Si una evidencia no puede verificarse desde el repositorio: **NO VERIFICABLE**.
- `node_modules` no forma parte de la entrega.
- Los ejercicios son islas: deben poder comprenderse y corregirse por separado.

| Ejercicio | Directorio | Criterio | Puntos | Evidencia |
|---|---|---|---:|---|
| GLOBAL | `/` | Repositorio contiene EJERCICIO-01 a EJERCICIO-12 con nomenclatura exacta; cada ejercicio es una isla independiente y contiene README.md. | 8 | ESTRUCTURA |
| 01 | `EJERCICIO-01/backend` | Endpoint GET /hola implementado mediante Controller y respuesta JSON coherente; modificación propia incluida. | 5 | CODIGO |
| 02 | `EJERCICIO-02/backend` | Controller delega en Service y Service mantiene un array temporal de pizzas con al menos tres elementos y los devuelve. | 6 | CODIGO |
| 03 | `EJERCICIO-03/backend` | GET /mascotas/:id usa Path Param y el Service localiza una mascota del array por id. | 6 | CODIGO |
| 04 | `EJERCICIO-04/backend` | GET /juegos admite Query Param genero y devuelve todos los juegos o una colección filtrada. | 6 | CODIGO |
| 05 | `EJERCICIO-05` | Primera conexión Full Stack: backend GET /mensaje, CORS habilitado y App.tsx realiza fetch mediante API_URL basada en IP local. | 8 | CODIGO |
| 06 | `EJERCICIO-06/frontend` | La respuesta del backend se conserva en estado con useState y se muestra/actualiza en la interfaz. | 7 | CODIGO |
| 07 | `EJERCICIO-07/frontend` | Carga automática inicial mediante useEffect y posibilidad coherente de recarga. | 7 | CODIGO |
| 08 | `EJERCICIO-08` | Backend devuelve array de productos y React Native lo representa mediante FlatList con identidad estable y contenido visible. | 8 | CODIGO |
| 09 | `EJERCICIO-09` | El frontend construye una URL dinámica con un id y el backend recibe ese valor como Path Param para devolver un héroe concreto. | 7 | CODIGO |
| 10 | `EJERCICIO-10` | PATCH modifica likes de una mascota en el array temporal y el frontend refleja el valor actualizado. | 8 | CODIGO |
| 11 | `EJERCICIO-11` | POST crea un producto a partir de datos enviados en el body y el frontend envía JSON desde un formulario sencillo. | 8 | CODIGO |
| 12 | `EJERCICIO-12` | Miniapp final integra listado, selección/búsqueda por id y likes conectando React Native con Controller + Service. | 10 | CODIGO |
| GLOBAL | `EJERCICIO-01..12/README.md` | Documentación breve por ejercicio: qué he aprendido, respuesta de comprensión, qué he modificado y resultado. | 8 | DOCUMENTACION |
| GLOBAL | `EJERCICIO-05..12` | Configuración Full Stack coherente: main.ts/CORS, API_URL con IP local configurable, package.json del frontend compatible con SafeAreaView cuando se utiliza. | 6 | CODIGO |

## Condiciones detalladas

### C01 · GLOBAL · 8 puntos
- **Directorio:** `/`
- **Tipo:** ESTRUCTURA
- **Criterio:** Repositorio contiene EJERCICIO-01 a EJERCICIO-12 con nomenclatura exacta; cada ejercicio es una isla independiente y contiene README.md.
- **Condiciones de verificación:** Existen las 12 carpetas exactas y su README. E01-E04 contienen backend/. E05-E12 contienen backend/ y frontend/. No se exige node_modules.

### C02 · 01 · 5 puntos
- **Directorio:** `EJERCICIO-01/backend`
- **Tipo:** CODIGO
- **Criterio:** Endpoint GET /hola implementado mediante Controller y respuesta JSON coherente; modificación propia incluida.
- **Condiciones de verificación:** Controller Nest válido con ruta /hola y GET. Devuelve objeto JSON con mensaje; se acepta texto equivalente. Debe evidenciar la modificación solicitada.

### C03 · 02 · 6 puntos
- **Directorio:** `EJERCICIO-02/backend`
- **Tipo:** CODIGO
- **Criterio:** Controller delega en Service y Service mantiene un array temporal de pizzas con al menos tres elementos y los devuelve.
- **Condiciones de verificación:** Separación Controller/Service funcional. GET /pizzas obtiene la colección. Aceptar nombres/datos equivalentes y estructura interna válida.

### C04 · 03 · 6 puntos
- **Directorio:** `EJERCICIO-03/backend`
- **Tipo:** CODIGO
- **Criterio:** GET /mascotas/:id usa Path Param y el Service localiza una mascota del array por id.
- **Condiciones de verificación:** Ruta dinámica funcional, recuperación de id y búsqueda equivalente a find. Debe manejar correctamente ids numéricos; aceptar implementación equivalente.

### C05 · 04 · 6 puntos
- **Directorio:** `EJERCICIO-04/backend`
- **Tipo:** CODIGO
- **Criterio:** GET /juegos admite Query Param genero y devuelve todos los juegos o una colección filtrada.
- **Condiciones de verificación:** Existe lectura del query y filtrado coherente. Sin query devuelve la colección completa. Aceptar filter u otra solución equivalente.

### C06 · 05 · 8 puntos
- **Directorio:** `EJERCICIO-05`
- **Tipo:** CODIGO
- **Criterio:** Primera conexión Full Stack: backend GET /mensaje, CORS habilitado y App.tsx realiza fetch mediante API_URL basada en IP local.
- **Condiciones de verificación:** backend/src/main.ts habilita CORS o configuración equivalente; endpoint /mensaje responde JSON; frontend hace fetch a la API. SafeAreaView, si se usa, debe importarse desde react-native-safe-area-context y la dependencia debe estar declarada.

### C07 · 06 · 7 puntos
- **Directorio:** `EJERCICIO-06/frontend`
- **Tipo:** CODIGO
- **Criterio:** La respuesta del backend se conserva en estado con useState y se muestra/actualiza en la interfaz.
- **Condiciones de verificación:** Existe estado inicial, función actualizadora y cambio visible tras la petición. No exigir nombres exactos.

### C08 · 07 · 7 puntos
- **Directorio:** `EJERCICIO-07/frontend`
- **Tipo:** CODIGO
- **Criterio:** Carga automática inicial mediante useEffect y posibilidad coherente de recarga.
- **Condiciones de verificación:** useEffect inicia la carga al montar o solución React equivalente adecuada; el dato termina reflejado en estado/UI.

### C09 · 08 · 8 puntos
- **Directorio:** `EJERCICIO-08`
- **Tipo:** CODIGO
- **Criterio:** Backend devuelve array de productos y React Native lo representa mediante FlatList con identidad estable y contenido visible.
- **Condiciones de verificación:** Controller/Service devuelven colección; frontend recibe array, lo guarda y FlatList lo representa. Debe existir key estable equivalente a id.

### C10 · 09 · 7 puntos
- **Directorio:** `EJERCICIO-09`
- **Tipo:** CODIGO
- **Criterio:** El frontend construye una URL dinámica con un id y el backend recibe ese valor como Path Param para devolver un héroe concreto.
- **Condiciones de verificación:** El valor nace en la interfaz/estado, se incorpora a /heroes/:id y el Controller/Service resuelven el recurso.

### C11 · 10 · 8 puntos
- **Directorio:** `EJERCICIO-10`
- **Tipo:** CODIGO
- **Criterio:** PATCH modifica likes de una mascota en el array temporal y el frontend refleja el valor actualizado.
- **Condiciones de verificación:** Existe endpoint PATCH equivalente, Service modifica el recurso y frontend envía PATCH y actualiza UI/estado. No exigir ruta literal si conserva intención equivalente del enunciado.

### C12 · 11 · 8 puntos
- **Directorio:** `EJERCICIO-11`
- **Tipo:** CODIGO
- **Criterio:** POST crea un producto a partir de datos enviados en el body y el frontend envía JSON desde un formulario sencillo.
- **Condiciones de verificación:** Controller usa @Body o mecanismo Nest equivalente; Service añade el producto al array; frontend envía POST con Content-Type JSON y valores del estado.

### C13 · 12 · 10 puntos
- **Directorio:** `EJERCICIO-12`
- **Tipo:** CODIGO
- **Criterio:** Miniapp final integra listado, selección/búsqueda por id y likes conectando React Native con Controller + Service.
- **Condiciones de verificación:** Debe combinar GET colección, GET por id y PATCH like o solución funcional equivalente; frontend integra useState/useEffect/lista/acciones de forma coherente.

### C14 · GLOBAL · 8 puntos
- **Directorio:** `EJERCICIO-01..12/README.md`
- **Tipo:** DOCUMENTACION
- **Criterio:** Documentación breve por ejercicio: qué he aprendido, respuesta de comprensión, qué he modificado y resultado.
- **Condiciones de verificación:** Se acepta redacción breve y no literal. Los cuatro apartados deben ser identificables o su información claramente equivalente. No penalizar estilo.

### C15 · GLOBAL · 6 puntos
- **Directorio:** `EJERCICIO-05..12`
- **Tipo:** CODIGO
- **Criterio:** Configuración Full Stack coherente: main.ts/CORS, API_URL con IP local configurable, package.json del frontend compatible con SafeAreaView cuando se utiliza.
- **Condiciones de verificación:** No exigir una IP concreta. Debe poder sustituirse/configurarse. Si usa SafeAreaView de safe-area-context, dependencia presente en package.json. No penalizar si evita SafeAreaView y usa otra solución válida.


## Total

**108/100**
