function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

function logginIdentityA<T>(arg: Array<T>): Array<T> {
  console.log(arg.length);
  return arg;
}