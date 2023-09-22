const view1 = document.getElementById("view1");
console.log(view1);
//getelementbyid -> vl fetch specific id element from the document
//queryselector -> vl fetch anything from the document to fetch the
//  specific id via query selector.. we have to give #id
const view2 = document.querySelector("#view2");
console.log(view2);

console.log(view1.childElementCount);
console.log(view1.getElementsByTagName("div"));
console.log(view1.getElementsByClassName("view1"));
//above item returns html elements because it fetch value by specific property like tag or class name
//where as below one search the whole page and query and hence it returns node list
//difference between both is html element allow us to use the element here via property
//nodelist will allow as to access the element via index for ex:1 to 12 in this scenario
console.log(view1.querySelectorAll("div"));
const nodeView = view1.querySelectorAll("div");
nodeView[0].style.backgroundColor = "grey";
//example below to access and assign node elements
for (let i = 0; i < nodeView.length; i++) {
  if (i % 2 == 0) {
    console.log(nodeView[i]);
    nodeView[i].style.backgroundColor = "green";
  }
}

view1.style.display = "flex";
view2.style.display = "flex";
view2.style.backgroundColor = "brown";
view2.innerHTML = "<p>Testing DOM</p>";
const appendDiv =document.createElement("p");
appendDiv.innerHTML="appended via append child and created via create element";
view2.appendChild(appendDiv);
console.log(document.activeElement);

// example below to access and assign to html elements

const divs = document.getElementsByTagName("div");
console.log(divs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

evenDivs.forEach((div) => { 

    div.style.width="200px";
  div.style.backgroundColor = "pink";
});

console.log(nodeView[0].parentElement);

console.log(nodeView[0].parentElement.children);

console.log(nodeView[0].parentElement.childNodes);

console.log(nodeView[0].parentElement.firstElementChild.nextElementSibling);


console.log(nodeView[0].parentElement.lastElementChild.previousSibling);

console.log("last element child will take the last element from the html tag. ex here div is the last tag" );
console.log(nodeView[0].parentElement.lastElementChild);

console.log("last child will return all the elements including div and text. it consider both as element ex below" );
console.log(nodeView[0].parentElement.lastChild);

//below line will return the complete element from the last Element
console.log(nodeView[0].parentElement.lastElementChild.previousElementSibling);

//below line considers the last child as text and hence previous child is a "div" tag and hence it returns the div tag as response
console.log(nodeView[0].parentElement.lastChild.previousSibling);

console.log("adding elements and removing elements");

console.log(view2);

const view2Childrens =view2.childNodes;


view2Childrens[0].style.display="none";

//remove child sample by accessing the childs in the element

view2.removeChild(view2.firstChild.nextElementSibling);
console.log(view2.children);

//first element child and first child are common in html collection
console.log(view2.firstElementChild);

console.log(view2.firstChild);

// already view2 is flex and column direction
// view2.style.display="flex";
// view2.style.alignItems="center";
view2.style.justifyContent="space-around";
view2.style.flexDirection="column";
view2.style.flexWrap="wrap";

const appendDivFunction = (parent, iter) =>{ 

const div = document.createElement("div");
div.style.display="flex";
div.style.width="100px";
div.style.height="100px";
div.style.backgroundColor="grey";
div.style.color="white";
div.style.alignItems="center";
div.style.justifyContent="center";
div.innerHTML="<p></p>";
div.textContent=iter;
parent.appendChild(div);
};


for(let i=1;i<=12;i++){
appendDivFunction(view2,i);
}

// view2.removeChild(view2.firstElementChild);