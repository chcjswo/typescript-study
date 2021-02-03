{
    // Array
    const fruits: string[] = ['apple', 'banana'];
    const scores: Array<number> = [1, 2, 3];

    function printArray(fruits: readonly string[]) {

    }

    // Tuple -> interface, type alias, class
    // 권장하지 않음
    let student: [string, number];
    student = ['tony', 123];
    student[0]; // name
    student[1]; // 123
    const [name, age] = student;
    console.log(name);
    console.log(age);

}