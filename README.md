El presente repositorio contiene el código con el cual construyo la solución a la prueba del módulo 4 llamado **Programación avanzada en JavaScript** de la beca **Desarrollo de aplicaciones Full Stack Javascript Trainee** dictado por Desafío Latam

Las tecnologías que he utilizando son las siguientes:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)

Los requisitos del proyecto los muestro en las siguientes imagenes:

![Requisitos Hoja 1 y 2](./assets/imgs/screenshots/requisitos_uno_dos.webp)
![Requisitos Hoja 3 y 4](./assets/imgs/screenshots/requisitos_tres_cuatro.webp)
![Requisitos Hoja 5](./assets/imgs/screenshots/requisitos_cinco.webp)

Mi proyecto es completamente responsivo. A continuación muestro screenshots del proyecto en pantallas grandes y pequeñas:

### 1. Screenshot pantallas grandes

![Screenshot pantallas grandes](./assets/imgs/screenshots/screenshots_big_screen.webp)

### 2. Screenshot pantallas small

![Screenshot pantallas small](./assets/imgs/screenshots/screenshot_small_screen.webp)

A continuación muestro code snippet de mis implementaciones de los requisitos:

### 1. Crear las clases representadas en el diagrama implementando la herencia indicada.

![Código de las Clases](./assets/imgs/screenshots/code_clases.webp)

### 2. Crear las instancias de las clases utilizando los datos del formulario.

Creo la instancia una vez que recibo la data del formulario de manera dinámica como muestro en la línea 5.

![Código Creación de Instancias](./assets/imgs/screenshots/code_instancias.webp)

### 3. Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales

Realizo una IIFE (Immediately Invoked Function Expression) que hace fetch a la data almacenada en el archivo **animales.json**. Dicho archivo lo he modificado solo en relación al tipo de archivo. Luego de cargada la data, procedo a almacenarla en una variable global. Dicha variable global la usaré para crear un objeto el cual posee la **clase respectiva** a la que pertenece el animal y esta clase la utilizo para crear la instancia.

![Código Consulta a animales.json](./assets/imgs/screenshots/code_consulta_asincrona.webp)

### 4. Realizar por lo menos una función autoejecutable IIFE

El código que muestro en el punto 3 anterior es IIFE

### 5. Dividir el código en módulos

He creado el archivo **modulos.js** el cual posee todas las clases para luego exportarlas y crear objetos en el archivo **script.js**

### 6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario.

Para mostrar el animal en el canvas izquierdo he creado la función **mostrarAnimalAgregado** la cual posee como parámetro el objeto creado al completar los campos del formulario y al hacer click en el botón **Agregar** del formulario.

![Código Mostrar en Canvas](./assets/imgs/screenshots/code_mostrar_animal.webp)

### 7. Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla. (Opcional)

He utilizado validez en el html no permitiendo el ingreso de valores en blanco ya sea en los select y en el textarea vía atributo **required**

### 8. Devolver el formulario en un estado inicial luego de registrar a cada animal. (Opcional)

Para resetear el formulario he creado la función **resetearFormulario** la cual presenta como parámetros los input del formulario los cuales luego sus valores son seateados a una cadena vacía

![Código Reset Formulario](./assets/imgs/screenshots/code_reset_formulario.webp)

### 9. Programar la interacción del botón de audio, en donde deberás reproducir el sonido del animal en el sitio web. (Opcional)

Para reproducir audio de cada animal he creado la función **reproducirSonido**:

![Código Reproducir Sonido](./assets/imgs/screenshots/code_reproducir_audio.webp)

### 10. Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen. (Opcional)

Para mostrar el modal he creado la función **cargarModal** siguiente:

![Código Cargar Modal](./assets/imgs/screenshots/code_modal.webp)

Por último, además implementé la funcionalidad de eliminar los elementos ya agregados al canvas creando la función **controlEliminarAnimal** siguiente:

![Código Eliminar Animal](./assets/imgs/screenshots/code_eliminar_animal.webp)
