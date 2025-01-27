const tempFah = 10

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 5 / 9
    
    return `A temperatura ${fahrenheit}F é equivalente a ${celsius.toFixed(2)}C`
}

console.log(fahrenheitToCelsius(tempFah))