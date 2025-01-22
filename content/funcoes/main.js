function nomeDaFuncao(parametro, parametro2){
    //instruções a serem executadas

    return "retorno da funcao";
}

// ---------------------------------------------

function example1(parameter){
    console.log(parameter + ' da função')
}

example1('Primeiro exemplo')
example1('Segundo exemplo')
example1('Terceiro exemplo')
example1()

const text = 'Quarto Exemplo'
example1(text)

// ---------------------------------------------

function example2(parameter) {
    return parameter.toLowerCase() + '!!!!'
}

const lower = example2('FUNÇÕES JAVASCRIPT')

console.log('exemplo-2 ->', lower)

// ---------------------------------------------

const example3 = () => "Hello World"

console.log('exemplo 3-> ' + example3)

// ---------------------------------------------

const example4 = (num1 = 1, num2 = 1, num3 = 1) => {
    console.log('num1' + num1)
    console.log('num2' + num2)
    console.log('num3' + num3)

    return (num1/num2) + num3
}

console.log('exemplo 4-> ' + example4(100, 25, 9))

const operator = example4(5, 5, 5)
console.log('operator', operator)

// ---------------------------------------------

let sobreNome;

const example5 = () => {
    let nome;
    nome = 'Aline'
    sobreNome = 'Capoani'

    const chamandoFuncao = example2('FUNÇÃO 2 CHAMADA NA FUNÇÃO 5')


    return chamandoFuncao
}

console.log('exemplo 5->' + example5)
console.log('nome ->' + nome)
console.log('sobreNome ->' + sobreNome)