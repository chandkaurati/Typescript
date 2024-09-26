console.log("hi typescriopt")
console.log("hi typescriopt")
console.log("hi typescriopt")


function log(a : number):number{
     return a
}

function greet(name:string):string{
    return  `hello ${name}`
}

console.log(44)

const loguser:string = greet("chand")
console.log(loguser)


class product {
     name:string
     price:string
    constructor(name:string, price:string){
        this.name = name
        this.price = price
    }
}


const productone = new product("dashcam", "1234242")
console.log(productone)

let var1 : unknown = "String"
console.log((var1 as string).length)


//  custom types 

type coder = {
     name : string;
     knownFor : string[]
}

const obj:coder={
  name : "typescript ",
  knownFor : ["string"]
}

// type casting 

const alpha:unknown = "alpha"

console.log((alpha as string).length)

class User{
      
    private courceCount:number = 1
    constructor(
        public email : string,
        public name : string
    ){}

   get useremail():string{
     return `${this.email}`
   }

   
}


class Person {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // Getter
    get name(): string {
        return this._name;
    }

    // Setter
    set name(newName: string) {
        if (newName && newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Invalid name");
        }
    }
}


interface TakePhoto {
     cameraMode:string
     filter : string
     short : string 
}

interface instagram {
     createStory():void
}

class Youtube implements TakePhoto, instagram  {  
    // procted
    // public
    constructor(
        public cameraMode : string,
        public filter : string,
        public short : string,
        protected divice : string
    ){}

    createStory(){
      console.log("story created")
    }
}


const user = new Youtube("front", "blur", "back", "vivo")
user.createStory()
{}

// revision 

const name2 : string[] = []
const name3 : readonly string [] = ["hi"]
 
// type infrance

const numbers  = [1,1,2,]
// 
const graph : [x : number, y : number ] = [1.2, 22]


