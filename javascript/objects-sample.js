const movie = {
    "actor":"Vijay",
    "music":"Anirudh",
    "director":"Lokesh",
    "producer":"Mani"
}

console.log(movie);

// We can use the property of the object by using below value

console.log(movie.actor);

console.log(movie["producer"]);

//destructring object
//property of the object has to match the exact value of the object
const {actor,test} = movie;

console.log(actor);

//test property doesn't present in the object and hence it will return undefined 
console.log(test);

for (let property in movie){
    console.log(movie[property]);
}

console.log(" value transferred via function : " + music(movie));

function music({music}){
    return music;
}

//class 

class Rectangle {
    #height;
    #breadth;
    constructor(){

    }

    setHeight(height){
        this.height=height;
    }

    setBreadth(breadth){
        this.breadth=breadth;
    }

    area(){
        return console.log(this.height*this.breadth);
    }

}

const rectangleObj = new Rectangle();
rectangleObj.setHeight(5);
rectangleObj.setBreadth(10);
rectangleObj.area();
// console.log("area of a rectangle : " + rectangleObj.area());

try{
 rectangleObj.breadth=10;
}catch(error){
    console.error(error);
}

class ApiRequest {
    #firstName;
    #lastName;

    constructor(){

    }

    setFirstName(firstName){
        this.firstName=firstName;
    }

    setLastName(lastName){
        this.lastName=lastName;
    }

    getFirstName(){
        return this.firstName;
    }

    getLastName(){
        return this.lastName;
    }
    
}

const apiRequestObj = new ApiRequest();
apiRequestObj.setFirstName("Manikandan");
apiRequestObj.setLastName("Ravi");

const jsonObj = JSON.stringify(apiRequestObj);

console.log(jsonObj);
console.log(typeof jsonObj);

const jsonResponse = JSON.parse(jsonObj);
//below piece of code is not working as it is not able to call the methods from the response obj
try {
console.log(jsonResponse.getFirstName());
}catch(TypeError){
    //we have few methods in console like warn,error and log
    console.warn("Type error handled");
}finally {
    console.error("Finally block executed");
}
//below code able to return value

console.log(jsonResponse.firstName);
