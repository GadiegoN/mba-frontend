let produtos = []
let endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json'
let elementoParaInserirProdutos = document.getElementById('produtos__lista')

buscarProdutosDaAPI()

async function buscarProdutosDaAPI() {
    let res = await fetch(endpoint)
    produtos = await res.json()
    exibirProdutos(produtos)
}

function exibirProdutos(produtos) {
    produtos.forEach(produto => {
        elementoParaInserirProdutos.innerHTML += `
            <li class="produtos__item">
                <div class="produtos__conteudo">
                <img
                    src="${produto.img}"
                    alt="Tela de um celular na mão de uma pessoa"
                />
                <div class="produtos__informacoes">
                    <h3>${produto.nome}</h3>
                    <p>
                    ${produto.descricao}
                    </p>
                    <h4>R$ ${produto.valorComDesconto}<s>R$ ${produto.valorSemDesconto}</s></h4>
                    <p>${produto.tipoEntrega}</p>
                </div>
                </div>
            </li>
        `
    })
}
