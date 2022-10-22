// function bemVinda() {
//     const mensagem = document.createElement('h1');
//     mensagem.innerHTML = "Bem vinda!"
//     document.querySelector('#mensagem').appendChild(mensagem);
// }
function bemVinda() {
    if(!document.querySelector('#bemvinda')) {      // se !não existir id bemvinda... executa:     --  ! antes valida que é falso
        const nome = document.createElement('h1');
        nome.innerHTML = "Bem vinda, Luísa!";
        nome.id = 'bemvinda';
        document.querySelector('#mensagem').appendChild(nome);
    }
}

function mudaCor() {
    let corFonte = document.querySelector('#bemvinda').style.color;
    console.log(corFonte);
    if (corFonte == '' || corFonte == 'rgb(0, 0, 0)') {  // p/ comparar pode ser pela variavel, mas p/ definir tem que ser completo
        document.querySelector('#bemvinda').style.color = '#A020F0'; // completo;
    } else {
        document.querySelector('#bemvinda').style.color = '#000000';
    }
}
