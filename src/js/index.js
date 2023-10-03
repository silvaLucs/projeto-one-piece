const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {

  botao.addEventListener("click", () => {

    removeButtonSelect();
    removePersonSelect();
    
    botao.classList.add("selecionado");  
    personagens[indice].classList.add('selecionado')

   })
});





function removePersonSelect() {
    const personagemselecionado = document.querySelector('.personagem.selecionado');
    personagemselecionado.classList.remove('selecionado');
}

function removeButtonSelect() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

