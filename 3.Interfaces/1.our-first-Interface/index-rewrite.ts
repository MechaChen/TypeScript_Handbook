interface LabeledValue {
  label: string;
}

function printLabelR(labelObj: LabeledValue) {
  console.log(labelObj.label);
}

let myObjR = { size: 10, label: 'Size 10 Object' };
printLabelR(myObjR);

