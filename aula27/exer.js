function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.Resultado')


    /* form.onsubmit = function (evento){
        evento.preventDefault();
        alert(1);
        console.log('Já era')
    }; */

    function recebeEventoForm(evento) {
      evento.preventDefault();
      const nome = form.querySelector('.Nome')
      const sobrenome = form.querySelector('.Sobrenome')
      const peso = form.querySelector('.Peso')
      const altura = form.querySelector('.Altura')

      const pessoas = [nome.value,sobrenome.value,peso.value,altura.value] 
    
      pessoas.push({
          nome: nome.Value,
          sobrenome: sobrenome.value,
          peso: peso.value,
          altura: altura.vale
      });

      console.log(pessoas);

      resultado.innerHTML +=`<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>` ;
    }

    form.addEventListener('submit', recebeEventoForm)
}
meuEscopo();
