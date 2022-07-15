import React from "react";
import "../styles/Form.scss";
import { IoIosArrowDown } from "react-icons/io";
import Comodo from "../assets/Comodo.png";
import McAfee from "../assets/McAfee.png";
import NortonSecure from "../assets/NortonSecure.png";
import VeriSign from "../assets/VeriSign.png";

function Form() {
  return (
    <div className="form">
      <p className="title">payment and shipping</p>
      <div className="formWrapper">
        <form>
          <div className="customerFields">
            <div className="customerTitle">
              <h3>Customer Information</h3>
              <p>Fields marked as(*) are required.</p>
            </div>
            <div className="customerInfo">
              <input
                className="customerInput"
                type="text"
                name="customerInput"
                required
                placeholder="First name*"
                autoComplete="off"
              />
              <input
                className="customerInput"
                type="text"
                name="customerInput"
                required
                placeholder="Last name*"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="shippingFields">
            <h3>Shipping Address</h3>
            <input
              className="shippingInput"
              type="text"
              name="shippingInput"
              required
              placeholder="Address*"
              autoComplete="off"
            />
            <div className="selectInfo">
              <div className="standartSelect">
                <div>
                  <p>Country*</p>
                  <p>Select</p>
                </div>
                <IoIosArrowDown />
              </div>
              <div className="standartSelect">
                <div>
                  <p>Region/State*</p>
                  <p>Select</p>
                </div>
                <div>
                  <IoIosArrowDown />
                </div>
              </div>
              <input
                className="postalInput"
                type="text"
                name="postalInput"
                required
                placeholder="Postal code*"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="paymentFields">
            <h3>Payment Method</h3>
            <div className="creditCard">
              <h4>Credit Card</h4>
              <div className="cardDetails">
                <input
                  className="cardInput"
                  type="text"
                  name="cardInput"
                  required
                  placeholder="Card number"
                  autoComplete="off"
                />
                <div className="dateContainer">
                  <input
                    className="dateInput"
                    type="text"
                    name="dateInput"
                    required
                    placeholder="MM/YY"
                    autoComplete="off"
                  />
                  <input
                    className="cvvInput"
                    type="text"
                    name="cvvInput"
                    required
                    placeholder="CVV"
                    autoComplete="off"
                  />
                </div>
              </div>
            </div>
          </div>
          <button className="orderBtn">complete order</button>
        </form>
        <div className="formLogos">
          <div className="formLogosWrapper">
            <img src={NortonSecure} alt="NortonSecure" />
            <img src={VeriSign} alt="VeriSign" />
            <img src={McAfee} alt="McAfee" />
            <img src={Comodo} alt="Comodo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
