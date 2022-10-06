# Events
an event is an action that could be triggered by user interaction or can be the result of system
generated event

in react like javascript it has its specific methods to handle the events, which are conceptually
similar to handling event on DOM element
for example
- click
- change
- mouseover
- keyup

event handles will be instance of syntethic events, a cross browser wrapper around the browser native
event it has same interface as browser native event including preventDefault() except the event work
identically across all browser

react handle its event using its own event handling system known as synthatice events

there are some syntactical difference in handling event with react from handling the event on DOM
1. React events are name as camelCase instead of lowercase
onclick  -   onClick
onchange -   onChange

2. jsx expression is passed as the event handler instead of a string
onclick="handler()"      onClick={ handler }

3. we cannot return false in react to prevent a default behaviour instead we can use explicity 
preventDefault to prevent the same
onclick="false validate()"


- in react the this keyword should represent the component that own the method
- if you want to use regular function instead of arrow function then you have the bind this
to the componentinstance using bind() method


# Why arrow instance?
the this keyword in class component is not define by default, so with regular function this keyword
represent the object that called the method which can be anything like global object or html button

arrow function should be used as with arrow function this will always represent the object that defined
the arrow function

# Note: 
Lifecycle method - class component but cannot be use or avaialable in function components
React Hook - functional component cannot be use in class compnonent  


# conditional rendering
- if / else
- element value
- ternery opeartor
- circuit breaker

> turnery operator
(condition) ? 'true statement' : 'false statement'


> circuit breaker
condition && 'true statement'
!condition && 'false statement'



