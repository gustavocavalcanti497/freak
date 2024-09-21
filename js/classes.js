var id_cliente = 0;
var id_produto = 0;
var id_mesa = 0;
var id_historico = 0;
var id_pedido = 0;
var pedido = [];
var cliente = [];
var produto = [];
var mesa = [];
var historico = [];

class Cliente{

    constructor(nome,cpf,telefone,nascimento){
        this.nome = nome;
        this.cpf = cpf;
        
        this.telefone = telefone;
        this.nascimento = nascimento;
        this.id_cliente = id_cliente;
        this.comanda = []; 
    }
    visualizarComanda(){
        console.log(this.comanda);
    }
    fecharComanda(){
        this.comanda = [];
        console.log('Comanda paga!')
    }
}

class Mesa{
    constructor(){
        this.id_mesa = id_mesa;
        this.ocupada = false;
    }
    atribuirMesa(id_cliente) {
        this.id_cliente = id_cliente;
        this.ocupada = true;
    }
    statusMesa(){
        return this.ocupada;
    }

}

class Produto{
    constructor(nome,descricao,preco){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.indisponivel();
        this.id_produto = id_produto;

    }
    disponivel(){
        this.disponibilidade = true;

    }
    indisponivel(){
        this.disponibilidade = false;
    }
    status(){
        return this.disponibilidade;
    }
}

class Pedido{
    constructor(cliente,mesa,produto,qtd){
        this.id_pedido = id_pedido;
        this.cliente = cliente.nome;
        this.mesa = mesa.id_mesa;
        this.produto = produto.nome;
        this.valor_un = produto.preco;
        this.valor_total = (produto.preco)*(qtd);
        this.qtd = qtd;
        this.pronto = false;
        this.data_pedido = new Date().toLocaleString();
        this.data_entrega;
        this.cancelado = false;
    }
    entregarPedido(){
        this.pronto = true;
        this.data_entrega = new Date().toLocaleString();
    }
    cancelarPedido(){
        if(this.cancelado){
            console.log('Esse pedido já foi cancelado');
        }else{
            console.log('Pedido cancelado!');
            this.cancelado = true;
        }
    }

}

class Historico{
    constructor(pedido,data){
        this.id_historico = id_historico;
        this.pedido = pedido;
        this.data = data;
    }
}

function criarPedido(cliente,mesa,produto,qtd){
    if(produto.disponibilidade){
        console.log('Pedido criado');
        id_pedido++;
        pedido[id_pedido] = new Pedido(cliente,mesa,produto,qtd);
        registrarHistorico(pedido[id_pedido],pedido[id_pedido].data_pedido)
        cliente.comanda.push(produto.nome,produto.preco,pedido[id_pedido].qtd,pedido[id_pedido].valor_total)
        return console.log(cliente.nome,' da mesa ',mesa.id_mesa,' pediu ',qtd,' ',produto.nome);
    }else{
        console.log('produto indisponível');
    }
}

function criarCliente(nome,cpf,telefone,nascimento){
    id_cliente++;
    cliente[id_cliente] = new Cliente(nome,cpf,telefone,nascimento);

}

function criarProduto(nome,descricao,preco){
    id_produto++
    produto[id_produto] = new Produto(nome,descricao,preco);
}
function criarMesa(){
    id_mesa++
    mesa[id_mesa] = new Mesa;
}

function registrarHistorico(pedido,data){
    id_historico++;
    historico[id_historico] = new Historico(cliente,pedido,data)
    

}


criarMesa();

criarCliente('Gustavo',10715669974,48998100999,'23-04-1997');
criarProduto('Pastel de queijo','Recheio de gorgonzola, mussarela e parmesão.',20.99);

mesa[1].atribuirMesa(cliente[1]);

produto[1].disponivel();

criarPedido(cliente[1],mesa[1],produto[1],2);
criarPedido(cliente[1],mesa[1],produto[1],2);

pedido[1].entregarPedido();

cliente[1].fecharComanda();

console.log(cliente[1]);





