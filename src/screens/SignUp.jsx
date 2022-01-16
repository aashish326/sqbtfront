import React, { useState } from "react";
import Base from "./components/Base";
import { signup } from "../helper";
import axios from "axios";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    loading: false,
    success: false,
  });

  const { name, email, password, error, loading, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    const config = { headers: { "Contnet-Type": "application/json" } };
    axios
      .post(
        `http://localhost:8080/api/signup`,
        { name, email, password },
        config
      )
      .then((res) => {
        console.log(res.data);
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      })
      .catch((err) => {
        console.log(err);
        setValues({
          ...values,
          error: true,
          loading: false,
          success: false,
        });
      });
  };

  const signUpForm = () => {
    return (
      <div className="row p-5 m-5">
        <div className="col-md-6 text-left mx-auto p-3 border border-dark">
          <form>
            <div className="form-group my-2">
              <label className="text-dark">Name</label>
              <input
                className="form-control"
                onChange={handleChange("name")}
                type="text"
                value={name}
              />
            </div>
            <div className="form-group my-2">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                onChange={handleChange("email")}
                type="email"
                value={email}
              />
            </div>

            <div className="form-group my-2">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                className="form-control"
                type="password"
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const loader = () => {
    return (
      loading && (
        <div className="alert alert-info m-5">
          <h2>Loading...</h2>
        </div>
      )
    );
  };

  const successMessage = () => {
    return (
      <div
        className="alert alert-success m-5"
        style={{ display: success ? "" : "none" }}
      >
        New account was created successfully. Please LogIn!
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-danger m-5"
        style={{ display: error ? "" : "none" }}
      >
        OOPS Something went WRONG !
      </div>
    );
  };

  return (
    <Base>
      {loader()}
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
    </Base>
  );
};

export default SignUp;
