let produtos = []
let ultimoId = 0;

function createProduto() {
    if(produtos.length < 3) {
        ultimoId += 1;
        let id = ultimoId;
        let produto = document.getElementById("produto").value
        let preco = document.getElementById("preco").value
        let qtde = document.getElementById("qtde").value
        let produ = {id: id, produto: produto, preco: preco, qtde: qtde}
        produtos.push(produ)
        console.log(produtos)
    }
    else {
        document.getElementById("cadastrarPeca").disabled = true
        document.getElementById("msg").innerText = "Cheio!"
    }
}

function readProdutos() {
    for (i = 0; i < produtos.length; i++) {
        document.getElementById("pecasCadastradas").innerHTML += `<p>Id do Produto:${produtos[i].id} - Nome Produto:${produtos[i].produto} - Preço do Produto:${produtos[i].preco} - Quantidade no estoque:${produtos[i].qtde}</p>`
    }
}