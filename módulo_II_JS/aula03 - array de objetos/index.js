const alunas = [
    {
        nome: 'Luísa',
        nota: 5.5
    },
    {
        nome: 'Maira',
        nota: 9,
        cidade: 'Rio de Janeiro'
    },
    {
        nome: 'Ana',
        nota: 6.5
    },
    {
        nome: 'Cristina',
        nota: 7
    }    
]



alunas.filter((aluna) => {
    if (aluna.nota >= 7) {  //a primeira nota/aluna se refere ao objeto
        console.log(`A aluna ${aluna.nome} está aprovada!`)
    } else {
        console.log(`A aluna ${aluna.nome} está reprovada!`)
    }
})