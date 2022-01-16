import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="card border">
      <img
        src={product.image}
        style={{ maxWidth: "100%", height: "300px" }}
        className="card-img-top"
        alt=""
      />
      <div className="card-body">
        <Link to={`/products/${product._id}`}>
          <h5 className="card-title">{product.name}</h5>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
