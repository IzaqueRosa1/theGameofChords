/* Sorteado os acordes para as triades */

var buttonStart = document.getElementById("start");
buttonStart.addEventListener("click", sortearNotas);

function sortearNotas () {  
   const grau = Math.floor(Math.random() * 6)
   const notas = ['C','D','E','F', 'G','A','B']
   const sorteada = notas[grau] 

    return document.getElementById("content").innerHTML = sorteada
}


/* Cancelando Botão Start após clicado 1x*/

var btn = document.getElementById("start")
btn.addEventListener("click", function(){
    btn.style.display = "none";
});
