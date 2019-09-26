interface LabeledValue2 {
  label: string;
};

function printLabel2(labelObj: LabeledValue2) {
  console.log(labelObj.label);
};

let myObj2 = { size: 10, label: 'Size 10 object' };

printLabel2(myObj2);