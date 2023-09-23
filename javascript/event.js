const outerView = document.querySelector(".outerView");

outerView.addEventListener("click", (event)=>{
    outerView.classList.toggle("blue");
    outerView.classList.toggle("white");
});
console.log(outerView[0]);
// const h2=document.getElementsByTagName("h2").addEventListener("click",contentStyleChange);

const contentStyleChange = (event) =>{
    
    if(event.target.textContent==="click me!"){
    event.target.textContent="clicked - click me back to move to the previous state";
    }else{
        event.target.textContent="click me!";
    }
};
console.log("test query & element");
console.log(document.querySelector("h2"));
const h2=document.querySelectorAll("h2");
console.log(h2.length);
h2.forEach(header =>{
    console.log(header);
});
// document.getElementsByTagName("h2").textContent="test";
document.getElementsByTagName("div").onClick=(event) =>{
    console.log(event.target);
    
    event.target.classList.toggle("brown");
    event.target.classList.toggle("green");
};
const div =document.querySelector("div");
console.log(div);
console.log("test");
document.querySelector("h2").addEventListener("click",contentStyleChange);
// h2.addEventListener("click",contentStyleChange);

