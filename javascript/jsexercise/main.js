console.log("test");
const main = document.querySelector("main");
const colorDetail = document.querySelector(".colorDetail");
console.log(colorDetail);


const colors =['green', 'yellow','brown','orange','grey','blue'];

function getRandomColor(){
    return colors[Math.floor((Math.random()*10)/2)];
}


function changeColor(){
  let color=getRandomColor();
  console.log(`${color}`);
  main.style.backgroundColor=`${color}`;
 colorDetail.textContent="backgroundColor :" + `${color}`;
}

document.querySelector("#clickButton").addEventListener("click",changeColor);