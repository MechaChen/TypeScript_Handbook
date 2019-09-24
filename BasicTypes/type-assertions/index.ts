let someValue: any = "this is a string";

// angle-bracket syntax
let strLength: number = (<string>someValue).length;

// as syntax
let strLength1: number = (someValue as string).length;