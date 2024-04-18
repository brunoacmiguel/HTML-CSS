let btn = window.document.getElementById("iniciar");
let mostrar = window.document.querySelector("div#mostrar");
btn.addEventListener('click', iniciar);


function iniciar(){

    let inicio = parseInt(window.document.getElementById("ini").value);
    let fim = parseInt(window.document.getElementById("fim").value);
    let passo = parseInt(window.document.getElementById("pass").value);
    let prog = inicio;

    mostrar.innerHTML =  "";
    if(isNaN(inicio)){
        mostrar.innerHTML = "Insira um valor inicial válido";
        return;
    }

    else if(isNaN(fim)){
        mostrar.innerHTML = "Insira um valor final válido";
    }

    else if(isNaN(passo)){
        mostrar.innerHTML = "Insira um passo válido";
    }

    else if(inicio > fim){
        alert("[ERRO] Valor inicial maior que o final");
        mostrar.innerHTML = "Inválido";
    }
    else{
        while(prog <= fim){
            mostrar.innerHTML += prog + " &#9989";
            prog += passo;
        }
    }
   
    
    











}
