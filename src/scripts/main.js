document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('form-notas').addEventListener('submit', function(event){
        event.preventDefault();
        let notaA = parseInt(document.getElementById('notaA').value);
        let notaB = parseInt(document.getElementById('notaB').value);
        let soma = (notaA + notaB)
        console.log(soma);
        let mediaFinal = soma/2;
        document.getElementById('media-final').innerHTML = mediaFinal;
        document.querySelector('.media').style.display = "block";
        notaA = null; 
        notaB = null;
    })
})