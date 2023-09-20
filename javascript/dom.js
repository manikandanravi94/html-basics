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