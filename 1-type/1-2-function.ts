{
    // function jsAdd(num1, num2) {
    //     return num1 + num2;
    // }

    // function add(num1: number, num2: number): number {
    //     return num1 + num2;
    // }

    // function fetchNum(id: string): Promise<number> {
    //     // code ...
    //     // code ...
    //     // code ...

    //     return new Promise((resolve, reject) => {
    //         resolve(100);
    //     });
    // }

    // optional paremter
    function printName(firstname: string, lastname?: string) {
        console.log(firstname);
        console.log(lastname);
    }

    printName('test', 'tony');
    printName('tony');

    // default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a, b) => a + b);
    }

    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3, 4));
    console.log(addNumbers(1, 2, 3, 5, 5));
}