let varA = 'A';
let varB = 'B';
let varC = 'C';
let reser;

reser = varB
varB = varC;
varC = varA;
varA = reser;



console.log(varA,varB,varC)