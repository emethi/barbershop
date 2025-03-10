// Lista de produtos
const produtos = [
    { id: 1, nome: "Navalha Profissional", preco: 120.00, imagem: "img/navalha.jpg" },
    { id: 2, nome: "Pincel de Barba", preco: 50.00, imagem: "img/pincel.jpg" },
    { id: 3, nome: "Creme de Barbear", preco: 35.00, imagem: "img/creme.jpg" },
    { id: 4, nome: "Gel Pós-Barba", preco: 40.00, imagem: "img/gel.jpg" },
    { id: 5, nome: "Tesoura de Corte", preco: 90.00, imagem: "img/tesoura.jpg" },
    { id: 6, nome: "Kit Barbearia", preco: 200.00, imagem: "img/kit.jpg" },
    { id: 7, nome: "Óleo para Barba", preco: 60.00, imagem: "img/oleo.jpg" },
    { id: 8, nome: "Toalha Térmica", preco: 25.00, imagem: "img/toalha.jpg" },
    { id: 9, nome: "Máquina de Cortar Cabelo", preco: 150.00, imagem: "img/maquina.jpg" },
    { id: 10, nome: "Lâminas de Reposição", preco: 20.00, imagem: "img/laminas.jpg" }
];

// Carrinho de compras
let carrinho = [];

// Função para renderizar os produtos
function renderizarProdutos() {
    const produtosGrid = document.getElementById("produtos-grid");
    produtosGrid.innerHTML = produtos.map(produto => `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p class="preco">R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        </div>
    `).join("");
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    const carrinhoLista = document.getElementById("carrinho-lista");
    const carrinhoTotal = document.getElementById("carrinho-total");

    carrinhoLista.innerHTML = carrinho.map(produto => `
        <li>
            ${produto.nome} - R$ ${produto.preco.toFixed(2)}
            <button onclick="removerDoCarrinho(${produto.id})">Remover</button>
        </li>
    `).join("");

    const total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
    carrinhoTotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para remover produto do carrinho
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(produto => produto.id !== id);
    atualizarCarrinho();
}

// Função para finalizar a compra (redirecionar para checkout externo)
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }
    // Redirecionar para a página de checkout externo (exemplo: PagBank)
    window.location.href = "https://pagbank.com/checkout";
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
    renderizarProdutos();
});