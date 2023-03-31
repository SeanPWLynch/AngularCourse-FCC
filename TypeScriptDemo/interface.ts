export interface User {
  id: number;
  name: string;
  age?: number;
  email: string;
}

let user: User = { id: 1, name: "Sean", email: "sean@internet" };

interface Employees extends User {
    salary: number;
}

let employee: Employees = { id: 2, name: "Sean Employee", email: "sean@internet", salary: 50000 };

export interface Login {
    login(): User;
}