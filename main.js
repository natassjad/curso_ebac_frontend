const form = document.getElementById("form1");
let text 

form.addEventListener ('submit', function(e){
    e.preventDefault();
    let numeroA = document.getElementById('numeroA').value;
    let numeroB = document.getElementById('numeroB').value;

    if (numeroB>numeroA) {
        text = "Formulário válido! Numero A menor que número B."
        document.querySelector(".mensagem-final").style.backgroundColor = "green";
    }
    else {
        text = "Formulário inválido! Numero A maior ou igual a número B."
        document.querySelector(".mensagem-final").style.backgroundColor = "red";
    }
    document.getElementById("mensagem").innerHTML = text;
    document.querySelector(".mensagem-final").style.display = "block";
    numeroA = null;
    numeroB = null;
})