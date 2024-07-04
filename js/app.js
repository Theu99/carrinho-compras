let valorTotal = 0;
document.getElementById ('lista-produtos').innerHTML = '';
document.getElementById ('valor-total').innerHTML = 'R$ 0';

function adicionar () {
    let produto = document.getElementById('produto').value;

    if (produto ==='Nenhum Produto') {
        alert ('Informe um Produto para Adquirir');
        return
        }
    let nomeProduto = produto.split ('-')[0];
    let valorUnitario = produto.split ('R$')[1];
    let quantidade = document.getElementById ('quantidade').value;
    if (quantidade === '' ||  quantidade == 0) 
      return  alert ('Informe a quantidade dos produtos')
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById ('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML+`<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$ ${valorUnitario}</span>
  </section>`
     valorTotal = valorTotal + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById ('quantidade').value = '';

    }

    function limpar () {
        let valorTotal = 0;
        document.getElementById ('lista-produtos').innerHTML = '';
        document.getElementById ('valor-total').innerHTML = '';
    }