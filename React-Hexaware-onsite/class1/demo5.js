function foo(...args){
    console.log(...args)
    // console.log(typeof args)
    // console.log(args.length)
}

// foo(1)
// foo(1,2)
// foo(1,2,3)
// foo(1,2,3,4,5,6,7)
// foo(1, 'A', true, 10.00)

// it should use ... as a prefix
// it should last parameters in the list of parameters

function foo2(a, b, ...args){
    console.log(a)
    console.log(b)
    console.log(...args)
}

//foo2(1,2,3,4,5,6)

foo2(1,2)