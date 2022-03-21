import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faWallet } from "@fortawesome/free-solid-svg-icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect, Route, Switch } from "react-router-dom";
import Context from "../../context/context";

function BankQr() {
  const [bank, setBank] = useState();
  const [dataList, setState] = useState();
  const [bankName, setBankName] = useState();

  const [home, setHome] = useState(false);
  //   const ctx = useContext(Context);
  //   // const a = () => {
  //   //   alert(ctx.payment);
  //   //   // ctx.productBank(1);
  //   // };

  useEffect(() => {
    try {
      const getData = firebase.database().ref("kiosk/payment/");
      getData.on("value", (snapshot) => {
        const data = snapshot.val();
        const dataList = [];
        for (let id in data) {
          dataList.push({ id, ...data[id] });
        }
        setState(dataList);

        // setCompeteOrder(dataList.done);
        console.log(dataList);
      });
    } finally {
    }
  }, []);

  //   {dataList
  //                   ? dataList.map((element, index) => (

  return (
    <div className=" widget-content-area  m-4">
      <div className="row d-flex justify-content-between mr-4 ml-4">
        <div>
          <Link
            to="/payment"
            className="card component-card_9 col-md-12 text-center d-inline-flex pr-3 pl-3 pt-1 pb-1 "
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
              //   setHome(true);
            }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      </div>
      <h1 className="text-center">Төлбөр төрөлөө сонгоно уу</h1>
      <hr />
      <div className="row">
        {dataList
          ? dataList.map((element, index) => (
              <Link
                to={"/qrPayment" + (index + 1)}
                className="card   col-md-6 col-sm-12 text-white text-center"
                style={{ fontSize: "20px", height: "100%" }}
              >
                <div style={{ width: "20px", height: "auto" }}></div>

                <div>
                  <img src={element.image} width="30%" />
                </div>
                <h5 className="mt-4">{element.bankName}</h5>
              </Link>
            ))
          : ""}
      </div>

      <div>
        <br />
        <br />
        <p className="p-4 col-6 card component-card_9 text-center">
          Хэрэв та дээрх банкийг ашигладаггүй бол дурын банкны данснаас
          шилжүүлэх боломжтой.
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
      </div>
      <div>{home ? <Redirect to="/"/> : ""}</div>
    </div>
  );
}

export default BankQr;
