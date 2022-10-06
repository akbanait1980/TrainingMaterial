class Employee{
    empId;
    firstName;
    lastName;
    email;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
class FullTimeEmployee extends Employee{
    annualSalary;
}

class PartTimeEmployee extends Employee{
    hourSalary;
}

const fte = new FullTimeEmployee();
fte.firstName = 'Mark';
fte.lastName = 'Smith';

const pte = new PartTimeEmployee();
pte.firstName = 'Paul';
pte.lastName = 'Watson';

fte.getFullName();
pte.getFullName();