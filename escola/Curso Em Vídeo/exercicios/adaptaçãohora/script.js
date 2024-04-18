function foto(){
    let foto = window.document.getElementById("foto");
    let msg = window.document.getElementById("msg");
    let corpo = window.document.getElementsByName("body");
    let date = new Date();
    let hora = date.getHours();
    if(hora >= 6 && hora <= 12){
        alert("Bom dia!");
        msg.innerHTML = "Bom <strong>dia</strong>!";
        foto.src = 'imagens/dia.jpg';
        document.body.style.background = "#DE9C25";
    }
    else if(hora > 12 && hora < 18){
        alert("Boa tarde!")
        msg.innerHTML = "Boa <strong>tarde</strong>!"
        foto.src = 'imagens/tarde.jpg';
        document.body.style.background = "rgb(255, 189, 103)";
    }
    else if(hora >= 18){
        alert("Boa noite!")
        msg.innerHTML = "Boa <strong>noite</strong>!"
        foto.src = 'imagens/Untitled.jpg';
        document.body.style.background = "#386BBE";
    }
    else{
        alert("Vai dormir!")
        msg.innerHTML = "Vai <strong>dormir</strong> menino!"
        foto.src = 'imagens/madrugada.jpg';
        document.body.style.background = "#051D43"
    }
   
}