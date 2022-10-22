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

function adicionarTarefa() {
    id++;
    const novaTarefa = document.getElementById('nome-tarefa').value;
    document.querySelector('#lista-tarefas').innerHTML += tarefa(id, novaTarefa);
}

/*incluir opção de excluir tarefa  

    <div id="${id}">
                            <p>Tarefa</p>
                            <input type="checkbox" />
                            <button imgicontrash ></button>
                        </div>` 
*/