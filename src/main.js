import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupSumHandler } from './concepts/sum'
import { pares } from './concepts/ejercicio'



document.querySelector('#app').innerHTML = `

<body>
 <img src="/CalculadoraBasica/Leonardo_Phoenix_10_Design_a_gothicstyle_logo_with_a_split_des_2.jpg" alt="logo principal" class="gotic">

  
  <div id="app">
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>

    <h2>Operadores y estructuras de control!</h2>

    <div class="operation">
      <h1>Calculadora</h1>
      <label for="num1">Número 1:</label>
      <input type="number" id="num1">
      <label for="num2">Número 2:</label>
      <input type="number" id="num2">
      <label for="operation">Operación:</label>
      <select id="operation">
        <option value="sum">Suma (+)</option>
        <option value="subtract">Resta (-)</option>
        <option value="multiply">Multiplicación (×)</option>
        <option value="divide">División (÷)</option>
        <option value="modulus">Residuo (%)</option>
      </select>
      <button id="calculate">Calcular</button>
      <h2>Resultado: <span id="resultado">0</span></h2>
    </div>
  </div>
</body>

   

`
document.addEventListener('DOMContentLoaded',()=>{
  setupSumHandler();
  pares();

})


