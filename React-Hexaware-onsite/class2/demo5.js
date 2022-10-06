const employees = [
    { id: 1, name: 'Mark', gender: 'Male' },
    { id: 2, name: 'Paul', gender: 'Male' },
    { id: 3, name: 'Watson', gender: 'Male' },
    { id: 4, name: 'Stacy', gender: 'Female' },
    { id: 5, name: 'Rangel', gender: 'Male' }
];

// Mr.Mark
// Mrs.Stacy

// function transform(employee){
//     if(employee.gender == 'Male'){
//         return 'Mr.'+ employee.name;
//     }else{
//         return 'Mrs.'+ employee.name;
//     }
// }


// const list = employees.map(emp => transform(emp))


// const list = employees.map(emp => {
//     if(emp.gender == 'Male'){
//         return 'Mr.'+ emp.name;
//     }else{
//         return 'Mrs.'+ emp.name;
//     }
// })

for(let emp of employees){
    if(emp.gender == 'Male'){
         console.log('Mr.'+ emp.name)
    }else{
         console.log('Mrs.'+ emp.name)
    }
}

// console.log(list)