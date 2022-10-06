import React from 'react';

const Person = (props) => {
    console.log(props)
    return (
        <h1>Hi my name is {props.name}</h1>
    )
}
export default Person;