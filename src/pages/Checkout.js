import React from "react";
import Form from "../components/Form";
import OrderSummary from "../components/OrderSummary";
import "../styles/Checkout.scss";

function Checkout() {
  return (
    <div className="container">
      <Form />
      <OrderSummary />
    </div>
  );
}

export default Checkout;
