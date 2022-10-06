// not using default parameter
function say(message){
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}

say('hello');  // hello
say();  // undefined


// using defaut parameter
function say2(message = 'Hi'){
    console.log(message)
}

say2('Hello');
say2();

// var a = 10;
// var b = '10';

// console.log(a == b)  // true
// console.log(a === b) // false