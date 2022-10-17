import React from "react";
import './Product.css'

const Product = props => {
  return (
    <div id="product">
      <figure>
        <img src={props.src} alt={props.alt} />
        <figcaption id="title">{props.title}</figcaption>
        <figcaption id="subtitle">{props.subtitle}</figcaption>
      </figure>
      <hr />
      <div id="spans">{props.tags}</div>
      <hr />
    </div>
  );
};

export default Product;
