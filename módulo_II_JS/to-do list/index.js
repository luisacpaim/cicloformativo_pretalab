let id = 0;

/* function adicionarTarefa() {
    id++;
    const tarefa = document.createElement('div');
    const nomeTarefa = document.createElement('p');
    const checkbox = document.createElement('input');

    tarefa.innerHTML = 'Tarefa';
    tarefa.id = id;
    checkbox.type = 'checkbox';
    
    tarefa.appendChild(nomeTarefa);
    tarefa.appendChild(checkbox);
    document.querySelector('#lista-tarefas').appendChild(tarefa);
} */

/*const tarefa = ` <div>
<p>Tarefa</p>
<input type="checkbox" />
</div>` */

const tarefa = (id, novaTarefa) => ` <div id="${id}">
                            <p>${novaTarefa}</p>
                            <input type="checkbox" />
                        </div>` 

function exibirLista() {
    id++;
    const tarefas = JSON.parse(localStorage.getItem('lista-tarefas'));
    if (tarefas) {
        tarefas.forEach(tarefaListada => {
            document.querySelector('#tasksList').innerHTML += tarefa(id, tarefaListada)
        });
    }
}

function adicionarTarefa() {
    id++;
    const novaTarefa = document.getElementById('nome-tarefa').value;
    document.querySelector('#tasksList').innerHTML += tarefa(id, novaTarefa);
    //'persiste as tarefas': add em localStorage
    const listaTarefas = localStorage.getItem('lista-tarefas'); //cria listaTarefas com o que já tem na const
    if (listaTarefas) {    //verifica se a const já tem algum item, se sim add nova tarefa
        const novaLista = JSON.parse(listaTarefas); //converte a string em array
        novaLista.push(novaTarefa);  //adiciona nova tarefa no array
        localStorage.setItem('lista-tarefas', JSON.stringify(novaLista)); 
        //adiciona no localStorage já convertendo de volta para string (localStorage só trabalha com string)
    } else {  //se não, seta o 1º item
        localStorage.setItem('lista-tarefas', JSON.stringify([novaTarefa]));
    }
}

exibirLista();