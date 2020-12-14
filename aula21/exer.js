const num1 = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += num1;
texto.innerHTML += `Raiz quadrada: ${num1 ** 0.5}<br>`
texto.innerHTML += `${num1} é inteiro? ${(Number.isInteger(num1))}<br>`
texto.innerHTML += `É NaN: ${Number.isNaN(num1)}<Br>`
texto.innerHTML += `Arrendondando para baixo: ${Math.floor(num1)}<br>`
texto.innerHTML += `Arrendondando para cima: ${Math.ceil(num1)}<Br>`
texto.innerHTML += `Com duas casas decimais: ${num1.toFixed(2)}<br>`