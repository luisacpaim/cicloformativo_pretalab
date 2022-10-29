let id = 0;

const dados = {
    pegarTarefas: () => JSON.parse(localStorage.getItem('lista-tarefas')),
    editarTarefas: (listaTarefas) => localStorage.setItem('lista-tarefas', JSON.stringify(listaTarefas)) 
}

const tarefa = (id, novaTarefa) => `<div>
                                        <p id='${id}'>${novaTarefa}</p>
                                        <input type="checkbox" onchange="marcarTarefa(${id})" />
                                        <button onclick="removerTarefa(${id})">Remover</button>
                                    </div>`

const marcarTarefa = (id) => {
    const strike = document.getElementById(`strike${id}`);
    if (strike) {
        document.getElementById(id).innerText = strike.innerHTML;
    } else {
        const tarefaConcluida = document.getElementById(id).innerHTML;
        document.getElementById(id).innerHTML = `<strike id='strike${id}'>${tarefaConcluida}</strike>`;
    }
}

function exibirLista() {
    console.log('called')
    const tarefas = dados.pegarTarefas();
    if (tarefas) {
        tarefas.forEach(tarefaListada => {
            id++;
            document.querySelector('#tasksList').innerHTML += tarefa(id, tarefaListada);
        });
    }
}

const validarTarefa = (novaTarefa) => {
    let tarefaExistente = false;
    const listaTarefas = dados.pegarTarefas();
    
    if (listaTarefas) {
        listaTarefas.map(tarefa => {
            if (tarefa === novaTarefa) {    //"compara" se a novaTarefa já existe
                tarefaExistente = true;
                alert('Tarefa já existente.');
            }
        });
    }

    return tarefaExistente;
}

function adicionarTarefa() {
    id++;
    const novaTarefa = document.getElementById('nome-tarefa').value;
    //'persiste as tarefas': add em localStorage
    const listaTarefas = localStorage.getItem('lista-tarefas'); //cria listaTarefas com o que já tem na const
    if (validarTarefa(novaTarefa)) {
        return;
    }
    
    document.querySelector('#tasksList').innerHTML += tarefa(id, novaTarefa);

    if (listaTarefas) {    //verifica se a const já tem algum item, se sim add nova tarefa
        const novaLista = JSON.parse(listaTarefas); //converte a string em array
        novaLista.push(novaTarefa);  //adiciona nova tarefa no array
        dados.editarTarefas(novaLista); 
        //adiciona no localStorage já convertendo de volta para string (localStorage só trabalha com string)
    } else {  //se não, seta o 1º item
        dados.editarTarefas([novaTarefa]);
    }
}

const removerTarefa = (id) => {
    const tarefaDeletada = document.getElementById(id).innerHTML;
    const listaTarefas = dados.pegarTarefas();
    const novaListaTarefa = listaTarefas.filter(tarefa => tarefa != tarefaDeletada);  //"cria"/atualiza nova lista excluindo a tarefaDeletada
    dados.editarTarefas(novaListaTarefa);
    //localStorage.setItem('lista-tarefas', JSON.stringify(novaListaTarefa));
    document.querySelector('#tasksList').innerHTML = '';
    exibirLista();
}

exibirLista();