// class Employee{
//     firtName;
//     lastName;

//     constructor(firstName, lastName){
//         this.firtName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName(){
//         console.log(`${this.firtName} ${this.lastName}`);
//     }
// }

// const employee = new Employee('Mark', 'Smith');
// employee.getFullName();

class Employee{

     /***
      * we cannot have more then one constructor in javascript
      */

    // constructor(){
    //     console.log('constructorm')
    // }
    
    constructor(firstName, lastName, empId){
        this.firtName = firstName;
        this.lastName = lastName;
        this.empId = empId;
    }

    getFullName(){
        console.log(`${this.firtName} ${this.lastName}`);
    }
}

const employee = new Employee('Mark', 'Smith', 100);
employee.getFullName();
console.log(employee.empId)
console.log(employee)

const emp1 = new Employee();
console.log(emp1)
