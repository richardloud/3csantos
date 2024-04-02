const botoes = document.querySelectorAll(".botao"); //esta linha seleciona todos os elementos HTML que tem a classe 'botao' e armazena-os na constante 'botoes'//
for (let i = 0; i < botoes.length; i++) { //este é um loop que percorre cada botao na constante 'botoes'//
    botoes[i].onclick = function (){ //aqui, estamos atribuindo uma função ao evento 'onclick' de cada botão. Isso significa que a função será executada sempre que o botão for clicado//
        for (let j = 0; j < botoes.length; j++) { //dentro da função 'onclick', temos outro loop que percorre cada botão novamente*/
            botoes[j].classList.remove("ativo"); //aqui removemos a classe 'ativo' de cada botão. Isso pode ser usado para alterar o estilo do botão, por exemplo, para indicar qual botão está atualmente ativo//       
        }
        botoes[i].classList.add("ativo"); //depois de remover a classe 'ativo' de todos os botões, adicionamos a classe 'ativo' de volta ao botão que foi clicado. Isso efetivamente garante que apenas o botão clicado tenha a classe 'ativo'//      
    }
for (let i = 0; i < textos.length; i++) {  
    textos[i].onclick = function (){
        for (let j = 0; j < textos.length; j++) { //dentro da função 'onclick', temos outro loop que percorre cada botão novamente*/
            textos[j].classList.remove("ativo");           
    }
    textos[i].classList.add("ativo");
}
}
}
