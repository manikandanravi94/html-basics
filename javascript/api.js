import { learn } from "./modulesSample.js";
import { code as codeDaily } from "./modulesSample.js";
import *  as module from "./modulesSample.js";
import { Test } from "./classModule.js";

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("ready state event completed");
    initApp();
  }
});

const myData = ["Learn","Code","Repeat"];

const initApp = () => {
    const obj = {
        name : "Mani",
        learnMethod: myData,
        log: function(){
            console.log(this.name);
        }
    };

    window.sessionStorage.setItem("testData",JSON.stringify(obj));

    
const responseObj= JSON.parse(sessionStorage.getItem("testData"));

console.log(responseObj.learnMethod);


learn();
console.log(codeDaily());
module.repeat();
};

const obj =new Test();
obj.setName("Mani");

console.log("via getter : "+obj.getName());

console.log(obj.print());
