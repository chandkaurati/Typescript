

const greet = (name:string):void=>{
   console.log("hello" + " " + name)
}

function loginUser(name : string, email:string, isPaid : false){
    console.log(`hey ${name} you are logged in succefully`)
}


type fnType = string | number

function genrateRandomNumber():fnType{
  return Math.floor(Math.random() * 10 + 1)
}

const state = ["indor", "nagput", "mumbai"]

state.map((city):string=>{
    return  city
})

function fail():never{
    throw new Error("something went wrong")
}

greet("chand")