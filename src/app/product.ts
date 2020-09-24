export class Product  {
    id: string;
    name: string;
    price: number;
    quantity: number;
    description: string;
    constructor(id: string = "", name : string = "", price: number = 0 ,quantity: number = 0, description:string = ""){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}