function identity<T>(arg: T): T {
  return arg;
}

function logginIdentity<T>(arg: T): T {
  console.log(arg.length);
  return arg;
}