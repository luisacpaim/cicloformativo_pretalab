// function escreverMensagem() {
//     const textoInput = document.getElementById('nome').value;
    
//     document.getElementById('mensagem').innerHTML = textoInput;
// }

// function escreverNome() {
//     const nomeDigitado = document.getElementById('nome').value;
// //    document.getElementById('bemvinda').innerHTML = `Bem vinda, ${nomeDigitado}!`
// //    document.getElementById('bemvinda').innerHTML = "Bem vinda: " + nomeDigitado + "!"
//    document.getElementById('bemvinda').innerHTML += nomeDigitado;  // += mantém o que tem acrescentando o desejado
// }

function escreverNome() {
    const textoInput = document.getElementById('nome').value;

    const bemVinda = document.getElementById('bemvinda').innerHTML;
    if (bemVinda.split(':')[1].length >1) {
        document.getElementById('bemvinda').innerHTML = `Bem vinda: ${textoInput}`;
    } else {
        document.getElementById('bemvinda').innerHTML += textoInput;
    }
}



function adicionarAluna() {
    const aluna = document.getElementById('aluna').value;
   // document.getElementById('lista'). innerHTML += `<p>${aluna}</p>` ou
    const alunaNome = document.createElement('p');
    alunaNome.innerHTML = aluna;
    document.getElementById('lista').appendChild(alunaNome);
}