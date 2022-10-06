import React from 'react';

const Student = (props) => {
    const { id, name, email } = props.data;
    return(
        <div>
            <h1>Id: { id } {name} { email }</h1>
        </div>
    )
}
export default Student;