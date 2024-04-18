function verificar(){
    let date = new Date();
    let anoatual = date.getFullYear();
    let ano = window.document.querySelector("input#anonasc").value;
    let exibir = window.document.getElementById("def");
    let res = window.document.getElementById("res");
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if(ano == 0){
        alert("Digite novamente, ano não foi informado");
    }

    if(ano > anoatual){
        alert("Digite novamente, ano maior que o atual");
    }

    else{
        let sex = window.document.getElementsByName("sex");
        let idade = anoatual - Number(ano);

        if(sex[0].checked){
            alert("Homem");
            exibir.innerHTML = "Você é um homem de " + idade + " anos";
            if(idade >= 0 && idade <= 5){
                img.setAttribute('src', 'imagens/bebeh.jpg');
                alert("teste");
            }
            else if(idade > 5 && idade < 18){
                img.setAttribute('src', 'imagens/criançah.jpg');
            }
            else if(idade >= 18 && idade < 60){

                img.setAttribute('src', 'imagens/adultoh.jpg');
            }
            else{
                img.setAttribute('src', 'imagens/idosoh.jpg');
            }
        }
        else{
            alert("Mulher");
            exibir.innerHTML = "Você é uma mulher de " + idade + " anos";
            if(idade >= 0 && idade <= 5){
                img.setAttribute('src', 'imagens/bebem.jpg');
                alert("teste");
            }
            else if(idade > 5 && idade < 18){
                img.setAttribute('src', 'imagens/criançam.jpg');
            }
            else if(idade >= 18 && idade < 60){

                img.setAttribute('src', 'imagens/adultom.jpg');
            }
            else{
                img.setAttribute('src', 'imagens/idosom.jpg');
            }
        }
    }
    exibir.appendChild(img);
}