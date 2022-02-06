let listaDeCartas = [];
let renderizarCartas = document.querySelector('main');
let numeroCartas = undefined;
let virarFrente = undefined;
let virarCostas = undefined;
let cartasMarcadas = [];
let bancoDeImagens = ["assets/bobrossparrot.gif", "assets/explodyparrot.gif", "assets/fiestaparrot.gif", "assets/metalparrot.gif", "assets/revertitparrot.gif", "assets/tripletsparrot.gif", "assets/unicornparrot.gif"];
        
while (numeroCartas < 4 || numeroCartas > 14 || (numeroCartas % 2) !== 0) {
    numeroCartas = prompt("Com quantas cartas deseja jogar? (Qualquer número par entre 4 e 14)");
    }
for (i=0; i< numeroCartas/2; i++){
    listaDeCartas.push(i)
    listaDeCartas.push(i)
}
listaDeCartas.sort(comparador)
function comparador(){
    return Math.random() -0.5;
}
for (i=o; i< numeroCartas; i++){
    renderizarCartas.innerHTML +- "<div class='fundo-carta'><img src='./assets/front.png' class='frente-carta'></div>"
}
console.log(listaDeCartas)