import React from "react";
import Header from "../Header";
import Payment from "./Payment";
import './Payment_Layout.css';
export default function Payment_Layout() {
  return (
    <div className='payment__layout'> 
      <Header />
      {/* <h1>I am the payment page</h1> */}
      <Payment />
    </div>
  );
}
