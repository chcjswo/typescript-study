{
    /**
     * Type Assertions 똥
     */
    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); // 🤢

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    // const numbers = findNumbers();
    const numbers = findNumbers()!;
    // numbers.push(2);
    numbers!.push(2); // 정말정말 장담하는 경우 사용

}