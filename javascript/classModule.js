export class Test {
    name;
    constructor(){
        
    }
    print(){
      return `HI ${this.name}`;
    }
    setName(name){
        this.name=name;
    }

    getName(){
        return `${this.name}`;
    }
}