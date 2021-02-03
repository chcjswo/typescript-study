{
    /**
     * Type Aliases
     */
    type Text = string;
    const name: string = 'tony';
    const name2:Text = '123';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };
    const student: Student = {
        name: 'testname',
        age: 20
    };

    /**
     * String Literal Types
     */
    type Name = 'name';
    let tonyname: Name;
    tonyname = 'name';
    type JSON = 'json';
    const json: JSON = 'json';

    type Boal = true;
    const isCat: Boal = true;
}