# RÚBRICA C01 · NESTJS + REACT NATIVE · CONEXIÓN API

**Puntuación máxima:** 100 puntos.

## Principios
- Se corrige el trabajo real, no la coincidencia literal con el ejemplo.
- Se aceptan soluciones técnicamente equivalentes.
- No se penaliza dos veces el mismo error.
- Si una evidencia no puede verificarse: **NO VERIFICABLE**.
- `node_modules` no forma parte de la entrega.

| Ejercicio | Directorio | Criterio | Puntos | Evidencia |
|---|---|---|---:|---|
| GLOBAL | `/` | Repositorio contiene EJERCICIO-01 a EJERCICIO-12 con nomenclatura exacta; cada ejercicio es isla independiente y contiene README.md. | 8 | ESTRUCTURA |
| 01 | `EJERCICIO-01/backend` | GET /hola mediante Controller y respuesta JSON coherente con modificación propia. | 5 | CODIGO |
| 02 | `EJERCICIO-02/backend` | Controller delega en Service; Service mantiene array temporal de pizzas y devuelve la colección. | 6 | CODIGO |
| 03 | `EJERCICIO-03/backend` | GET /mascotas/:id usa Path Param y Service localiza por id. | 6 | CODIGO |
| 04 | `EJERCICIO-04/backend` | GET /juegos admite Query Param genero y devuelve colección completa o filtrada. | 6 | CODIGO |
| 05 | `EJERCICIO-05` | Primera conexión Full Stack: GET /mensaje, CORS y fetch mediante API_URL con IP local configurable. | 7 | CODIGO |
| 06 | `EJERCICIO-06/frontend` | useState conserva la respuesta del backend y actualiza la interfaz. | 6 | CODIGO |
| 07 | `EJERCICIO-07/frontend` | Carga inicial mediante useEffect y recarga coherente. | 6 | CODIGO |
| 08 | `EJERCICIO-08` | Backend devuelve productos y React Native los representa mediante FlatList. | 7 | CODIGO |
| 09 | `EJERCICIO-09` | ID nace en frontend, forma URL dinámica y llega como Path Param al backend. | 6 | CODIGO |
| 10 | `EJERCICIO-10` | PATCH modifica likes en array temporal y frontend refleja el resultado. | 7 | CODIGO |
| 11 | `EJERCICIO-11` | POST crea producto desde body y frontend envía JSON desde formulario sencillo. | 7 | CODIGO |
| 12 | `EJERCICIO-12` | Miniapp final integra listado, búsqueda/selección por id y likes. | 9 | CODIGO |
| GLOBAL | `EJERCICIO-01..12/README.md` | README por ejercicio con qué he aprendido, respuesta de comprensión, qué he modificado y resultado. | 8 | DOCUMENTACION |
| GLOBAL | `EJERCICIO-05..12` | Configuración Full Stack coherente: CORS, API_URL configurable e instalación/dependencia coherente si usa SafeAreaView. | 6 | CODIGO |

## Condiciones detalladas
### C01 · GLOBAL · 8 puntos
- **Directorio:** `/`
- **Tipo:** ESTRUCTURA
- **Criterio:** Repositorio contiene EJERCICIO-01 a EJERCICIO-12 con nomenclatura exacta; cada ejercicio es isla independiente y contiene README.md.
- **Condiciones:** Existen 12 carpetas exactas. E01-E04 contienen backend/. E05-E12 contienen backend/ y frontend/. No se exige node_modules.

### C02 · 01 · 5 puntos
- **Directorio:** `EJERCICIO-01/backend`
- **Tipo:** CODIGO
- **Criterio:** GET /hola mediante Controller y respuesta JSON coherente con modificación propia.
- **Condiciones:** Controller Nest válido; ruta /hola y GET; devuelve objeto JSON. Aceptar textos/nombres equivalentes.

### C03 · 02 · 6 puntos
- **Directorio:** `EJERCICIO-02/backend`
- **Tipo:** CODIGO
- **Criterio:** Controller delega en Service; Service mantiene array temporal de pizzas y devuelve la colección.
- **Condiciones:** Separación Controller/Service funcional; al menos tres elementos tras modificación; aceptar estructura equivalente.

### C04 · 03 · 6 puntos
- **Directorio:** `EJERCICIO-03/backend`
- **Tipo:** CODIGO
- **Criterio:** GET /mascotas/:id usa Path Param y Service localiza por id.
- **Condiciones:** Ruta dinámica, recuperación/conversión coherente del id y búsqueda equivalente a find.

### C05 · 04 · 6 puntos
- **Directorio:** `EJERCICIO-04/backend`
- **Tipo:** CODIGO
- **Criterio:** GET /juegos admite Query Param genero y devuelve colección completa o filtrada.
- **Condiciones:** Query opcional y filtrado funcional; aceptar implementación equivalente.

### C06 · 05 · 7 puntos
- **Directorio:** `EJERCICIO-05`
- **Tipo:** CODIGO
- **Criterio:** Primera conexión Full Stack: GET /mensaje, CORS y fetch mediante API_URL con IP local configurable.
- **Condiciones:** main.ts habilita CORS o equivalente; endpoint responde JSON; frontend hace fetch. SafeAreaView solo se exige si se usa.

### C07 · 06 · 6 puntos
- **Directorio:** `EJERCICIO-06/frontend`
- **Tipo:** CODIGO
- **Criterio:** useState conserva la respuesta del backend y actualiza la interfaz.
- **Condiciones:** Estado inicial, actualizador y cambio visible tras la petición; no exigir nombres exactos.

### C08 · 07 · 6 puntos
- **Directorio:** `EJERCICIO-07/frontend`
- **Tipo:** CODIGO
- **Criterio:** Carga inicial mediante useEffect y recarga coherente.
- **Condiciones:** useEffect inicia la carga al montar o solución React equivalente; resultado llega al estado/UI.

### C09 · 08 · 7 puntos
- **Directorio:** `EJERCICIO-08`
- **Tipo:** CODIGO
- **Criterio:** Backend devuelve productos y React Native los representa mediante FlatList.
- **Condiciones:** Controller/Service devuelven colección; frontend la recibe, guarda y representa con key estable.

### C10 · 09 · 6 puntos
- **Directorio:** `EJERCICIO-09`
- **Tipo:** CODIGO
- **Criterio:** ID nace en frontend, forma URL dinámica y llega como Path Param al backend.
- **Condiciones:** Valor del frontend se incorpora a /heroes/:id y se resuelve el recurso concreto.

### C11 · 10 · 7 puntos
- **Directorio:** `EJERCICIO-10`
- **Tipo:** CODIGO
- **Criterio:** PATCH modifica likes en array temporal y frontend refleja el resultado.
- **Condiciones:** Endpoint PATCH equivalente; Service modifica; frontend envía PATCH y actualiza estado/UI.

### C12 · 11 · 7 puntos
- **Directorio:** `EJERCICIO-11`
- **Tipo:** CODIGO
- **Criterio:** POST crea producto desde body y frontend envía JSON desde formulario sencillo.
- **Condiciones:** @Body o equivalente; Service añade al array; frontend envía POST JSON con datos de estado.

### C13 · 12 · 9 puntos
- **Directorio:** `EJERCICIO-12`
- **Tipo:** CODIGO
- **Criterio:** Miniapp final integra listado, búsqueda/selección por id y likes.
- **Condiciones:** Combina GET colección, GET id y PATCH like o equivalente; frontend integra estado, efecto, lista y acciones.

### C14 · GLOBAL · 8 puntos
- **Directorio:** `EJERCICIO-01..12/README.md`
- **Tipo:** DOCUMENTACION
- **Criterio:** README por ejercicio con qué he aprendido, respuesta de comprensión, qué he modificado y resultado.
- **Condiciones:** Se acepta redacción breve/equivalente. Debe ser identificable la información de los cuatro apartados.

### C15 · GLOBAL · 6 puntos
- **Directorio:** `EJERCICIO-05..12`
- **Tipo:** CODIGO
- **Criterio:** Configuración Full Stack coherente: CORS, API_URL configurable e instalación/dependencia coherente si usa SafeAreaView.
- **Condiciones:** No exigir IP concreta. Si usa react-native-safe-area-context, dependencia en package.json. Otra solución válida es aceptable.


## Total
**100/100**
