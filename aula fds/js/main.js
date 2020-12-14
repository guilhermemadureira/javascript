

function clicou(){
   document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
   //console.log( document.getElementById("agradecimento"));
   // alert("Obrigado por clicar")
}

function redirecionar(){
    //window.open("https://www.youtube.com/");
    window.location.href = "https://www.youtube.com";
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
elemento.innerHTML= "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML= "Passe o mouse aqui";
}

function load (){
    alert("pagina carregada");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}



/*function soma (n1, n2){
    return n1 + n2;
}

function validaidade(idade){
    var validar;    
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    } 
    return validar;
}
var idade = prompt("Qual é a sua idade")
console.log(validaidade(idade));
*/

/*alert(soma(5,10));



/*
var d = new Date();
alert(d.getday())
alert(d.getHours())
alert(d.getMinutes())
*/

/*
var count;
for(count=0; count <= 5; count++){
    alert(count);
}*/

/*
var count = 0;
while (count <= 5){
    console.log(count)
    alert(count)
    count++;
}
*/

/*
var idade = prompt("qual sua idade")
if (idade >= 18){
    alert("maior idade");
}else{
    alert("menor de idade");
};
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome)
*/

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/
//var lista= ["maça", "pêra","laranja"];
//lista.push("uva");
//lista.pop()

//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" - "))





/*var nome= "Guilherme martins";
var n1 = 17;
var n2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome +" tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(frase.replace("Japão", "Brasil"))
//alert(frase.replace("Japão", "Brasil"))*/
