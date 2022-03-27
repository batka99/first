import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { faPhone, faSpa, faSquareCaretDown, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Context from "../../context/context";
import Service from "../service/service";
import { BeatLoader } from "react-spinners";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';









function Product() {
  const ctx = useContext(Context);
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const [serviceOn, setService] = useState(false);
  useEffect(() => {
    const getData = firebase
      .database()
      .ref("data/FXXvUataYhbhVpWyu8oBnmA7EMx1");
    getData.on("value", (snapshot) => {
      const data = snapshot.val();
      const dataList = [];
      for (let id in data) {
        dataList.push({id, ...data[id] });
      }
      setState(dataList);
      setLoading(false);
      
    });


    const getService = firebase
      .database()
      .ref("order/service");
      getService.on("value", (snapshot) => {
      const service = snapshot.val();
      setService(service);
      
    });



    
  }, []);

  const buy = (a) => {
    if (a.stock <= 0) {
      alert("Уучлаарай энэ бараа дууссан байна.");
    } else {
      ctx.productBank(a.id);
    }
  };



  return serviceOn ? <div><Service/></div> : loading ? (
    <div className="col-12 d-flex justify-content-center align-items-center vh-100">
      <div>
        <BeatLoader color={"#21618C  "} size={25} />
      </div>
    </div>
  ) : <div id="card_9" className="col-md-12 layout-spacing mr-4 mt-4">
      <div className="statbox widget box box-shadow ">
        <div className="widget-header">
          <div className="row">
          <div className="col-xl-12 mt-4 text-right col-md-11 col-sm-12 col-7 mr-4">
              <h5><FontAwesomeIcon icon={faSquarePhone} />  80551166</h5>
            </div>
          <div className="col-xl-12 mt-4 text-center col-md-12 col-sm-12 col-12 ml-4 rounded ">
              
              <h2>Та худалдаж авах маскны төрлөө сонгоно уу</h2>

      
            </div>

          </div>
        </div>
        <div className="widget-content widget-content-area ">

          <div className="row">
          <Swiper
    
    modules={[Navigation, Pagination, A11y, Autoplay ]}
    Autoplay
    spaceBetween={0}
    slidesPerView={4}
    a11y
    autoplay
    pagination={{ clickable: false }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    >
    
            {state
              ? state.map((element, index) => (

                
                <SwiperSlide >
                  <div className="col-md-12 col-sm-12">
                    <div
                      className="card component-card_9"
                      style={{ borderRadius: "30px 30px 60px 60px" }}
                    >
                      <img
                        style={{ borderRadius: "30px" }}
                        src={element.image}
                        className="card-img-top"
                        alt="widget-card-2"
                      />
                      <div className="card-body">
                        <div className="row">
                          <h5
                            className="card-title col-8"
                            style={{ fontSize: "18px", width: "100%" }}
                          >
                            {element.title}
                          </h5>
                          <h5
                            className="card-title col-4"
                            style={{
                              fontSize: "18px",
                              width: "100%",
                              marginRight: "0px",
                            }}
                          >
                            {element.quantity}ш
                          </h5>
                        </div>
                        <br />
                        <div
                          className="text-center"
                          style={{ fontSize: "20px" }}
                        >
                          Үнэ: {element.price} төг
                        </div>
                        <div className="text-center m-4">
                          <Link
                            to="check_order"
                            onClick={(e) => buy(element)}
                            className="btn btn-outline-info btn-block mb-4 mr-2 p-3"
                            style={{ borderRadius: "25px", fontSize: "15px" }}
                          >
                            Худалдаж авах
                          </Link>
                        </div>
        
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
               
                   
                ))
              : ""}
                 </Swiper>

          </div>
          {/* <Test/> */}
   

      


        </div>
      </div>


    </div>
  ;
}
export default Product;
