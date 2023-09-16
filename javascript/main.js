let sampleVar = "mani";
console.log(sampleVar);
// let is used to define a variable which can be changed at anytime
sampleVar = 55;
console.log(sampleVar);
sampleStringVar = "divya";
console.log(sampleVar + sampleStringVar);
// + will append if any of the value is string
let sampleNumStrVar = "44";
console.log("typeof sample string(44) : " + typeof sampleNumStrVar);
console.log(
  "sample for typecast from string to number" + Number(sampleNumStrVar) + 10
);

// sample string functions

let sampleStr = "Manikandan";
console.log("upper() : " + sampleStr.toUpperCase());
console.log("toLowerCase() : " + sampleStr.toLowerCase());
console.log("length : " + sampleStr.length);
console.log(isNaN(sampleStr));

//sample Math functions

let sampleNum = 5;

console.log(Math.pow(sampleNum, sampleNum));
console.log(Math.round(4.45));
console.log(typeof 45.45);
console.log(Math.random());
// random value given between 0 and 1
console.log("max sample : " + Math.max(5, 8, 100, 45));

// code challange

let str = "Manikandan Ravi";

for (let i = 0; i < 5; i++) {
  console.log(str.charAt(Math.random() * 10));
}

let confirmBoolean = confirm("Are you feeling good!");
console.log("value received from UI : " + confirmBoolean);

let promptInput = prompt("Enter your name plz");
while (promptInput == null) {
  alert("Value column can't be empty");
  promptInput = prompt("Enter your name plz");
}
console.log(promptInput ?? "some value to be entered in the name field box");
console.log(typeof(promptInput));
console.log("value received via prompt : " + promptInput);

let k = sum(2,2);

console.log(k);

function sum(a,b){
    return a+b;
}

let x=20;
// let is a block scope
// var is a function scope
var y=30;
console.log(x)

//Arrays

const myShelf = ["Getting richer book", 50,80, true,90.50];

for(let i=0;i<myShelf.length;i++)
{
    //push pop --> add and removes the last element at the array. This operation returns count as the response type
    // shift,unshift -->add and removes the element at the start of the arry. This operation returns boolean as the response type
    myShelf.pop
console.log("type of " + typeof(myShelf[i]) + " value : "+myShelf[i]);
}