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
