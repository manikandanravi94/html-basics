let sampleVar="mani";
console.log(sampleVar);
// let is used to define a variable which can be changed at anytime
sampleVar=55;
console.log(sampleVar);
sampleStringVar="divya";
console.log(sampleVar+sampleStringVar);
// + will append if any of the value is string
let sampleNumStrVar='44';
console.log("typeof sample string(44) : "+typeof(sampleNumStrVar));
console.log("sample for typecast from string to number" + Number(sampleNumStrVar)+10);

// sample string functions

let sampleStr ="Manikandan";
console.log("upper() : "+sampleStr.toUpperCase());
console.log("toLowerCase() : "+sampleStr.toLowerCase());
console.log("length : "+sampleStr.length);
console.log(isNaN(sampleStr));

//sample Math functions

let sampleNum = 5;

console.log(Math.pow(sampleNum,sampleNum));
console.log(Math.round(4.45));
console.log(typeof(45.45));
console.log(Math.random());
// random value given between 0 and 1
console.log("max sample : " + Math.max(5,8,100,45));

// code challange

let str = "Manikandan Ravi";

for(let i=0;i<5;i++){
   console.log(str.charAt(Math.random()*10));
}
