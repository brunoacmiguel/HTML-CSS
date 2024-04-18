let btn = window.document.getElementById("tabu");
let exibir = window.document.querySelector("div#ola");
let mostrar = "";
btn.addEventListener("click", tabu);
function tabu(){
    let n = window.document.querySelector("input#num").value;
    let mult = window.document.getElementById("num2").value;
    alert(mult);
    mostrar = "";
    for(let i = 0; i <= mult; i++){
        var result = n * i;
        mostrar += n + " X " + i + " = " + result + "<br>";
        exibir.innerHTML = mostrar;
    }
        
}