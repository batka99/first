import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faWallet } from "@fortawesome/free-solid-svg-icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect, Route, Switch } from "react-router-dom";
import Context from "../../context/context";
import firebase from "firebase";
import { BeatLoader } from "react-spinners";

function Payment() {
  const [home, setHome] = useState(false);
  const [checked, setCheckOrder] = useState();
  const ctx = useContext(Context);
  useEffect(() => {
    try {
      const getData = firebase
        .database()
        .ref("order");
      getData.on("value", (snapshot) => {
        const data = snapshot.val();
        setCheckOrder(data.checkedOrder);
        // setCompeteOrder(dataList.done);
      });
    } finally {
    }
  }, []);


  const UnconfirmOrder = () =>{
    firebase.database().ref("order").update({checkedOrder: false, confirmOrder:false, completeOrder: false});
  }


  // const a = () => {
  //   alert(ctx.payment);
  //   // ctx.productBank(1);
  // };
  return (
    <>{checked ? 
    <div className=" widget-content-area  m-4">
    <div className="row d-flex justify-content-between mr-4 ml-4">
      <div>
        <Link
          to="/"
          className="card component-card_9 col-md-12 text-center d-inline-flex pr-3 pl-3 pt-1 pb-1 "
          onClick={UnconfirmOrder}
        >
          Буцах
        </Link>
      </div>
      <div>
        <CountdownCircleTimer
          isPlaying
          size={40}
          strokeWidth={2}
          duration={15}
          colors={["#00FD25", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[15, 10, 5, 0]}
          onComplete={() => {
            setHome(true);
            setTimeout(() => {  UnconfirmOrder() }, 3000);
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
    <h1 className="text-center">Төлбөр төрөлөө сонгоно уу</h1>
    <hr />
    <div className="row m-4">
      <Link
        to={"/qrPayment1"}
        className="card component-card_9 col-md-5 col-sm-12 text-white text-center p-4"
        style={{ fontSize: "20px", height: "100%" }}
      >
        <div style={{ width: "20px", height: "auto" }}></div>
        <FontAwesomeIcon icon={faQrcode} />
        Qr код уншуулах
      </Link>
      <Link
        to={"/dans1"}
        className="card component-card_9 col-md-5 col-sm-12 col-12 text-white text-center p-4"
        style={{ fontSize: "20px" }}
      >
        <FontAwesomeIcon icon={faWallet} />
        Дансруу шилжүүлэх
      </Link>
    </div>
    <div>
      <br />
      <br />
      <p className="text-center">
        Та төлбөрөө Qr код уншуулж эсвэл дансруу илгээж төлөх боломжтой
      </p>
      <p className="text-center">
        Таны төлсөн мөнгө дансанд ормогц таны худалдаж авсан маск автомат
        машинаас гарч ирнэ
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    <div>{home ? <Redirect to="/"/> : ""}</div>
  </div>: 
  <>
  <div className=" widget-content-area">
  <div className="row d-flex justify-content-between mr-4 ml-4">
  <div>
        <Link
          to="/"
          className="card component-card_9 col-md-12 text-center d-inline-flex pr-3 pl-3 pt-1 pb-1 "
          onClick={UnconfirmOrder}
        >
          Буцах
        </Link>
      </div>
      <div>
        <CountdownCircleTimer
          isPlaying
          size={40}
          strokeWidth={2}
          duration={20}
          colors={["#00FD25", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[15, 10, 5, 0]}
          onComplete={() => {
            setHome(true);
            setTimeout(() => {  UnconfirmOrder() }, 4000);
          }}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
    </div>
    <div className="col-12 d-flex justify-content-center align-items-center vh-100">
      <div>
        <div >Уншиж байна</div>
        <div><BeatLoader  className="col-12" color="white" size={25} /></div>
        </div>
        <div>{home ? <Redirect to="/"/> : ""}</div>
    </div>
  </div>
          </>
   }</>
  );
}

export default Payment;
