import {  Login, User } from "./interface"

interface Address{
    street: string;
    city: string;
    state: string;
    postcode: string;
}
class Employee implements Login
 {
    #id: number;
    
    protected name: string;

    address: Address;

    static getEmployeeCount() : number {
        return 50;
    }

    constructor(id: number, name: string, address: Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    };

    getNameWithAddress() : string {
       return `${this.name} stays at ${this.address}`;
    }

    

    get empId() : number {
        return this.#id;
    }

    set empId(id : number) {
        this.#id = id;
    } 

    login(): User {
        return {name: this.name, id: this.#id, email: `${this.name}@company.com`}
    }

}

class Manager extends Employee {

    constructor(id: number, name: string, address: Address){
        super(id,name,address);
    };

   static getEmployeeCount() : number {
        return 10;
    }


    getNameWithAddress() : string {
        
       return `${this.name} is a manager at ${this.address}`;
    }

}

let john = new Employee(1,"John",{street: "hope", city : "new york city",state: "new york", postcode: "12345"});

console.log(john);

console.log(john.empId);
john.empId=100;
console.log(john.empId);

console.log(john.getNameWithAddress());

let mike = new Manager(2,"Mike",{street: "9th", city : "queens",state: "new york", postcode: "48941"});

console.log(mike);

console.log(mike.getNameWithAddress());
console.log(Employee.getEmployeeCount());
console.log(Manager.getEmployeeCount());

console.log(john.login());