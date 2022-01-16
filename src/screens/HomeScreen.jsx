import React, { useState, useEffect } from "react";
import { getProducts, isAuthenticated, signout } from "../helper";
import Base from "./components/Base";
import ProductCard from "./components/ProductCard";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const allProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    allProducts();
  }, [isAuthenticated()]);

  return (
    <>
      <Base>
        <div className="row m-5">
          <div className="row justify-content-center">
            {products.map((product) => {
              return (
                <div key={product._id} className="col-4 m-4">
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </Base>
    </>
  );
};

export default HomeScreen;
