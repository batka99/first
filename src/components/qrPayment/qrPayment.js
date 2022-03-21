import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faWallet } from "@fortawesome/free-solid-svg-icons";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect, Route, Switch } from "react-router-dom";
import Context from "../../context/context";
import firebase from "firebase";
import { BeatLoader } from "react-spinners";

function QrPayment() {
  const [home, setHome] = useState(false);
  const [photo, setPhoto] = useState();
  const [qr, setQr] = useState();
  const [price, setPrice] = useState();
  const [id, setId] = useState();
  const [waiting, setWaiting] = useState();
  const [image, setCompleteImage] = useState();
  const ctx = useContext(Context);

  useEffect(() => {
    try {
      const getData = firebase
        .database()
        .ref("data/FXXvUataYhbhVpWyu8oBnmA7EMx1/" + ctx.payment);
      getData.on("value", (snapshot) => {
        const data = snapshot.val();
        setQr(data.qrCode);
        setPrice(data.price);
        setId(data.id);
        setPhoto(data.image)

        
        
        // setCompeteOrder(dataList.done);
      });


      const Compelete = firebase
      .database()
      .ref("order/");
      Compelete.on("value", (snapshot) => {
      const orderData = snapshot.val();
      setWaiting(orderData.completeOrder);
      setCompleteImage(orderData.image);
      // setCompeteOrder(dataList.done);
    });

    
    } finally {
    }
  }, []);








  const UnconfirmOrder = () =>{
    firebase.database().ref("order").update({checkedOrder: false, confirmOrder:false, completeOrder: false});
    setHome(true)

  }

  return (
    <div className="widget-content-area  m-4 vh-100">
      <div className="row d-flex justify-content-between mr-4 ml-4">
        <div>
          <Link
            to="/"
            onClick={UnconfirmOrder}
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
              setTimeout(() => {  UnconfirmOrder() }, 4000);
            }}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
        </div>
      </div>
      <h1 className="text-center">Qr код уншуулах</h1>
      <hr />
      
      
      

      {waiting  ? 
        <div className="col-12 text-center">
          <div className="card component-card_9 col-md-3 col-sm-12 text-white text-center row p-4">
            <img src={image} width="100px" className="col-12" />
            <p>Таны захиалга амжиллтай биеллээ</p>
            <div className="text-center">
              <div onchange={setTimeout(() =>  {UnconfirmOrder() }, 10000)}></div>
            </div>
          </div>
        </div>: 
      <><p className="text-center">Таны төлөх дүн: {price} төгрөг </p>
      <p className="text-center">Гүйлгээний утга: {id} </p>
      <div className="row m-4 ">
        <div className="card component-card_9 col-md-3 col-sm-12 text-white text-center row p-4">
          <img src={qr} width="100px" className="col-12" />
        </div>
      </div> <div className="text-center mt-4">
        <p className="text-center">Төлбөрийн мэдээлэл хүлээж байна. </p>
          <BeatLoader className="text-center mr-4" color="white" size={15} />
        </div>
        <div className="mb-4">
        <br />
        <br />
        <p className="text-center ">
        Та төлбөрөө хийсний дараа таны сонгосон маск автомат машинаас гарч ирнэ.
          
        </p>
        <br />
      </div>
        </>
     }
     
      <div>{home ? <Redirect to="/"/> : ""}</div>
    </div>
  );
}

export default QrPayment;
