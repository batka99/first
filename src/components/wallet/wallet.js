import React, { useState, useEffect, useContext } from "react";
import Context from "../../context/context";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faWallet } from "@fortawesome/free-solid-svg-icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect, Route, Switch } from "react-router-dom";

function Wallet() {
  const [home, setHome] = useState(false);
  const ctx = useContext(Context);

  // useEffect(() => {
  //   try {
  //     const getData = firebase.database().ref("kiosk/payment/" + ctx.payment);
  //     getData.on("value", (snapshot) => {
  //       const data = snapshot.val();
  //       setQr(data.qrCode);
  //       setPrice(data.price);
  //       setId(data.id);
  //       // setCompeteOrder(dataList.done);
  //     });
  //   } finally {
  //   }
  // }, []);

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
            duration={120}
            colors={["#00FD25", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[100, 50, 5, 0]}
            onComplete={() => {
              setHome(true);
            }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      </div>
      <h1 className="text-center">Дансруу шилжүүлэх</h1>
      <hr />
      <div className="row m-4">
        <Link
          to={""}
          className="card component-card_9 col-md-5 col-sm-12 text-white text-center p-4"
          style={{ fontSize: "20px", height: "100%" }}
        >
          <div style={{ width: "20px", height: "auto" }}></div>
          <FontAwesomeIcon icon={faWallet} />
          Дансруу шилжүүлэх
        </Link>
      </div>
      <div>
        <br />
        <br />
        <p className="text-center">
          Та төлбөрөө хийсний дараа таны сонгосон маск автоматаар гарч ирнэ.
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

export default Wallet;
