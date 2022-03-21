import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { ButtonStore } from "./context/context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Offline, Online } from "react-detect-offline";
import {
  faQrcode,
  fasolid,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ButtonStore>
        <Online>
          <App />
        </Online>
        <Offline>
          <div className="col-12 d-flex justify-content-center align-items-center vh-100">
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className="mr-2"
              size="10x"
            />
            <h5>Уучлаарай алдаа гарсан байна</h5>
          </div>
        </Offline>
      </ButtonStore>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import React, { useContext, useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { UserStore } from "./Context/UserContext";
// import { SettingsStore } from "./Context/settingsContext";
// import { BrowserRouter } from "react-router-dom";
// import { ButtonStore } from "./Context/buttonContext";
// import { Offline, Online } from "react-detect-offline";
// import firebase from "./utils/firebase";

// ReactDOM.render(
//   <React.StrictMode>
//     <UserStore>
//       <ButtonStore>
//         <SettingsStore>
//           <BrowserRouter>
//             <Offline>
//               <div
//                 className="card text-center display-2 ml-4 mr-4"
//                 style={{ marginTop: "300px" }}
//               >
//                 Уучлаарай шинэчлэл хийгдэж байна.
//                 <i class="far fa-frown-open mt-4 mb-4"></i>
//               </div>
//             </Offline>
//             <Online>
//               <App />
//             </Online>
//           </BrowserRouter>
//         </SettingsStore>
//       </ButtonStore>
//     </UserStore>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
