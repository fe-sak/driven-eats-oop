let contadorItems = 0;

function selecionarPrato (elemento) {
    
    const selecionado = document.querySelector(".prato .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems = contadorItems + 1;
    }
    console.log(contadorItems)
    elemento.classList.add("selecionado");
    verificarPedido();
}

function selecionarBebida (elemento) {
    
    const selecionado = document.querySelector(".bebida .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems = contadorItems + 1;
    }
    console.log(contadorItems)
    elemento.classList.add("selecionado");
    verificarPedido();
}

function selecionarSobremesa (elemento) {
    
    const selecionado = document.querySelector(".sobremesa .selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    } else {
        contadorItems = contadorItems + 1;
    }

    console.log(contadorItems)

    elemento.classList.add("selecionado");
    verificarPedido();
}

function verificarPedido () {
    if (contadorItems === 3) {
        const botao = document.querySelector(".fazer-pedido");
        botao.classList.add("ativo");
        botao.innerHTML = "Fazer pedido";
    }
}