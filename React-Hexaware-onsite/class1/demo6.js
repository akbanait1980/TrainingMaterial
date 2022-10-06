const odd = [1,3,5,7,9];
const even = [2,4,6,8];

const combined = [...odd, 100, 200, ...even];
console.log(combined)

const employee = {
    id: 1,    
    firstName: 'Mark',
    lastName: 'Smith',
    email: 'm@gmail.com',
    // status: false
}

const updateEmployee = {
    ...employee,
    status: true,
    id: 2
}

console.log(employee);

console.log(updateEmployee)