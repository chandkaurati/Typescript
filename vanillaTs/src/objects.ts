

interface objecType {
    id : string,
    name : string,
    email : string,
    images? : string[]
}

let user1:objecType ={
    id: "24252ryrq",
    name : "chand",
    email :"chandkaurati@gmail.com",
    images : [""]
}

function createCource():{name : string}{
    return {name : "Chand"}
}

// type aliases

type Product = {
   readonly  _id : string;
    iamges : string[];
    price : number;
    isinStock : boolean;
    sku?: number
}


function createProduct(product:Product){
}

createProduct({_id : "535ew", iamges: [""], price:35, isinStock : true})

type cardNumber = {
     cardnumber : number
}
type expiryDate = {
     expiry : string
}
type Cvv = {
     cvv : number
}
type cardDetails = cardNumber & expiryDate & Cvv &{
    owenerName : string
}

const creeditCardDetails:cardDetails = {
    cardnumber : 242535353,
    expiry :  Date.now().toLocaleString(),
    cvv : 3455,
    owenerName : "Chand kaurati"

}