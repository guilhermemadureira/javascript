/*
&& > false && True > false 
 || >  true && false > vai retornar 'o valor verdadeiro'

FALSY 
*false todos esses vão dar falsos 
0
" " ' ' ` ` se tivesse vazia vai dar falso
null/undefined
NaN
*/
/* function falaOi () {
    return'oi';
}
const vaiExecutar = "jao";

console.log(vaiExecutar && falaOi()); */

//console.log(0 || false || null||'gui'//retorna o primeiro valor verdadeiro||true)

/* const corUsuario = "verde";
const corPadrao = corUsuario || 'preto';

console.log(corPadrao) */

const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || 'jao' || c || d || e);