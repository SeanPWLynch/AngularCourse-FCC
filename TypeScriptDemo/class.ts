class Employee {
    #id: number;
    
    protected name: string;

    address: string;

    static getEmployeeCount() : number {
        return 50;
    }

    constructor(id: number, name: string, address: string){
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
}

class Manager extends Employee {

    constructor(id: number, name: string, address: string){
        super(id,name,address);
    };

   static getEmployeeCount() : number {
        return 10;
    }


    getNameWithAddress() : string {
        
       return `${this.name} is a manager at ${this.address}`;
    }

}

let john = new Employee(1,"John","Highway 71");

console.log(john);

console.log(john.empId);
john.empId=100;
console.log(john.empId);

console.log(john.getNameWithAddress());

let mike = new Manager(2,"Mike","Interstate 66");

console.log(mike);

console.log(mike.getNameWithAddress());
console.log(Employee.getEmployeeCount())
console.log(Manager.getEmployeeCount())