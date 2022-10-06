class Person{
    firstName;
    lastName;

    getFullName(){
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

const person = new Person();
person.firstName = 'Mark';
person.lastName = 'Watson';
person.getFullName();

const person2 = new Person();
person2.firstName = 'Paul';
person2.lastName = 'Smith';
person2.getFullName();