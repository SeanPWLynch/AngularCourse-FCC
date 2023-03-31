export interface User {
  id: number;
  name: string;
  age?: number;
  email: string;
}

let {name: userName, email: userLogin} : User = { id: 1, name: "Sean", email: "sean@internet" };


interface Employees extends User {
    salary: number;
}

let employee: Employees = { id: 2, name: "Sean Employee", email: "sean@internet", salary: 50000 };

export interface Login {
    login(): User;
}

let [user1,user2,...restUsers]: User[] = [
    {id: 2, name: "John", email: "John@internet"}, 
    {id: 3, name: "Michael", email: "Michael@internet"}, 
    {id: 4, name: "Matthew", email: "Matthew@internet"}, 

]

console.log(user1);
console.log(user2);
console.log(restUsers[0]);