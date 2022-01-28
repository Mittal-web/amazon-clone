import React from "react";
// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
// import Home from "./Home";
// import Layout from "./Pages/Layout";
// import Checkout from "./Pages/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import Checkout_Layout from "./Pages/Checkout_Layout";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    // <Router>
    <BrowserRouter>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout_Layout />} />
        </Routes>
      </div>
    </BrowserRouter>

    // <div className="App">
    // /* <Switch> */}
    // {/* <Route path="/"> */}
    // {/* <Header /> */}
    // {/* <Home /> */}
    // {/* </Route> */}
    // {/* </Switch> */}
    // {/* </div> */}
    // {/* // </Router> */}
  );
}

export default App;
