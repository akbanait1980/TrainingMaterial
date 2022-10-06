import React from 'react';
import Product from './Product';

const ProductList = () => {
    return(
        <div className='container'>
            <h1 className="text-centrer">All Products</h1>
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr>
                        <th>Pid</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Mrp</th>
                    </tr>
                </thead>
                <tbody>
                   <Product pid="101" name="Laptop" price="10000" mrp="90000" />
                   <Product pid="102" name="Desktop" price="80000" mrp="60000" />
                   <Product pid="103" name="Laptop" price="40000" mrp="60000" />
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;