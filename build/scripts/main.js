const form=document.getElementById("form1");let text;form.addEventListener("submit",function(e){e.preventDefault();var e=document.getElementById("numeroA").value,o=document.getElementById("numeroB").value;e<o?(text="Formulário válido! Numero A menor que número B.",document.querySelector(".mensagem-final").style.backgroundColor="green"):(text="Formulário inválido! Numero A maior ou igual a número B.",document.querySelector(".mensagem-final").style.backgroundColor="red"),document.getElementById("mensagem").innerHTML=text,document.querySelector(".mensagem-final").style.display="block"});