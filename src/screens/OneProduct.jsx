import React, { useEffect, useState } from "react";
import Base from "./components/Base";
import { useParams } from "react-router-dom";
import axios from "axios";

const OneProduct = ({ match }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const { name, price, description, image } = product;

  const { id } = useParams();

  const getProductDetails = (id) => {
    axios
      .get(`http://localhost:8080/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct({
          name: res.data.name,
          price: res.data.price,
          description: res.data.description,
          image: res.data.image,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleclick = () => {};

  return (
    <>
      <Base>
        <div className="conatiner">
          <div className="card border border-dark my-3">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={image}
                  style={{ width: "600px", height: "60vh" }}
                  className="img-fluid rounded-start"
                  alt=""
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h4 className="card-title">{name}</h4>
                  <p className="card-text my-2">PRICE : Rs {price}</p>
                  <p className="">{description}</p>
                  <button onClick={handleclick} className="btn-success btn-lg">
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Base>
    </>
  );
};

export default OneProduct;
