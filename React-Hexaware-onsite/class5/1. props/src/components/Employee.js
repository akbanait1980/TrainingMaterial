import React from 'react';

const Employee = (props) => {
    console.log(props)
    return(
        <h1>Employee Id = { props.id }, Name = { props.name }, Email="m@gmail.com"</h1>
    )
}
export default Employee;