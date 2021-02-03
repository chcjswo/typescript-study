{
    /**
     * Javascript
     * Primitive: number, string, boolean, bigint, symbol, undefine, null
     */
    const num: number = 1;

    const str: string = "Hello";

    const boal: boolean = true;

    // undefine
    let name: undefined; // 사용하지 않음
    let age: number | undefined;
    age = undefined;
    age = 1;

    // null
    let person = null;
    let person2: string | null;
    let empty: null;  // 똥

    function find(): number | undefined {
        // return 1;
        return undefined;
    }

    // unknown // 똥
    let notSure: unknown = 0;
    notSure = 'He';
    notSure = true;

    // any // 똥
    let anything: any = 0;
    anything = 'Hello';

    // void
    function print(): void {
        console.log('hello world');
        return;
    }
    let unusable: void = undefined;

    // never
    function throwError(message: string): never {
        // message -> server (log)
        throw new Error(message);
        // while (true) {}
    }
    let neverEnding: never // 똥

    // object
    let obj: object; // 똥
    function acceptSomeObject(obj: object) {

    }
    acceptSomeObject({name: 'tony'});
    acceptSomeObject({animal: 'dog'});

    print();

}