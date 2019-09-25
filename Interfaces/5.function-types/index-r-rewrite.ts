interface SearchFuncB {
  (source: string, subString: string): boolean;
};

let myFuncB: SearchFuncB;
myFuncB = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
}