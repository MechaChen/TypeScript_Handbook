let someValue: any = "this is a string";

// angle-bracket syntax
let strLength: number = (<string>someValue).length;

// as syntax
let strLengthA: number = (someValue as string).length;