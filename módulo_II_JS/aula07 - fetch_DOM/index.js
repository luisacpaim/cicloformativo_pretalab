// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(resposta => resposta.json())  // arrow function (chama uma função callback) pega a resposta inicial e sobre ela aplicar .json, que permite acessar as informações dessa resposta
// .then(dados => console.log(dados))  // outra arrow function, com param (dados) onde estarão as informação que se deseja consumir

fetch('https://cep.awesomeapi.com.br/43820020')
.then(answer => answer.json())
.then(data => console.log(`${data.address}, ${data.district}, ${data.city}/${data.state}`))

document.getElementById('aula').innerHTML = "Trabalhando com o DOM no JS"; //"pega" o elemento já existente através do id

//cria novo elemento
const novaDiv = document.createElement('div');
document.getElementById('aula').appendChild(novaDiv)  //adiciona "child"(novaDiv) na div aula
novaDiv.innerHTML = 'Div criada com o DOM'
