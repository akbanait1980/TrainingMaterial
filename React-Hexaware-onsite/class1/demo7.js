const employee = {
    id: 1,
    firstName : 'Mark',
    lastName: 'Watson',
    email: 'm@gmail.com',
    // tag: ['a', 'b', 'c']
}

// let id = employee.id;
// let firstName = employee.firstName;
// let lastName = employee.lastName;
// let email = employee.email;

//console.log(employee.firstName + ' '+ employee.lastName )
//console.log(firstName + ' ' + lastName);

// destructuring
//let { id, firstName, lastName, email } = employee;
let { firstName, lastName, tag } = employee;
console.log(firstName + ' ' + lastName)
// console.log(tag[0])

let scores = [50, 60, 70];
// let a = scores[0];
// let b = scores[1];
// let c = scores[2];

let [a, b, c] = scores;

console.log(a, b, c)


const employees = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' }
]

console.log(employees)

console.log(employee);




