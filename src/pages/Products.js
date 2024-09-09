import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1>This is the Products page!</h1>
      <ul>
        <li><Link to='/products/p1'>A book</Link></li>
        <li><Link to='/products/p2'>Comfy house</Link></li>
        <li><Link to='/products/p3'>Mercedes GLE 350</Link></li>
      </ul>
    </section>
  );
};

export default Products;
