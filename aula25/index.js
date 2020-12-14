//const array = [1,2,3];
//array.push(4);
//array[0] = 'Luiz';// mas pode mudar valor de atributo em const 
//array = 'outra';//não pode reatribuir valor em const
//console.log(array)
/* const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    Idade: 25
};
const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    Idade: 65
};
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.Idade); */
/* function criaPessoa (nome, sobrenome, idade) {
    return{
         nome: nome,
        sobrenome: sobrenome,
        idade : idade 
        nome,
        sobrenome,
        idade 
    };
} */
/* const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('clelson', 'Otávio', 65);
const pessoa3 = criaPessoa('que', 'poi', 25);
const pessoa4 = criaPessoa('jyl', 'martins', 35);
const pessoa5 = criaPessoa('richard', 'Otávio', 85);
console.log(pessoa1.nome, pessoa2.nome); */

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`eu tenho ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()
