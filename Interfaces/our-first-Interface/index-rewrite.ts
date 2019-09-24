interface LabeledValue {
  label: string;
}

function printLabel1(labelObj: LabeledValue) {
  console.log(labelObj.label);
}

let myObj1 = { size: 10, label: 'Size 10 Object' };
printLabel1(myObj1);

