/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Command = 'add' | 'substract' | 'multiply' | 'divide'| 'remainder';

function calculate(command: Command, number: number, number2: number) {
    switch (command) {
        case 'add':
            return number + number2;
        case 'substract':
            return number - number2;
        case 'multiply':
            return number * number2;
        case 'divide':
            return number / number2;
        case 'remainder':
            return number % number2;
        default:
            throw Error('unknown command');
    }
}
