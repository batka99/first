import React, { useState, useEffect } from "react";
import Payment from "../components/payment/payment";
import Product from "../components/product/product";
import Wallet from "../components/wallet/wallet";
import QrPayment from "../components/qrPayment/qrPayment";

const Context = React.createContext();

export const ButtonStore = (props) => {
  const [payment, setPayment] = useState();
  const [priceCtx, setPriceCtx] = useState();
  const productBank = (a) => {
    setPayment(a.id);
    setPriceCtx(a.price)
  };

  return (
    <Context.Provider value={{ productBank, payment, priceCtx }}>
      {props.children}
    </Context.Provider>
  );
};

export default Context;
