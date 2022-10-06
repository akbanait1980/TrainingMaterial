import React from "react";

const Product = (props) => {
  const { title, price, description, image } = props.data;
  return (
    <div class="col-sm-4">
      <div class="card">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          {/* <p class="card-text">{description}</p> */}
          <h1> <span>&#8377;</span> {price}</h1>
          <a href="#" class="btn btn-primary btn-block">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
