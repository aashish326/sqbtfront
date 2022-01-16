import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Base from "./components/Base";
import { login } from "../helper";
import axios from "axios";

const LogIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: false,
    loading: false,
    redirect: false,
  });

  const { email, password, error, loading, redirect } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    const config = { headers: { "Contnet-Type": "application/json" } };
    axios
      .post(`http://localhost:8080/api/signin`, { email, password }, config)
      .then((res) => {
        localStorage.setItem("jwt", JSON.stringify(res.data));
        setValues({ ...values, loading: false, redirect: true });
      })
      .catch(setValues({ ...values, error: true }));
  };

  const redirectToHome = () => {
    if (redirect) {
      return <Redirect to="/" />;
    }
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

  const logInForm = () => {
    return (
      <div className="row p-5 m-5">
        <div className="col-md-6 text-left mx-auto p-3 border border-dark ">
          <form>
            <div className="form-group pt-2">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                value={email}
                type="email"
                onChange={handleChange("email")}
              />
            </div>

            <div className="form-group py-3">
              <label className="text-dark">Password</label>
              <input
                className="form-control"
                value={password}
                type="password"
                onChange={handleChange("password")}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success ">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base>
      {loader()}
      {errorMessage()}
      {logInForm()}
      {redirectToHome()}
    </Base>
  );
};

export default LogIn;
