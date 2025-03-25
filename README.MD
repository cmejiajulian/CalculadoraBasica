Calculadora Básica 🧮

Este proyecto es una calculadora básica desarrollada con HTML, CSS y JavaScript. Permite realizar operaciones matemáticas como suma, resta, multiplicación, división y cálculo del residuo.

🚀 Características

Operaciones matemáticas básicas: suma, resta, multiplicación, división y módulo.

Interfaz sencilla e intuitiva.

Funcionalidad implementada con JavaScript.

📂 Estructura del Proyecto

CalculadoraBasica/
│── public/               # Recursos estáticos (imágenes, logos, etc.)
│── src/
│   ├── concepts/         # Funciones JavaScript separadas
│   │   ├── sum.js        # Lógica de suma
│   │   ├── ejercicio.js  # Función para mostrar números pares según la condición
│   ├── style.css         # Estilos CSS
│── index.html            # Página principal
│── main.js               # Script principal
│── README.md             # Documentación del proyecto

📜 Instalación y Uso

🔹 1. Clonar el repositorio

Si aún no tienes el proyecto en tu máquina, clónalo con:

git clone git@github.com:cmejiajulian/CalculadoraBasica.git

🔹 2. Abrir el archivo principal

Abre el archivo index.html en tu navegador.

🔹 3. Usar la calculadora

Ingresa dos números en los campos correspondientes.

Selecciona la operación deseada.

Haz clic en "Calcular" para ver el resultado.

💻 Tecnologías utilizadas

HTML → Para la estructura de la calculadora.

CSS → Para el diseño y estilos.

JavaScript → Para la funcionalidad y lógica de cálculo.

🛠 Funcionalidad principal (JavaScript)

La lógica de cálculo está en main.js, donde se capturan los valores ingresados y se ejecuta la operación seleccionada. Se usa la función:

export const calculate = (num1, num2, operation) => {
    if (isNaN(num1) || isNaN(num2)) {
        return "Ingresa valores válidos";
    }

    switch (operation) {
        case "sum":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num2 !== 0 ? (num1 / num2).toFixed(2) : "No se puede dividir por cero";
        case "modulus":
            return num2 !== 0 ? num1 % num2 : "No se puede calcular el residuo con cero";
        default:
            return "Operación no válida";
    }
};

✨ Autor

Julián Mauricio Cañas Mejía📧 cmejiajulian@gmail.com🔗 GitHub

📜 Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

