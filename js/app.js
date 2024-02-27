function comprar(){
        
        let tipoIngress = document.getElementById('tipo-ingresso');
        let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

        if (tipoIngress.value == 'pista'){
            comprarPista(quantidadeIngresso)
        if (tipoIngress.value == 'superior'){
            comprarCadeiraSuperior(quantidadeIngresso);
        }
        }else {
            comprarCadeiraInferior(quantidadeIngresso);
        }

    }

function comprarPista(quantidadeIngresso) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidadeIngresso > qtdPista) {
        alert('Quantidade indisponivel!')
    }else {
        qtdPista = qtdPista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizadal!')
    }
}

function comprarCadeiraInferior(quantidadeIngresso) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidadeIngresso > qtdInferior) {
        alert('Quantidade indisponivel!')
    }else {
        qtdInferior = qtdInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizadal!')
    }
}

function comprarCadeiraSuperior(quantidadeIngresso) {
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidadeIngresso > qtdsuperior) {
        alert('Quantidade indisponivel!')
    }else {
        qtdsuperior = qtdsuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = qtdsuperior;
        alert('Compra realizadal!')
    }
}