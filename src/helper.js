import axios from "axios";

const api = process.env.BACKEND;

export const signup = ({ name, email, password }) => {
  const config = { headers: { "Contnet-Type": "application/json" } };
  axios
    .post(`http://localhost:8080/api/signup`, { name, email, password }, config)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const signout = () => {
  localStorage.removeItem("jwt");
};

export const login = ({ email, password }) => {
  const config = { headers: { "Contnet-Type": "application/json" } };
  axios
    .post(`http://localhost:8080/api/signin`, { email, password }, config)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem("jwt", JSON.stringify(res.data));
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const getProducts = () => {
  return axios
    .get(`http://localhost:8080/api/products`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};

export const getProductDetails = (id) => {
  return axios
    .get(`http://localhost:8080/api/products/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
