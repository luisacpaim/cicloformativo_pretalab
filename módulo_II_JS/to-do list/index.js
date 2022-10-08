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

const tarefa = (id) => ` <div id="${id}">
                            <p>Tarefa</p>
                            <input type="checkbox" />
                        </div>` 

function adicionarTarefa() {
    id++;
    document.querySelector('#lista-tarefas').innerHTML += tarefa(id);
}

//incluir opção de excluir tarefa