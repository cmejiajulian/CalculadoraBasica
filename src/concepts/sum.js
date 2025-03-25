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



export const setupSumHandler =() => {
    const operationContainer = document.querySelector('.operation');
    if(!operationContainer) return;

    const num1      = operationContainer.querySelector('#num1');
    const num2      = operationContainer.querySelector('#num2');
    const operation = operationContainer.querySelector('#operation');
    const boton     =     operationContainer.querySelector('#calculate');
    const resultado = operationContainer.querySelector('#resultado');

    boton.addEventListener('click',()=>{
        const valor1 = parseFloat(num1.value);
        const valor2 = parseFloat(num2.value);
        const operacionSeleccionada = operation.value;
        const resultadoOperacion    = calculate(valor1,valor2,operacionSeleccionada)
        resultado.textContent = resultadoOperacion;
    })
};