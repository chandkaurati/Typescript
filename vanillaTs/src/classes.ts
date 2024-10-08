
class User{
   protected id:string
   private hiddenFeature: string = "feature"
    name:string
    email:string
    password:string
    constructor(id:string,name:string, email:string, password:string){
      this.id = id
      this.name = name
      this.email = email
      this.password = password
    }
}

class Player extends User{
    
}

class Product {
  private sku:string = "344"
  constructor( private id : string, public images : string[], public price:string){}
  get getPoductData():{}{
    return {id: this.id, productImages:this.images, productPrice:this.price}
  }
  get getFeature():string{
    return this.sku
  }
  set setFeature(newval:string){
     this.sku = newval
  }
}

const productOne = new Product("532566", [""], "353")
const feature = productOne.getFeature
console.log(feature)
