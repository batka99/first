import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Redirect, Route, Switch } from "react-router-dom";
import Context from "../../context/context";
import firebase from "firebase";
import { BeatLoader } from "react-spinners";

function Dans2() {
  const [home, setHome] = useState(false);
  const [price, setPrice] = useState();
  const [id, setId] = useState();
  const ctx = useContext(Context);
  const [bankName, setBankName] = useState();
  const [dans, setDans] = useState();
  const [waiting, setWaiting] = useState();
  const [image, setCompleteImage] = useState();

  const UnconfirmOrder = () =>{
    firebase.database().ref("order").update({checkedOrder: false, confirmOrder:false, completeOrder: false});
    setHome(true)

  }

  useEffect(() => {
    try {
      const getData = firebase.database().ref("kiosk/payment/2");
      getData.on("value", (snapshot) => {
        const data = snapshot.val();
        setDans(data.dans);
        setBankName(data.bankName);
        // setCompeteOrder(dataList.done);
      });
    } finally {
    }
  }, []);

  return (
    <div className=" widget-content-area  m-4 vh-100">
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
      <div className="">
        <h1 className="text-center">Дансруу шилжүүлэх</h1>
        <hr />
        

        {waiting ? 
        
        <div className="col-12 text-center">
          <div className="card component-card_9 col-md-3 col-sm-12 text-white text-center row p-4">
          <img src={image} width="100px" className="col-12" />
          <p>Таны захиалга амжиллтай биеллээ</p>
          <div className="text-center">
            <div onchange={setTimeout(() =>  {UnconfirmOrder() }, 15000)}></div>
          </div>
        </div>
        <br/>
        <br/>

        <p>Монгол автомат машиныг сонгон үйлчлүүлсэн танд баярлалаа</p>


        </div>
     : <><div className="text-center">
      <p className="text-center">Таны төлөх дүн: {price} төгрөг </p>
        <p className="text-center">Гүйлгээний утга: {id} </p>
        <p className="text-center">Банкны нэр: {bankName} </p>
        <p className="text-center">Данс: {dans} </p>
        <br />
        <p className="text-center">Төлбөрийн мэдээлэл хүлээж байна. </p>
          <BeatLoader className="text-center mr-4" color="white" size={15} />
        </div>
        
        </>
        }
      </div>
      <div>
        {waiting ? "" : <>
        <br />
        <br />
      <p className=" text-center">
          Та төлбөрөө хийсний дараа таны сонгосон маск автомат машинаас гарч ирнэ.
        </p>
        </>}
      </div>
      

      <div>{home ? <Redirect to="/"/> : ""}</div>
    </div>
  );
}

export default Dans2;
