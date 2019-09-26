interface SearchFuncA {
  (source: string, subString: string): boolean;
};

let myFuncA: SearchFuncA;
myFuncA = function(src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
}