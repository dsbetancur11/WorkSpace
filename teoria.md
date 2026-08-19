# Tarea de HTML, JavaScript, CSS y React

## Introducción

En el desarrollo web moderno, una página no se construye con una sola tecnología. Para que una web funcione bien, normalmente se usan varias herramientas:

- HTML: define la estructura del contenido.
- CSS: define el estilo y la apariencia.
- JavaScript: agrega lógica, interactividad y comportamiento.
- React: ayuda a crear interfaces de usuario más organizadas y reutilizables.

Estas tecnologías trabajan juntas. HTML crea los elementos, CSS los decora y JavaScript les da dinamismo. React, por su parte, organiza esos elementos en componentes y hace más fácil crear aplicaciones complejas.

---

# 1. HTML

## 1.1 ¿Qué es HTML?

HTML significa HyperText Markup Language, que en español se puede entender como lenguaje de marcado de hipertexto.

Su función principal es describir la estructura de una página web. Es decir, HTML dice qué elementos existen en la página y cómo se organizan: títulos, párrafos, imágenes, enlaces, listas, formularios, botones, etc.

HTML no se usa para diseñar colores ni animaciones; eso se hace con CSS. HTML tampoco sirve para crear lógica compleja; eso se hace con JavaScript. HTML es la base, la estructura.

### Función de HTML en una página web

Cuando abres un sitio web, el navegador interpreta el código HTML y construye la página visual que ves. Por ejemplo:

- un `<h1>` representa un título principal,
- un `<p>` representa un párrafo,
- un `<img>` muestra una imagen,
- un `<a>` crea un enlace.

### Ejemplo sencillo

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>Bienvenido</h1>
    <p>Esta es una página web muy sencilla.</p>
  </body>
</html>
```

### ¿Qué hace este ejemplo?

- `<!DOCTYPE html>` indica que el documento es HTML5.
- `<html>` abre el documento HTML.
- `<head>` contiene información meta, título, enlaces a archivos CSS, scripts, etc.
- `<title>` define el texto que aparece en la pestaña del navegador.
- `<body>` contiene todo lo visible para el usuario.
- `<h1>` crea un título principal.
- `<p>` crea un texto o párrafo.

HTML es la capa de estructura. Sin él, no existe una página con contenido organizado.

---

## 1.2 Estructura básica de un documento HTML

Un documento HTML tiene una estructura lógica y ordenada. La forma más básica se ve así:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi sitio</title>
  </head>
  <body>
    <header>
      <h1>Mi página</h1>
    </header>

    <main>
      <section>
        <h2>Sobre mí</h2>
        <p>Hola, soy estudiante de desarrollo web.</p>
      </section>
    </main>

    <footer>
      <p>2026</p>
    </footer>
  </body>
</html>
```

### Explicación detallada de cada parte

#### `<!DOCTYPE html>`
Es una instrucción para el navegador. Le dice: “Este archivo es un documento HTML5”.

#### `<html lang="es">`
Etiqueta raíz del documento. Aquí comienza todo el contenido HTML. El atributo `lang="es"` indica que el idioma principal es español.

#### `<head>`
Contiene información que no se muestra directamente en la página, pero que es importante para el navegador y para la semántica del documento.

Ejemplos de contenido dentro de `<head>`:

- `<title>`: título de la pestaña.
- `<meta charset="UTF-8">`: define la codificación de caracteres para que el texto se muestre correctamente.
- `<meta name="viewport">`: ayuda a que la página se vea bien en móviles.
- enlaces a CSS o JavaScript.

#### `<body>`
Es el cuerpo visible de la página. Todo lo que el usuario ve se coloca aquí: textos, imágenes, botones, enlaces, formularios, etc.

#### `<header>`
Se usa para el contenido introductorio o de cabecera. Puede contener el logo, el nombre del sitio, menú de navegación, etc.

#### `<main>`
Representa el contenido principal de la página. Solo debe haber un `main` por documento.

#### `<section>`
Agrupa contenido relacionado dentro de una página. Por ejemplo, una sección de servicios, una sesión de contacto o un artículo.

#### `<h1>`
Define el título principal. Normalmente solo hay uno por página.

#### `<h2>`
Se usa para subtítulos importantes.

#### `<p>`
Representa un párrafo de texto.

#### `<footer>`
Contiene información final, como derechos de autor, contacto, redes sociales o enlaces útiles.

### Importancia del orden

La estructura del documento es importante porque:

- ayuda a los motores de búsqueda a entender la página,
- facilita la lectura del código,
- mejora la accesibilidad,
- ayuda a mantener el sitio organizado.

---

## 1.3 Etiquetas de estructura

Las etiquetas de estructura ayudan a organizar el contenido semánticamente. La semántica significa que cada etiqueta comunica el significado del contenido.

### Principales etiquetas semánticas y estructurales

| Etiqueta | ¿Qué representa? | ¿Cuándo usarla? |
| --- | --- | --- |
| `<header>` | Encabezado general | En la parte superior de la página o de una sección |
| `<nav>` | Menú de navegación | Cuando haya enlaces de navegación |
| `<main>` | Contenido principal | Solo una vez por documento principal |
| `<section>` | Sección temática | Cuando el contenido tiene una temática o bloque |
| `<article>` | Artículo o contenido independiente | Noticias, publicaciones, entradas de blog |
| `<aside>` | Contenido secundario | Barras laterales, información complementaria |
| `<footer>` | Pie de página | Parte final de la web o de una sección |
| `<div>` | Contenedor genérico | Para agrupar contenido cuando no existe una etiqueta más específica |
| `<span>` | Contenedor inline | Para estilos o texto pequeño dentro de una línea |

### Ejemplo práctico

```html
<body>
  <header>
    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#servicios">Servicios</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section>
      <h2>Servicios</h2>
      <article>
        <h3>Diseño web</h3>
        <p>Creación de sitios modernos y funcionales.</p>
      </article>
    </section>

    <aside>
      <h3>Noticias</h3>
      <p>Actualizaciones del curso.</p>
    </aside>
  </main>

  <footer>
    <p>© 2026 Mi sitio</p>
  </footer>
</body>
```

### ¿Para qué sirve cada una?

- `<header>`: da identidad y cabecera.
- `<nav>`: agrupa enlaces de navegación.
- `<main>`: indica el contenido central.
- `<section>`: delimita bloques temáticos.
- `<article>`: elemento completo e independiente.
- `<aside>`: contenido complementario o lateral.
- `<footer>`: pie o cierre de la página.
- `<div>`: contenedor adaptable para CSS y JS.

### Diferencia entre `<div>` y `<section>`

- `<div>` es un contenedor genérico sin un significado semántico claro.
- `<section>` tiene un sentido semántico, por ejemplo, una parte específica de la página.

Usa `<section>` cuando se trate de bloques relevantes; usa `<div>` cuando necesites un contenedor solamente para organizar o aplicar estilos.

---

## 1.4 Etiquetas para agregar o representar código

En HTML también hay etiquetas para mostrar código fuente o texto que debe mantenerse tal cual.

### Etiquetas principales

| Etiqueta | ¿Qué hace? | ¿Cuándo usarla? |
| --- | --- | --- |
| `<code>` | Muestra fragmentos cortos de código | Nombres de funciones, variables, ejemplos de sintaxis |
| `<pre>` | Mantiene espacios y saltos de línea | Mostrar bloques de código fuente |
| `<kbd>` | Representa entrada de teclado | Mostrar comandos o teclas |
| `<samp>` | Muestra salida o muestra de ejemplo | Simulación de resultados |
| `<var>` | Marca variables en matemáticas o programación | Nombre de variables en textos técnicos |
| `<blockquote>` | Cita larga o texto destacado | Citas textuales |
| `<hr>` | Línea horizontal separadora | Dividir secciones |

### Ejemplo de código inline

```html
<p>Para imprimir un mensaje en JavaScript usamos <code>console.log("Hola")</code>.</p>
```

### Ejemplo con bloque de código

```html
<pre>
  function saludo() {
    console.log("Hola mundo");
  }
</pre>
```

### ¿Qué hace `pre`?

`<pre>` mantiene exactamente el formato del texto, incluyendo espacios y saltos de línea. Es ideal para código fuente porque conserva la estructura original.

### Ejemplo con teclado

```html
<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>
```

### Ejemplo con variable

```html
<p>La variable <var>edad</var> almacena la edad del usuario.</p>
```

### Ejemplo con cita

```html
<blockquote>
  “La práctica hace al maestro.”
</blockquote>
```

### Ejemplo con línea divisoria

```html
<hr />
```

Esto crea una línea horizontal que separa visualmente secciones.

---

## 1.5 Explicar 5 etiquetas de texto

Hay muchas etiquetas para texto. Algunas son más importantes para aprender bien desde cero.

### 1) `<p>`

#### Qué hace
Crea un párrafo de texto.

#### Para qué se utiliza
Para escribir textos normales y comprensibles en la página.

#### Ejemplo

```html
<p>Este es un párrafo de ejemplo.</p>
```

#### Resultado
Se muestra como un bloque de texto separado del resto.

---

### 2) `<strong>`

#### Qué hace
Hace que el texto se vea en negrita y además da importancia semántica.

#### Para qué se utiliza
Para destacar texto importante, como avisos o palabras clave.

#### Ejemplo

```html
<p>El resultado es <strong>muy importante</strong>.</p>
```

#### Resultado
La parte “muy importante” se ve resaltada en negrita.

---

### 3) `<em>`

#### Qué hace
Hace que el texto aparezca en cursiva y le da énfasis.

#### Para qué se utiliza
Para resaltar palabras con cierto énfasis lógico.

#### Ejemplo

```html
<p>Debes <em>estudiar</em> todos los días.</p>
```

#### Resultado
La palabra “estudiar” se ve en cursiva.

---

### 4) `<a>`

#### Qué hace
Crea un enlace a otra página, sección o recurso.

#### Para qué se utiliza
Para navegar entre páginas, anclas internas o recursos externos.

#### Ejemplo

```html
<a href="https://www.google.com">Ir a Google</a>
```

#### Resultado
Se muestra un enlace clickable que lleva a Google.

---

### 5) `<span>`

#### Qué hace
Agrupa texto o contenido dentro de una línea sin cambiar mucho el diseño por sí solo.

#### Para qué se utiliza
Para aplicar estilos o manipular partes específicas del texto con CSS o JavaScript.

#### Ejemplo

```html
<p>Hoy es un <span>día especial</span>.</p>
```

#### Resultado
La frase “día especial” se muestra igual que el resto del texto, pero se puede estilizar por separado.

---

### Otras etiquetas de texto útiles

#### `<b>`
Hace negrita, pero es más visual que semántico. Se usa para resaltar visualmente un texto.

```html
<p>Esto está en <b>negrita</b>.</p>
```

#### `<i>`
Hace que el texto se vea en cursiva.

```html
<p>El término es <i>italiano</i>.</p>
```

#### `<u>`
Subraya el texto.

```html
<p>Texto <u>subrayado</u>.</p>
```

#### `<br>`
Inserta un salto de línea.

```html
<p>Primera línea<br>Segunda línea</p>
```

#### `<mark>`
Resalta un texto como si fuera marcado con un resaltador.

```html
<p>Este texto está <mark>resaltado</mark>.</p>
```

### Titulares desde `<h2>` hasta `<h6>`

Los encabezados `h1` a `h6` se usan para crear títulos y subtítulos jerárquicos.

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Sección</h3>
<h4>Subsección</h4>
<h5>Detalle</h5>
<h6>Texto pequeño</h6>
```

### ¿Qué significa cada uno?

- `<h1>`: título principal.
- `<h2>`: subtítulo importante.
- `<h3>`: título de sección menor.
- `<h4>`, `<h5>`, `<h6>`: jerarquías menores.

### Importante

- No se debe usar `h1` muchas veces en una página.
- La jerarquía debe ser ordenada y lógica.
- Los encabezados ayudan a la estructura y a la accesibilidad.

---

# 2. JAVASCRIPT

## 2.1 ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que se utiliza principalmente para dar interactividad a una página web. Permite que la página responda a eventos, modifique contenido, valide formularios, haga cálculos, manipule elementos del DOM y mucho más.

### Relación con HTML y CSS

La relación es muy clara:

- HTML = estructura
- CSS = apariencia
- JavaScript = comportamiento y lógica

### Analogía sencilla

Imagina una página web como una casa:

- HTML es la estructura de la casa: paredes, ventanas, habitaciones.
- CSS es la decoración: pintura, muebles, colores, estilo.
- JavaScript es lo que hace que la casa funcione: interruptores, puertas automáticas, luces que se encienden, alarmas.

### Ejemplo de JavaScript básico

```html
<button onclick="alert('Hola')">Haz clic</button>
```

### ¿Qué hace?

Cuando el usuario hace clic en el botón, JavaScript ejecuta la función `alert('Hola')` y aparece un mensaje emergente.

JavaScript puede:

- cambiar texto,
- mostrar u ocultar elementos,
- validar formularios,
- crear juegos,
- consumir APIs,
- crear aplicaciones completas con frameworks como React.

---

## 2.2 Variables

Las variables sirven para guardar información en la memoria del programa.

### `let`

`let` se usa para declarar variables que pueden cambiar su valor.

```javascript
let nombre = "Ana";
nombre = "Pedro";
console.log(nombre);
```

### `const`

`const` se usa para declarar variables que no deben cambiar de valor.

```javascript
const pi = 3.1416;
console.log(pi);
```

Si intentamos cambiarlo:

```javascript
const pi = 3.1416;
pi = 3.14; // Error
```

### `var`

`var` fue la forma antigua de declarar variables. Tiene un comportamiento más amplio y se puede reutilizar en más lugares, pero hoy en día se prefiere `let` y `const`.

```javascript
var edad = 20;
console.log(edad);
```

### Diferencias principales

| Palabra clave | Cambiable | Ámbito | Recomendación |
| --- | --- | --- | --- |
| `let` | Sí | Bloque | Se usa normalmente |
| `const` | No | Bloque | Se usa para valores fijos |
| `var` | Sí | Función | Evitar en código moderno |

### Ejemplo comparativo

```javascript
let numero = 5;
numero = 8;

const nombre = "Carlos";
// nombre = "Ana"; // error

var apellido = "García";
```

### Cuándo conviene usar cada una

- Usa `const` si el valor no va a cambiar.
- Usa `let` si el valor sí puede cambiar.
- Evita `var` en proyectos modernos, porque puede traer problemas de ámbito.

---

## 2.3 Tipos de datos

JavaScript tiene varios tipos de datos básicos que permiten representar información.

### 1) `string`

Un string es texto.

```javascript
const nombre = "María";
console.log(nombre);
```

Se escribe entre comillas dobles o simples.

---

### 2) `number`

Un number representa números.

```javascript
const edad = 18;
const precio = 49.99;
```

Puede ser entero o decimal.

---

### 3) `boolean`

Un boolean solo puede ser verdadero o falso.

```javascript
const activo = true;
const cerrado = false;
```

Se usa mucho en condiciones.

---

### 4) `undefined`

Representa una variable declarada pero sin valor.

```javascript
let x;
console.log(x); // undefined
```

---

### 5) `null`

`null` significa “valor vacío” o “ausencia de valor intencional”.

```javascript
let usuario = null;
console.log(usuario); // null
```

### Diferencia entre `undefined` y `null`

- `undefined`: la variable no tiene valor aún.
- `null`: el programador decide que la variable debe estar vacía.

---

### 6) `object`

Un objeto guarda varios datos dentro de una sola variable.

```javascript
const persona = {
  nombre: "Luis",
  edad: 22,
  ciudad: "Bogotá"
};

console.log(persona.nombre);
```

Los objetos tienen propiedades con clave y valor.

---

### 7) `array`

Un arreglo es una lista de elementos.

```javascript
const colores = ["rojo", "azul", "verde"];
console.log(colores[0]); // rojo
```

Los arreglos se usan para almacenar varios valores relacionados.

---

### 8) `function`

Una función es un bloque de código reutilizable.

```javascript
function saludar() {
  console.log("Hola");
}

saludar();
```

Las funciones permiten organizar el código y reutilizarlo.

---

## 2.4 Variables globales y ámbito

El ámbito o scope hace referencia al lugar donde una variable puede ser usada.

### Variables globales

Una variable global se declara fuera de cualquier función o bloque y puede usarse en todo el programa.

```javascript
const mensaje = "Hola";

function mostrar() {
  console.log(mensaje);
}

mostrar();
```

Aquí `mensaje` es global porque está fuera de la función.

### Variables locales

Una variable local se declara dentro de una función o bloque y solo existe allí.

```javascript
function mostrar() {
  const nombre = "Ana";
  console.log(nombre);
}

mostrar();
```

Si intentamos usar `nombre` fuera de la función, no existe.

```javascript
console.log(nombre); // Error
```

### Diferencia principal

| Tipo | Alcance | Disponible | Riesgo |
| --- | --- | --- | --- |
| Global | Todo el programa | Sí | Puede causar conflictos |
| Local | Solo bloque o función | Solo allí | Más segura y ordenada |

### Importante

En JavaScript moderno, se prefiere usar `let` y `const` para evitar errores por variables globales mal manejadas.

---

## 2.5 Estructuras de flujo

Las estructuras de flujo permiten decidir qué hacer según condiciones o repetir tareas.

### Operadores de comparación básicos

Los operadores de comparación se usan para comparar valores.

| Operador | Significado | Ejemplo |
| --- | --- | --- |
| `==` | Igualdad | `5 == 5` |
| `===` | Igualdad estricta | `5 === "5"` false |
| `!=` | Distinto | `5 != 3` |
| `!==` | Distinto estricto | `5 !== "5"` true |
| `>` | Mayor que | `7 > 3` |
| `<` | Menor que | `2 < 5` |
| `>=` | Mayor o igual | `5 >= 5` |
| `<=` | Menor o igual | `3 <= 4` |

### Condiciones

Una condición es una expresión que devuelve `true` o `false`.

```javascript
const edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
}
```

Si la condición es verdadera, se ejecuta el bloque de código.

---

### `if`

#### ¿Para qué sirve?

Ejecuta un bloque si una condición es verdadera.

#### Ejemplo

```javascript
const nota = 8;

if (nota >= 7) {
  console.log("Aprobado");
}
```

#### Explicación

La condición `nota >= 7` es verdadera, por eso se muestra el mensaje.

---

### `else`

#### ¿Para qué sirve?

Se ejecuta cuando la condición del `if` es falsa.

#### Ejemplo

```javascript
const nota = 5;

if (nota >= 7) {
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}
```

#### Explicación

Como 5 no es mayor o igual a 7, se ejecuta el bloque del `else`.

---

### `else if`

#### ¿Para qué sirve?

Permite evaluar varias condiciones distintas en secuencia.

#### Ejemplo

```javascript
const nota = 9;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Bueno");
} else {
  console.log("Necesitas practicar");
}
```

#### Explicación

Se revisa la primera condición. Si no se cumple, prueba la siguiente, y así sucesivamente.

---

### `switch`

#### ¿Para qué sirve?

Compara una variable con varios valores posibles.

#### Ejemplo

```javascript
const dia = 2;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("Otro día");
}
```

#### Explicación

Si `dia` vale 2, entra en `case 2` y muestra “Martes”.

---

### `for`

#### ¿Para qué sirve?

Se usa para repetir un bloque de código un número determinado de veces.

#### Ejemplo

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

#### Explicación

- `let i = 1`: inicia en 1.
- `i <= 5`: repite mientras i sea menor o igual a 5.
- `i++`: aumenta el valor de i en 1.

Resultado: 1, 2, 3, 4, 5.

---

### `while`

#### ¿Para qué sirve?

Ejecuta un bloque mientras la condición sea verdadera.

#### Ejemplo

```javascript
let contador = 1;

while (contador <= 3) {
  console.log(contador);
  contador++;
}
```

#### Explicación

Mientras contador sea menor o igual a 3, se repite el código.

---

### `do...while`

#### ¿Para qué sirve?

Ejecuta el bloque al menos una vez y luego revisa la condición.

#### Ejemplo

```javascript
let contador = 1;

do {
  console.log(contador);
  contador++;
} while (contador <= 3);
```

#### Explicación

Aunque la condición sea falsa desde el principio, el código se ejecuta una vez antes de comprobarla.

---

# 3. CSS

## 3.1 ¿Qué es CSS?

CSS significa Cascading Style Sheets, o “hojas de estilo en cascada”.

Su función es definir la apariencia visual de una página HTML. Con CSS se controla:

- colores,
- tamaño de texto,
- márgenes,
- fondos,
- diseño de páginas,
- posición de elementos,
- animaciones,
- respuestas a dispositivos móviles.

### Relación con HTML

HTML define la estructura. CSS define el estilo. Es decir, HTML dice “hay un título”, CSS dice “este título será rojo, grande y centrado”.

### Ejemplo sencillo

```html
<h1>Hola</h1>
```

```css
h1 {
  color: blue;
  font-size: 30px;
}
```

### Resultado

El título “Hola” se mostrará en azul y con un tamaño mayor.

---

## 3.2 Sintaxis de CSS

La sintaxis básica es esta:

```css
selector {
  propiedad: valor;
}
```

### ¿Qué significa cada parte?

#### Selector

El selector indica qué elemento HTML se va a modificar.

Ejemplo:

```css
p {
  color: red;
}
```

Aquí el selector es `p`, es decir, todos los párrafos.

#### Propiedad

La propiedad es la característica visual que quieres cambiar.

Ejemplos:

- `color`
- `font-size`
- `background-color`
- `margin`
- `padding`

#### Valor

El valor es la configuración concreta.

Ejemplo:

```css
color: red;
font-size: 18px;
```

### Ejemplo completo

```css
h2 {
  color: darkgreen;
  font-size: 24px;
  text-align: center;
}
```

### ¿Qué hace?

- cambia el color del texto a verde oscuro,
- aumenta tamaño a 24px,
- centra el texto.

---

## 3.3 Selectores CSS

Los selectores permiten apuntar a elementos específicos.

### 1) Selector por etiqueta

Selecciona todos los elementos de cierto tipo.

#### HTML

```html
<p>Texto 1</p>
<p>Texto 2</p>
```

#### CSS

```css
p {
  color: blue;
}
```

#### Resultado

Todos los párrafos serán azules.

---

### 2) Selector por clase

Las clases se usan para agrupar varios elementos con una característica común.

#### HTML

```html
<p class="destacado">Primero</p>
<p class="destacado">Segundo</p>
```

#### CSS

```css
.destacado {
  font-weight: bold;
  color: green;
}
```

#### Resultado

Ambos párrafos se destacan con negrita y verde.

---

### 3) Selector por ID

El ID es único para un solo elemento.

#### HTML

```html
<h1 id="titulo-principal">Mi página</h1>
```

#### CSS

```css
#titulo-principal {
  color: red;
}
```

#### Resultado

Solo el elemento con ese ID se vera rojo.

---

### 4) Selector universal

`*` selecciona todos los elementos.

#### CSS

```css
* {
  margin: 0;
  padding: 0;
}
```

#### Resultado

Elimina márgenes y paddings por defecto de muchos elementos.

---

### 5) Selector descendiente

Selecciona elementos dentro de otros.

#### HTML

```html
<div class="contenedor">
  <p>Texto dentro</p>
</div>
```

#### CSS

```css
.contenedor p {
  color: purple;
}
```

#### Resultado

Solo los párrafos dentro de `.contenedor` cambian.

---

### 6) Selector de elementos hijos

Selecciona solo los elementos que son hijos directos de otro.

#### HTML

```html
<ul>
  <li>Uno</li>
  <li>Dos</li>
</ul>
```

#### CSS

```css
ul > li {
  font-weight: bold;
}
```

#### Resultado

Solo los `li` que son hijos directos de `ul` reciben negrita.

---

### 7) Selector múltiple

Permite aplicar estilos a varios elementos a la vez.

#### CSS

```css
h1, h2, h3 {
  color: orange;
}
```

#### Resultado

Todos los encabezados `h1`, `h2` y `h3` tendrán el mismo color.

---

### Diferencia entre `.clase` y `#id`

| Selector | ¿Qué selecciona? | ¿Se repite? |
| --- | --- | --- |
| `.clase` | Todos los elementos con esa clase | Sí |
| `#id` | Un elemento único con ese id | No |

#### Ejemplo

```html
<p class="nota">Primera nota</p>
<p class="nota">Segunda nota</p>
<h1 id="encabezado">Título</h1>
```

```css
.nota {
  color: blue;
}

#encabezado {
  color: red;
}
```

### Importante

- Las clases se usan para elementos repetidos.
- Los IDs deben ser únicos.

---

## 3.4 Modificación de elementos

Con CSS se pueden cambiar muchas propiedades de cualquier elemento HTML.

### Ejemplo básico

```html
<p class="mensaje">Hola</p>
```

```css
.mensaje {
  color: white;
  background-color: darkblue;
  font-size: 20px;
  padding: 12px;
  border-radius: 8px;
}
```

### Propiedades comunes

#### `color`
Cambia el color del texto.

```css
p { color: red; }
```

#### `background-color`
Cambia el fondo del elemento.

```css
div { background-color: yellow; }
```

#### `font-size`
Cambia el tamaño del texto.

```css
h1 { font-size: 32px; }
```

#### `font-family`
Define la fuente.

```css
body { font-family: Arial, sans-serif; }
```

#### `width`
Define el ancho.

```css
.caja { width: 300px; }
```

#### `height`
Define la altura.

```css
.caja { height: 200px; }
```

#### `margin`
Espacio fuera del elemento.

```css
.caja { margin: 20px; }
```

#### `padding`
Espacio dentro del elemento.

```css
.caja { padding: 10px; }
```

#### `border`
Define el borde.

```css
.caja { border: 2px solid black; }
```

#### `text-align`
Alinea el texto.

```css
p { text-align: center; }
```

#### `display`
Cambia el comportamiento del elemento.

```css
p { display: inline; }
```

También puede usarse para bloques, flex o grid.

---

### Modelo de caja (Box Model)

El modelo de caja explica cómo se ve un elemento en la página.

Cada elemento tiene:

- contenido
- padding
- border
- margin

```text
+---------------------------+
|          margin           |
|  +-------------------+    |
|  |      border       |    |
|  |  +-----------+    |    |
|  |  | padding  |    |    |
|  |  | +-----+ |    |    |
|  |  | |content| |    |    |
|  |  | +-----+ |    |    |
|  |  +-----------+    |    |
|  +-------------------+    |
+---------------------------+
```

### Diferencia entre `margin` y `padding`

#### `margin`
Es el espacio exterior del elemento. Separa un elemento de otros elementos.

```css
.caja {
  margin: 20px;
}
```

#### `padding`
Es el espacio interior del elemento. Separa el contenido del borde.

```css
.caja {
  padding: 20px;
}
```

### Explicación sencilla

- `padding`: “distancia dentro del cuadro”.
- `margin`: “distancia fuera del cuadro”.

---

# 4. REACT

## 4.1 ¿Qué es React?

React es una biblioteca de JavaScript creada por Facebook (Meta) para construir interfaces de usuario (UI).

Se usa para crear aplicaciones web modernas, especialmente cuando la interfaz tiene varios elementos, estados, y componentes interactivos.

### ¿Para qué sirve?

React permite construir páginas web complejas con una estructura clara y reutilizable. En lugar de manipular el DOM de forma difícil, React se encarga de actualizar la interfaz de manera eficiente.

### ¿Por qué se utiliza?

Porque facilita:

- crear componentes reutilizables,
- organizar la lógica,
- actualizar la interfaz cuando cambian los datos,
- construir aplicaciones con mayor escalabilidad.

### ¿Qué significa trabajar con componentes?

Un componente es una pieza reutilizable de la interfaz. Cada componente representa una parte de la aplicación, por ejemplo:

- un header,
- un botón,
- una tarjeta,
- un formulario,
- un contador.

React permite crear estos bloques y combinarlos para formar una aplicación completa.

---

## 4.2 Componentes

Un componente React es una función o clase que devuelve JSX, que es una mezcla de JavaScript y HTML.

### Ejemplo sencillo

```jsx
function Saludo() {
  return <h1>Hola mundo</h1>;
}
```

### Explicación línea por línea

#### `function Saludo() {`
Define una función llamada `Saludo`.

#### `return <h1>Hola mundo</h1>;`

La función devuelve un elemento JSX, que en la práctica se ve y se comporta como HTML. En este caso, el componente devuelve un título `h1`.

#### `}`
Cierra la función.

### Cómo se utiliza

```jsx
<Saludo />
```

Esto inserta el componente dentro de la interfaz. Es como usar una etiqueta HTML personalizada.

### Importancia

Los componentes permiten dividir la interfaz en piezas pequeñas y ordenadas.

---

## 4.3 Analogía entre componentes React y etiquetas HTML

La analogía pedida es:

“Un componente de React puede compararse con una etiqueta HTML personalizada.”

### Qué tienen en común

- Ambos representan elementos visuales.
- Ambos pueden aparecer en la interfaz.
- Ambos pueden tener contenido dentro.

### Diferencias

#### HTML

La etiqueta HTML es estándar y ya existe en el navegador, por ejemplo:

```html
<h1>Hola</h1>
```

#### React

Un componente React es una etiqueta que tú defines:

```jsx
<Saludo />
```

El navegador no entiende `Saludo` como una etiqueta HTML nativa, pero React sí sabe qué renderizar según la función del componente.

### ¿Por qué los componentes React pueden tener lógica y comportamiento?

Porque un componente no es solamente un bloque visual. También puede tener:

- variables,
- condiciones,
- eventos,
- funciones,
- uso de hooks como `useState` y `useEffect`.

Esto los hace mucho más poderosos que una simple etiqueta HTML.

### Ejemplo

```jsx
function Boton() {
  function manejarClick() {
    alert("Se hizo clic");
  }

  return <button onClick={manejarClick}>Haz clic</button>;
}
```

Aquí, el componente tiene lógica (`manejarClick`) y comportamiento (`onClick`).

---

## 4.4 Props

Los props son propiedades que se pasan de un componente padre a un componente hijo.

### ¿Qué son?

Son información que un componente recibe para mostrarla o usarla.

### Ejemplo

```jsx
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}

<Saludo nombre="Carlos" />
```

### Explicación

#### Componente padre

El componente que pasa la información es el padre:

```jsx
function App() {
  return <Saludo nombre="Carlos" />;
}
```

#### Componente hijo

El componente que recibe la información es el hijo:

```jsx
function Saludo({ nombre }) {
  return <h1>Hola {nombre}</h1>;
}
```

#### ¿Qué es el prop?

`nombre` es un prop. Es la información que se le envía al hijo.

#### ¿Cómo recibe el componente el valor?

La función `Saludo({ nombre })` recibe el objeto de props y extrae la propiedad `nombre`.

#### ¿Por qué son de solo lectura?

Los props deben considerarse inmutables. El componente hijo no debe modificarlos directamente. Si necesita cambiar algo, debe usar `useState` o manejarlo desde el padre.

### Comparación con argumentos de una función JavaScript

Es muy similar a esto:

```javascript
function saludar(nombre) {
  return `Hola ${nombre}`;
}

console.log(saludar("Carlos"));
```

La idea es la misma: una función recibe un dato y lo utiliza para producir un resultado.

Los props hacen exactamente lo mismo, pero en React entre componentes.

---

## 4.5 useState

`useState` es un hook de React. Un hook es una función especial que permite usar estado en componentes funcionales.

### ¿Qué es el estado?

El estado es la información que puede cambiar durante la ejecución del componente y afecta la interfaz.

### Ejemplo de contador

```jsx
const [contador, setContador] = useState(0);
```

### Cómo se interpreta

- `contador`: es el valor actual del estado.
- `setContador`: es la función que permite cambiar ese valor.
- `useState(0)`: inicializa el estado con el valor `0`.

### ¿Por qué no debemos modificar directamente `contador`?

Porque React no detecta el cambio si se modifica directamente. Para que React vuelva a renderizar y actualizar la interfaz, hay que usar `setContador`.

### ¿Qué sucede cuando llamamos `setContador()`?

React actualiza el estado y vuelve a ejecutar el componente. Eso provoca una nueva renderización, mostrando el nuevo valor en pantalla.

### ¿Por qué React vuelve a renderizar?

Porque cambió el estado. Cuando el estado cambia, React re-evalúa el componente y actualiza el DOM virtual para reflejar la nueva interfaz.

### Ejemplo completo

```jsx
import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}
```

### Explicación del ejemplo

- `useState(0)` comienza el contador en 0.
- `contador` representa el valor actual.
- `setContador(contador + 1)` cambia el valor y fuerza la actualización del componente.
- `onClick` ejecuta la función cuando se hace clic en el botón.

---

## 4.6 useEffect

`useEffect` es otro hook de React. Se usa para ejecutar efectos secundarios.

### ¿Qué es un efecto secundario?

Un efecto secundario es una acción que ocurre como consecuencia de un cambio en el estado o en la interfaz, por ejemplo:

- hacer una petición a una API,
- guardar datos en localStorage,
- ejecutar código después de renderizar,
- escuchar eventos,
- mostrar mensajes en consola.

### ¿Para qué se utiliza useEffect?

Se usa para realizar tareas que deben ejecutarse cuando el componente se renderiza o cuando cambian ciertas variables.

### ¿Cuándo se ejecuta?

Por defecto, `useEffect` se ejecuta después de cada renderizado.

### Array de dependencias

```jsx
useEffect(() => {
  console.log("Se ejecutó");
}, []);
```

El segundo argumento es el array de dependencias.

#### Si ponemos `[]`

El efecto solo se ejecuta una vez, al montar el componente.

#### Si ponemos una variable dentro del array

```jsx
useEffect(() => {
  console.log("Cambió el nombre");
}, [nombre]);
```

Entonces, el efecto se ejecuta cada vez que `nombre` cambia.

#### Si no ponemos array de dependencias

```jsx
useEffect(() => {
  console.log("Se ejecuta cada render");
});
```

El efecto se ejecuta después de cada render, lo que puede provocar ciclos o comportamientos innecesarios si no se controla bien.

### Ejemplo 1

```jsx
useEffect(() => {
  console.log("Se ejecutó");
}, []);
```

#### Explicación

- La función se ejecuta al montar el componente.
- El array vacío significa: “ejecuta esto solo una vez”.

### Ejemplo 2

```jsx
useEffect(() => {
  console.log("Cambió el nombre");
}, [nombre]);
```

#### Explicación

- Cuando `nombre` cambia, el efecto vuelve a ejecutarse.
- Si nombre no cambia, no se ejecuta de nuevo.

### Uso práctico

```jsx
import { useEffect, useState } from "react";

function Ejemplo() {
  const [nombre, setNombre] = useState("Ana");

  useEffect(() => {
    console.log("El nombre cambió a:", nombre);
  }, [nombre]);

  return <button onClick={() => setNombre("Luis")}>Cambiar nombre</button>;
}
```

El efecto se ejecuta cuando el valor de `nombre` cambia.

---

## 4.7 Diferencia entre useState y useEffect

### `useState`

- Guarda información/estado.
- Permite modificarlo.
- Cuando cambia, provoca una actualización de la interfaz.

### `useEffect`

- Ejecuta efectos secundarios.
- Puede reaccionar a cambios en variables.
- Se ejecuta después del renderizado según sus dependencias.

### Tabla comparativa

| Concepto | useState | useEffect |
| --- | --- | --- |
| Función principal | Guardar estado | Ejecutar efectos secundarios |
| ¿Qué hace? | Crea y actualiza variables del componente | Reacciona a cambios y realiza tareas |
| ¿Cuándo cambia? | Cuando se llama a la función setter | Cuando cambia el estado o dependencias |
| ¿Qué produce? | Renderización de la interfaz | Efectos, llamadas, actualización de datos |
| Ejemplo | contador, nombre, modo oscuro | fetch a API, guardar en localStorage |

---

# 5. EJEMPLO FINAL

A continuación tienes un ejemplo completo de un componente React que usa simultáneamente:

- Props
- useState
- useEffect
- JSX
- Un botón
- HTML semántico
- CSS básico

### Ejemplo

```jsx
import { useEffect, useState } from "react";

function ContadorPersonalizado({ nombre }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log(`El usuario ${nombre} cambió el contador a ${contador}`);
  }, [contador, nombre]);

  return (
    <section style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <header>
        <h2>Bienvenido, {nombre}</h2>
      </header>

      <main>
        <p>Valor actual: <strong>{contador}</strong></p>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      </main>
    </section>
  );
}
```

### Explicación línea por línea

#### `import { useEffect, useState } from "react";`

Importa los hooks necesarios para usar estado y efectos.

#### `function ContadorPersonalizado({ nombre }) {`

Define un componente llamado `ContadorPersonalizado` y recibe el prop `nombre`.

#### `const [contador, setContador] = useState(0);`

Inicializa el estado `contador` en 0 y crea la función `setContador` para cambiarlo.

#### `useEffect(() => { ... }, [contador, nombre]);`

Este efecto se ejecuta cada vez que cambia `contador` o `nombre`.

```jsx
console.log(`El usuario ${nombre} cambió el contador a ${contador}`);
```

Muestra un mensaje en consola con el valor actual.

#### `return (`

Inicia la parte visual del componente.

#### `<section style={{ ... }}>`

Crea un bloque semántico con estilo inline. Se usa para agrupar la interfaz.

#### `<header>`

Representa la cabecera del contenido.

#### `<h2>Bienvenido, {nombre}</h2>`

Muestra el nombre recibido por props.

#### `<main>`

Es el contenido principal del componente.

#### `<p>Valor actual: <strong>{contador}</strong></p>`

Muestra el número actual del contador dentro de un texto.

#### `<button onClick={() => setContador(contador + 1)}>`

Crea un botón que, al hacer clic, aumentará el contador en 1.

#### `Aumentar`

Texto visible del botón.

#### `</button>`

Cierra el botón.

#### `</main>`

Cierra la parte principal.

#### `</section>`

Cierra el bloque principal del componente.

### ¿Qué hace el componente en total?

- Recibe un nombre desde un componente padre.
- Tiene un contador que comienza en 0.
- Muestra ese contador en pantalla.
- Cada clic aumenta el valor.
- `useEffect` ejecuta una acción cada vez que cambia el contador o el nombre.

---

# 6. RESUMEN PARA EXAMEN

## Resumen rápido para el examen

| Concepto | ¿Para qué sirve? |
| --- | --- |
| HTML | Define la estructura de la página |
| CSS | Define el estilo y la apariencia |
| JavaScript | Añade lógica, interactividad y comportamiento |
| React | Crea interfaces con componentes reutilizables |
| Componentes | Son bloques reutilizables de la interfaz |
| Props | Permiten pasar datos de un componente padre a uno hijo |
| useState | Guarda estado y permite cambiarlo en React |
| useEffect | Ejecuta efectos secundarios después del render |
| let | Variable que puede cambiar |
| const | Variable constante, no cambia |
| if | Ejecuta un bloque si se cumple una condición |
| for | Repite código varias veces |
| while | Repite mientras se cumpla una condición |
| Selector CSS | Elige qué elementos vamos a estilizar |

---

## Preguntas que podrían aparecer en el examen

1. ¿Qué significa HTML?
   - HTML significa HyperText Markup Language, y sirve para estructurar contenido web.

2. ¿Cuál es la diferencia entre HTML y CSS?
   - HTML define la estructura; CSS define el estilo.

3. ¿Qué hace JavaScript?
   - Da lógica e interactividad a la página.

4. ¿Qué es una variable en JavaScript?
   - Es un espacio en memoria que guarda un valor.

5. ¿Cuál es la diferencia entre `let` y `const`?
   - `let` puede cambiar; `const` no.

6. ¿Qué es un objeto en JavaScript?
   - Es una estructura que guarda propiedades y valores.

7. ¿Qué es un array?
   - Es una lista ordenada de valores.

8. ¿Qué hace un `if`?
   - Evalúa una condición y ejecuta un bloque si es verdadera.

9. ¿Qué diferencia hay entre `if` y `else`?
   - `if` ejecuta cuando es verdadero; `else` cuando es falso.

10. ¿Qué significa `for`?
    - Repite un bloque por un número determinado de veces.

11. ¿Qué significa `while`?
    - Repite un bloque mientras la condición sea verdadera.

12. ¿Qué es CSS?
    - Es el lenguaje para dar estilo visual a una página web.

13. ¿Qué es un selector en CSS?
    - Es la parte que indica qué elementos se van a modificar.

14. ¿Cuál es la diferencia entre `.clase` y `#id`?
    - `.clase` puede aplicarse a varios elementos; `#id` solo a uno.

15. ¿Qué es `margin`?
    - Es el espacio externo de un elemento.

16. ¿Qué es `padding`?
    - Es el espacio interno del elemento.

17. ¿Qué es React?
    - Es una biblioteca para construir interfaces de usuario.

18. ¿Qué es un componente React?
    - Es una pieza reutilizable de la interfaz.

19. ¿Qué son los props?
    - Son datos enviados de un componente padre a uno hijo.

20. ¿Qué hace `useState`?
    - Guarda estado y permite actualizar la interfaz.

21. ¿Qué hace `useEffect`?
    - Ejecuta efectos secundarios después del render y según dependencias.

22. ¿Qué es JSX?
    - Es una sintaxis que permite escribir HTML dentro de JavaScript en React.

23. ¿Qué hace un botón en React?
    - Permite ejecutar una acción cuando el usuario hace clic.

24. ¿Por qué React re-renderiza un componente?
    - Porque cambia su estado o sus props.

---

## Conceptos que debo memorizar

### HTML

- HTML sirve para crear la estructura de la web.
- Tiene etiquetas como `<html>`, `<head>`, `<body>`, `<h1>`, `<p>`, `<a>`, `<img>`.
- La semántica ayuda a organizar mejor el contenido.
- Los elementos semánticos permiten describir mejor la estructura de la página.

### CSS

- CSS controla la apariencia de los elementos.
- La sintaxis básica es `selector { propiedad: valor; }`.
- Los selectores permiten elegir elementos específicos.
- `margin` y `padding` son distintos: el margen está fuera del elemento y el padding dentro.
- El modelo de caja es fundamental para entender el diseño.

### JavaScript

- JavaScript da comportamiento a la página.
- Se usan variables para guardar valores.
- `let` y `const` se usan en JavaScript moderno.
- `if`, `else`, `switch`, `for` y `while` son estructuras de control.
- Los arrays y objetos permiten representar información más compleja.

### React

- React se usa para construir interfaces de usuario con componentes.
- Un componente es una pieza reutilizable de la aplicación.
- Los props permiten pasar información entre componentes.
- `useState` es para guardar estado y actualizar la vista.
- `useEffect` se usa para efectos secundarios y reacciones a cambios.
- JSX combina JavaScript y HTML de manera expresiva.

---

## Resumen general final

HTML, CSS, JavaScript y React forman la base del desarrollo web moderno.

- HTML organiza la información.
- CSS la presenta visualmente.
- JavaScript le da interactividad y lógica.
- React facilita la construcción de interfaces complejas mediante componentes.

Para estudiar bien, hay que recordar que:

- la estructura va primero,
- el estilo viene después,
- la lógica permite que todo responda,
- y React ayuda a organizar todo de manera modular y reutilizable.

Si aprendes estas ideas de manera clara, podrás construir páginas web, aplicaciones pequeñas y proyectos más complejos con una base sólida.

---

Fin de la tarea.
