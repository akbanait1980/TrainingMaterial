// map

/***
 * const newArray = numbers.map(function(a){
 *    return a * 10;
 * })
 * 
 * const newArray =  numbers.map(a => a * 10);
 * 
 */
const numbers = [12,34,56,89];


const newArray =  numbers.map(a => a * 10);

console.log(numbers)
console.log(newArray);


const names = [ 'Mark', 'Paul', 'Watson', 'John' ];
const length = names.map(name => name.length)

console.log(length)

const result = names.map(name => name)
console.log(result)




