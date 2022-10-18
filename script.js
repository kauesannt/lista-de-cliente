//Criação vetor
let clientes = [];
//Buscando informações do html

let btAdicionar = document.getElementById("btAdicionar");
let btPreferencial = document.getElementById("btPreferencial");
let btAtender = document.getElementById("btAtender");

function adicionarCliente() {

    let idCliente = document.getElementById("idCliente");
    let saidaLista = document.getElementById("saidaLista");
    let saidaNome = document.getElementById("saidaError")
    let nome = idCliente.value;

    //Caso não for informado nome aparece mensagem 
    if (nome == "") {
        saidaError.innerText = "Informe o nome do cliente";
        idCliente.focus();
        return;
    }
    //Adicionando nomes no vetor no ultimo indice
    clientes.push(nome);
    let lista = "";

    for (i = 0; i < clientes.length; i++) {
        lista += (i + 1) + ". " + clientes[i] + "\n";
    }

    saidaLista.textContent = lista;

    idCliente.value = "";
    idCliente.focus();
}
//Criando evento no botão 
btAdicionar.addEventListener("click", adicionarCliente);

function clientePreferencial() {

    let idCliente = document.getElementById("idCliente");
    let saidaLista = document.getElementById("saidaLista");
    let saidaNome = document.getElementById("saidaNome")
    let nome = idCliente.value;

    if (nome == "") {
        saidaError.innerText = "Informe o nome do cliente";
        idCliente.focus();
        return;
    }
    //Adicionando nomes no vetor no primeiro indice
    clientes.unshift(nome);
    let lista = "";

    for (i = 0; i < clientes.length; i++) {
        lista += (i + 1) + ". " + clientes[i] + "\n";
    }

    saidaLista.textContent = lista;

    idCliente.value = "";
    idCliente.focus();
}

btPreferencial.addEventListener("click", clientePreferencial);

function atenderCliente() {

    let saidaAtendimento = document.getElementById("saidaAtendimento");

    //Caso não haja indices no vetor aparece mensagem 
    if (clientes.length == 0) {
        saidaError.innerText = "Não há clientes na lista de espera";
        idCliente.focus();
        return;
    }

    //Removendo o primeiro indice do vetor
    let atender = clientes.shift();

    saidaAtendimento.textContent = atender;

    let lista = "";

    for (i = 0; i < clientes.length; i++) {
        lista += (i + 1) + ". " + clientes[i] + "\n";
    }

    saidaLista.textContent = lista;
}
btAtender.addEventListener("click", atenderCliente);