/* Sorteado os acordes para as triades */

const a = function sortearNotas () {  
    const grau = Math.floor(Math.random() * 6)
    const notas = ['C','D','E','F', 'G','A','B']
    const sorteada = notas[grau] 
 
    document.getElementById("content").innerHTML = sorteada;
 }
 
 sortearNotas()


 module.exports = sortearNotas;