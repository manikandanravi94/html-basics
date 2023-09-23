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
};


