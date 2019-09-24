let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;

// ReadonlyArray<T> removes all the mutating methods,
// so you can make sure you don't change your arrays after creation

ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!

a = ro as number[];