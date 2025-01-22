let pessoa = {
    nome: 'Eduardo',
    idede: 21,
    cpf: '00000000000',
    pets: ['Cachorro', 'Gato', 'Peixe'],
    brasileiro: true,
    
    carros: {
        ford: {
            cor: 'Branca',
            placa: '1234'
        }
    },

    andar: function () {
        console.log('A pessoa andou');
    }
}
pessoa.nome = 'Pedro';

console.log(pessoa);

console.log(pessoa.nome);

console.log(pessoa.carros);

console.log(pessoa.pets[0])

console.log(pessoa.andar());