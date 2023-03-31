"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = { id: 1, name: "Sean", email: "sean@internet" };
let employee = { id: 2, name: "Sean Employee", email: "sean@internet", salary: 50000 };
let [user1, user2, ...restUsers] = [
    { id: 2, name: "John", email: "John@internet" },
    { id: 3, name: "Michael", email: "Michael@internet" },
    { id: 4, name: "Matthew", email: "Matthew@internet" },
];
console.log(user1);
console.log(user2);
console.log(restUsers[0]);
