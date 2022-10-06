// old syntax
function hello(name){
    return 'Hello '+ name;
}
console.log(hello('mark'));


// new syntax: Arrow
let welcome = (name) => 'Welcome '+ name;
console.log(welcome('Paul'));
console.log(typeof welcome)

console.log(typeof welcome)

let addnumber = (a, b) => a + b;
console.log(addnumber(100, 200))

// only in case 
let Hi = name => 'Hi '+ name;
console.log(Hi('abc'))

let foo = () => ''

let sum = (a, b) => a + b;
console.log(typeof sum)
console.log(typeof sum(10, 20))
console.log(typeof sum(10, 'abc'))
console.log(sum(10, 'abc'))

console.log(10 + 20 + 30 + 'Hello'+ 100 + 200 + true);  // 60Hello100200true

/***
 * 
 * () - list of parameters or empty
 * => arrow opeartor or fat arrow
 * expression - the logical statement 
 * 
 */

//  const sum = (a, b) =>  a + b;
//  console.log(sum + 10)