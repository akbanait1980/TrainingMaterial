class Parent{
    constructor(x){
        console.log('parent constructor: '+ x)
    }
}

class Child extends Parent{
    constructor(y){
        super(y);
        console.log('child constructor')
    }
}

const child = new Child(100);
