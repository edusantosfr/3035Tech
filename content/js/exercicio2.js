let fruta = 'Laranja';

console.log(`Fruta: ${fruta}`)

// if (fruta === 'Laranja') {
//     console.log('Valor da laranja é R$ 0,45 cada');
// } else if (fruta === 'Mamão') {
//     console.log('Valor do mamão é R$ 0,80 cada');
// } else if (fruta === 'Banana') {
//     console.log('Valor da banana é R$ 0,30 cada');
// } else if (fruta === 'Morango') {
//     console.log('Valor do morango é R$ 0,30 cada');
// } else {
//     console.log('Desculpa, não temos essa fruta');
// }

switch (fruta) {
    case 'Laranja':
        console.log('Valor da laranja é R$ 0,45 cada');
        break;
    case 'Mamão':
        console.log('Valor do mamão é R$ 0,80 cada');
        break;
    case 'Banana':
        console.log('Valor da banana é R$ 0,30 cada');
        break;
    case 'Morango':
        console.log('Valor do morango é R$ 0,30 cada');
        break;
    default:
        console.log('Desculpa, não temos essa fruta');
        break;
}