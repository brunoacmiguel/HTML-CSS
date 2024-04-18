let btn = window.document.getElementById("verf");
let btn2 = window.document.getElementById("final");
let mostrar = window.document.getElementById("mostrar");
let msg = "";

let vetor = [];
let maior = 0;
let soma = 0;
btn.addEventListener("click", verf);
btn2.addEventListener("click", finalizar);

function verf(){
    let num = Number(window.document.getElementById("num").value);

    if(vetor.indexOf(num) != -1){
        alert("Número já inserido");
    }

    else if(vetor.indexOf(num) == -1){
        vetor.push(num);
        msg += num + "<br>";
        document.getElementById("mostrar").innerHTML = msg;
    }

}

function finalizar(){
    let tam = vetor.length;
    
    if(tam != 0){
        for(let i = 0; i < vetor.length; i++){
            if(vetor[i] > maior){
                maior = vetor[i];
            }
        }

        for(let i = 0; i < vetor.length; i++){
            soma += vetor[i];
        }

        let media = soma / tam;
        
        alert("O maior valor é: " + maior + "\nO vetor possui " + tam + " caracters" + "\nA soma de todos os itens d vetor é: " + soma  + "\nE a média é " + media);
    }
    if(tam == 0){
        alert("Insira valores antes de finalizar");
    }
    
}

