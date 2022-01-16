import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import LogIn from "./screens/LogIn";
import SignUp from "./screens/SignUp";
import OneProduct from "./screens/OneProduct";
import Orders from "./screens/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/products/:id" component={OneProduct} />
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
