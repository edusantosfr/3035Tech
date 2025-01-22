const names = ['Eduardo', 'João', 'Carla', 'Gustavo']

console.log(names);

const primeiro = names[0];
console.log(primeiro);

names.push('Carlos');
names.unshift ('Amanda');

names.pop();
names.shift();

console.log(names.length);
console.log(!!names.length); //retorna boolean

const namePosition = names.indexOf('Carla'); //onde está o item
// console.log(namePosition);
// const newList = names.splice(namePosition, 2);

// console.log(newList);

console.log(names);

names.sort();

console.log(names);