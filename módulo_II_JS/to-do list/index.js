let id = 0;

const tarefa = (id, novaTarefa) => `<div>
                                        <p id='${id}'>${novaTarefa}</p>
                                        <input type="checkbox" />
                                        <button onclick="removerTarefa(${id})">Remover</button>
                                    </div>`

function exibirLista() {
    console.log('Called')
    const tarefas = JSON.parse(localStorage.getItem('lista-tarefas'));
    if (tarefas) {
        tarefas.forEach(tarefaListada => {
            id++;
            document.querySelector('#tasksList').innerHTML += tarefa(id, tarefaListada);
        });
    }
}

const validarTarefa = (novaTarefa) => {
    let tarefaExistente = false;
    const listaTarefas = JSON.parse(localStorage.getItem('lista-tarefas'));
    
    listaTarefas.map(tarefa => {
        if (tarefa == novaTarefa) {
            tarefaExistente = true;
            alert('Tarefa já existente.')
        }
    })

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
        localStorage.setItem('lista-tarefas', JSON.stringify(novaLista)); 
        //adiciona no localStorage já convertendo de volta para string (localStorage só trabalha com string)
    } else {  //se não, seta o 1º item
        localStorage.setItem('lista-tarefas', JSON.stringify([novaTarefa]));
    }
}

const removerTarefa = (id) => {
    const tarefaDeletada = document.getElementById(id).innerHTML;
    const listaTarefas = JSON.parse(localStorage.getItem('lista-tarefas'));
    const novaListaTarefa = listaTarefas.filter(tarefa => tarefa != tarefaDeletada);
    localStorage.setItem('lista-tarefas', JSON.stringify(novaListaTarefa));
    document.querySelector('#lista-tarefas').innerHTML = '';
    exibirLista();
}

exibirLista();