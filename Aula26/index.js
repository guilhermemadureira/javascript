/* 
Primitivos (imutáveis)- string , number , boolean, undefined , 
null (bigint, symbol) - Valores copiados, todos são valores copiados quando usa o =

referência (mutavel) - array, object , function - passados por referência ou seja ele vai procurar onde ja tem na memoria
por isso referencia, ele aponta. E quando usa o sinal de = ele aponta para o local que está armazenado.
//let nome = 'gui';
//          012
//nome[0] = 'R';//imutavel
//console.log(nome[0])

let a = 'A'; 
let b = a; // cópia

console.log(a,b)

a = 'outro';
console.log(a,b) */
 /* let a = [1,2,3];
 let b = [...a];//nesse caso ele é copiado
 let c = b; 
 //console.log(a,b)

 a.push(4);
b.pop()
console.log(a,b,c) */
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a};// Assim ele vai copiar invés de referenciar.

a.nome = 'João';// quando mudo aqui mudou a refencia no local da memória
console.log(b)
console.log(a)