//LAÇOS DE REPETIÇÃO

// let i = 0;
// while (i < 11) {
//     let valor = 2 * i;
//     console.log(`2 x ${i} = ${valor}`);
//     i++;
// }

// let salario = 1000;
// while (salario < 5000) { 
//     salario += 500;

//     console.log(`O salário é R$ ${salario}`);
// }

const alunas = [
    {aluna: 'Amanda', nota: 5},
    {aluna: 'Simara', nota: 8.6},
    {aluna: 'Nath', nota: 9},
    {aluna: 'Vera', nota: 6.2}
];

let index = 0;
let somaDasNotas = 0;
let totalAlunas = alunas.length;

do {
    somaDasNotas += alunas[index].nota;
    index++;
} while (index < totalAlunas);
let media = (somaDasNotas / totalAlunas);

console.log(media.toFixed(1))
