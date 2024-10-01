const myArray:string[] = ["value1", "value2"]
myArray.push("value3")

const arr:Array<number> = []

type product = {
  price : number,
  images: string[],
  sku : number
}

const products:product[] = []
products.push({price:35, images : [""], sku:53})

const mlModels:number[][] = [
    [343,553,5353]
]

let score: number | string ;
score = "343"

type User = {
    name : string,
    id : number
}
type admin = {
    name : string,
    id : number
}

let  user5: User | admin = {id : 54, name : "chand"}

function getUserID(id:string | number){
    if(typeof id === "string"){
        return id.trim().toLowerCase()
    }else{
      return id 
    }
}

const mydata:(number | string)[] = [5,4,"4"]
const myseat:"aisle" | "middle" | "window" = "middle"