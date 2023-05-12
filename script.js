

let visor = document.getElementById('input'); //Busca elementodo visor da calculadora.
let botoes = document.querySelectorAll('button'); //Busca todos os botões da calculadora.

let textoVisor = ""; //String para montar o texto que vai para o visor.

botoes.forEach(elemento =>{ //Elemento: cada um dos botões da calculadora.
    elemento.addEventListener("click", (e) =>{ //e é o evento do click ocorrido onde possui as propriedades que podemos acessar. 
        if(e.target.innerHTML=='='){ //com o target, é possível acessar exatamente a área do botão onde tem escrito o número que é acessado por innerHTML.
            textoVisor = eval(textoVisor); // Função eval: recebe uma string e calcula a expressão matemática dessa string.
            visor.value = textoVisor;
        } else if(e.target.innerHTML=='AC'){
            textoVisor = "";
            visor.value = textoVisor;
        }else if(e.target.innerHTML=='DEL'){
            textoVisor = textoVisor.substring(0,textoVisor.length-1); //A função substring seleciona parte de uma string. Nesse caso, vai começar a contar do 0, do início. E vai deixar apenas os caracteres até chegar no tamanho da string menos 1. Ou seja, excluindo apenas o último caratctere da string completa. 
            visor.value = textoVisor;            
        }else{
            textoVisor+=e.target.innerHTML;
            visor.value = textoVisor;
        }
    })
})


