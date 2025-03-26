(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const u="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='32'%20height='32'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20256'%3e%3cpath%20fill='%23F7DF1E'%20d='M0%200h256v256H0V0Z'%3e%3c/path%3e%3cpath%20d='m67.312%20213.932l19.59-11.856c3.78%206.701%207.218%2012.371%2015.465%2012.371c7.905%200%2012.89-3.092%2012.89-15.12v-81.798h24.057v82.138c0%2024.917-14.606%2036.259-35.916%2036.259c-19.245%200-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157%208.421%2011.859%2014.607%2023.715%2014.607c9.969%200%2016.325-4.984%2016.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044%2013.747-31.792%2035.228-31.792c15.294%200%2026.292%205.328%2034.196%2019.247l-18.732%2012.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046%200-11.514%204.468-11.514%2010.31c0%207.217%204.468%2010.14%2014.778%2014.608l6.014%202.577c20.45%208.765%2031.963%2017.7%2031.963%2037.804c0%2021.654-17.012%2033.51-39.867%2033.51c-22.339%200-36.774-10.654-43.819-24.574'%3e%3c/path%3e%3c/svg%3e",d="/CalculadoraBasica/vite.svg",p=(e,o,i)=>{if(isNaN(e)||isNaN(o))return"Ingresa valores válidos";switch(i){case"sum":return e+o;case"subtract":return e-o;case"multiply":return e*o;case"divide":return o!==0?(e/o).toFixed(2):"No se puede dividir por cero";case"modulus":return o!==0?e%o:"No se puede calcular el residuo con cero";default:return"Operación no válida"}},v=()=>{const e=document.querySelector(".operation");if(!e)return;const o=e.querySelector("#num1"),i=e.querySelector("#num2"),c=e.querySelector("#operation"),t=e.querySelector("#calculate"),r=e.querySelector("#resultado");t.addEventListener("click",()=>{const a=parseFloat(o.value),l=parseFloat(i.value),s=c.value,n=p(a,l,s);r.textContent=n})},g=()=>{for(let e=10;e<=55;e++)e%2===0&&e!=16&&e%3!==0&&console.log(e)};document.querySelector("#app").innerHTML=`

<body>
  <img src="/public/Leonardo_Phoenix_10_Design_a_gothicstyle_logo_with_a_split_des_2.jpg" alt="logo principal" class="gotic">
  
  <div id="app">
    <a href="https://vite.dev" target="_blank">
      <img src="${d}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${u}" class="logo vanilla" alt="JavaScript logo" />
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

   

`;document.addEventListener("DOMContentLoaded",()=>{v(),g()});
