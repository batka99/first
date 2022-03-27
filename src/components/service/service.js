import react from "react";
import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faQrcode, faSmile, faWallet } from "@fortawesome/free-solid-svg-icons";


function Service() {
    const [tex1, setText1] = useState()
    const [tex2, setText2] = useState()
    const [phone, setPhone] = useState()

    useEffect(() => {
        const getService = firebase
        .database()
        .ref("order/serviceVal");
        getService.on("value", (snapshot) => {
        const data = snapshot.val();
        setText1(data.text1);
        setText2(data.text2);
        setPhone(data.phone);
        
        
      });
    
    
        
      }, []);








    return ( <div className="container">
        



        <div className="col-12 d-flex justify-content-center align-items-center vh-100">
        <div className="card component-card_9 col-md-6 col-sm-12 text-white text-center p-4 ">
        <h5 className="mt-4">{tex1}</h5> <br/>
        <h5 className=""><FontAwesomeIcon icon={faPhone} /> {phone}</h5> <br/>
        <h3 className="mt-4">{tex2} <FontAwesomeIcon icon={faSmile} /></h3> <br/>

</div>
           
        </div>
    </div> );
}

export default Service;