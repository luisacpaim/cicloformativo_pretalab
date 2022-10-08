const senha = '123456';
let senhaDigitada;

/* !senhaDigitada === senhaCerta == false === senhaCerta != true*/

do {
    senhaDigitada = prompt('Digite sua senha: ')
    console.log(senhaDigitada)
} while (senha != senhaDigitada);

