import logo from "./logo.svg";
import "./App.css";
import { Redirect, Route, Switch  } from "react-router-dom";
import Product from "./components/product/product";
import Payment from "./components/payment/payment";
import Wallet from "./components/wallet/wallet";
import QrPayment from "./components/qrPayment/qrPayment";
import BankQr from "./components/bankqr/bankqr";
import BankWallet from "./components/bankwallet/bankwallet";
import Dans from "./components/dans/dans";
import Dans2 from "./components/dans/dans2";
// import Test from "./components/test/test";
import CheckOrder from "./components/check_order/check_order";




function App() {
  // const clickHandler = () => {
  //   alert("good luck");
  // };





  return (
    <main>
        <Switch>
       
          <Route exact path="/">
          <Product/>
            </Route>
            <Route path="/check_order">
          <CheckOrder/>
            </Route>
          <Route path="/payment" ><Payment/></Route>
          <Route path="/wallet" ><Wallet/></Route>
          <Route path="/qrPayment1" ><QrPayment/></Route>
          <Route path="/bankqr" ><BankQr/></Route>
          <Route path={"/bankwallet"} ><BankWallet/></Route>
          <Route path={"/dans1"}><Dans/></Route>
          <Route path={"/dans2"}><Dans2/></Route>
          <Redirect to="/" />
        </Switch>
    </main>
  );
}

export default App;
