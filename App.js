import React, {useEffect} from "react";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Layout from "./Pages/Layout";
import Checkout_Layout from "./Pages/Checkout_Layout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("THE USER IS >>> ", user);

      if (user) {
        //the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: user
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="login" element={<Login />} />
          <Route path="checkout" element={<Checkout_Layout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
