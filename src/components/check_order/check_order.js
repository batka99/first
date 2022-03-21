import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect, Route, Switch } from "react-router-dom";
import Context from "../../context/context";
import firebase from "firebase";
import { BeatLoader } from "react-spinners";

function CheckOrder() {
  const [home, setHome] = useState(false);
  const [price, setPrice] = useState();
  const [photo, setPhoto] = useState();
  const [id, setId] = useState();
  const ctx = useContext(Context);
  const [title, setTitle] = useState();
  const [quantity, setQuantity] = useState();
  const [waiting, setWaiting] = useState();

  useEffect(() => {
    try {
      const getData = firebase
        .database()
        .ref("data/FXXvUataYhbhVpWyu8oBnmA7EMx1/" + ctx.payment);
      getData.on("value", (snapshot) => {
        const data = snapshot.val();
        setPrice(data.price);
        setId(data.id);
        setWaiting(data.done)
        setPhoto(data.image)
        setTitle(data.title);
        setQuantity(data.quantity);
        // setCompeteOrder(dataList.done);
      });
    } finally {
    }
  }, []);

  useEffect(() => {
    try {
      const getData = firebase.database().ref("kiosk/payment/1");
      getData.on("value", (snapshot) => {
        const data = snapshot.val();
      
        // setCompeteOrder(dataList.done);
      });
    } finally {
    }
  }, []);

  const confirmOrder = () =>{
    firebase.database().ref("order").update({confirmOrder:true})
  }

  return (
    <div className=" widget-content-area p-4 m-4 vh-100">
      <div className="row d-flex justify-content-between mr-4 ml-4">
        <div>
          <Link
            to="/"
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
            colorsTime={[20, 10, 5, 0]}
            onComplete={() => {
              setHome(true);
            }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      </div>
      <h2 className="text-center mb-4">Таны сонгосон бараа</h2>
      <div className="shadow-lg pb-4 col-6 card component-card_9 text-center mt-4">
        
        <hr />
              <div class="container">
                <div class="row">
                <div className="card component-card_9 col-md-6 col-sm-12 text-white text-center pt-4 pb-4">
                <div className="col-md-12"><img src={photo} className="col-12" /></div>
                </div>
                  <div class="col-md-6">
                  <p className=" text-center">Төрөл:  {title} </p>
            <p className="text-center">Тоо: {quantity} ширхэгтэй </p>
            <p className="text-center">Үнэ: {price} төгрөг </p> <br/>
            <Link to="/payment" onClick={confirmOrder} className="shadow-lg p-4 col-12 card component-card_9 text-center">
              Баталгаажуулах
            </Link>


          



                  </div>
                </div>
              





        
          </div>
        

       
      </div>
      <div></div>
      <br />
      <br />

      <div>{home ? <Redirect to="/"/> : ""}</div>
    </div>
  );
}

export default CheckOrder;
