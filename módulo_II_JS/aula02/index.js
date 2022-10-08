/*const alunas = ['Veronica', 1, 'Luísa', 2, 'Amanda', 3];

console.log(alunas.length);
console.log('ARRAY ORIGINAL', alunas);

//push adiciona item no fim do array
alunas.push('Drika');
alunas.push('Paula');
alunas.push('Nadja');

console.log(alunas.length);
console.log('ARRAY MODIFICADO', alunas);

//pop remove o último item do array
alunas.pop();
alunas.pop();

console.log(alunas.length);
console.log('REMOVENDO VALORES', alunas)

alunas.forEach((nomes) => {
    console.log(nomes);
}) */

/*
const linguagens = ['JS', 1, 2, 3, 'HTML', 'CSS'];

linguagens.forEach((linguagem) => {
    if (isNaN(linguagem) == true) {
        console.log(linguagem);
    }
})
*/

const alunas = ['Veronica', 'Luísa', 'Amanda'];

const cursos = ['JS', 'CSS', 'HTML'];

const pretaLab = [alunas, cursos];

const cursosLivres = ['MinasProgramam', pretaLab, 'Programaria'];

//console.log(pretaLab[0][1])
console.log(cursosLivres[1][1][2])
