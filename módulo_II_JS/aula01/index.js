// let idade = 30;

// if (idade >= 18 && idade < 70) {
//     console.log('Você deve votar e o voto é obrigatório')
// } else if (idade >= 16 && idade < 18 || idade >= 70) {
//     console.log('Você pode votar, mas não é obrigatório')
// } else {
//     console.log('Você não pode votar')
// }

// function somar(num1, num2) {
//     const resultado = num1 + num2
//     console.log(resultado)
// }

// function bemVinda(nome, idade) {
//     console.log("Bem vinda, " + nome + ". Parabéns pelos " + idade + "." );
// }

// bemVinda('Nath', '32')

function possoVotar (nome, idade) {
    console.log("Olá, " + nome + "!")
    if (idade >= 18 && idade < 70) {
        console.log('Você deve votar e o voto é obrigatório')
    } else if (idade >= 16 && idade < 18 || idade >= 70) {
        console.log('Você pode votar, mas não é obrigatório')
    } else {
        console.log('Você não pode votar')
    }
}

possoVotar("Ana", 10);
possoVotar("Joelma", 16);
possoVotar("Daniela" ,18);
possoVotar("Maria", 70);
possoVotar("Laura", 80);