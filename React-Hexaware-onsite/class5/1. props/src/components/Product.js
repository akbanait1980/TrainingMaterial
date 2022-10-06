import React from 'react';

const Product = (props) => {
    const { pid, name, price, mrp } = props;
    return (
        <tr>
            <td>{ pid }</td>
            <td>{ name }</td>
            <td>{ price }</td>
            <td>{ mrp }</td>
        </tr>
    )
}
export default Product;