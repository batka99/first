// import React, { useState, useEffect, useContext }  from 'react';
// import axios from 'axios'






// function Test() {
//    const [tokens, setTokens]= useState()
//    const [data, setData]= useState()



//    const dataAvah = () => {
//       axios({
//         'method': 'POST',
//         'url': 'https://merchant-sandbox.qpay.mn/v2/auth/token',
//         'auth': {
//             'username': 'TEST_MERCHANT',
//             'password': '123456'
//           },
//         'headers': {
//             'Authorization': `Basic`
//       }
//         }).then(function(response){
//           console.log(response)
//           localStorage.setItem("token", response.data.access_token)
//           // setTokens(response.data.access_token)
//     })
//   }
   

//   const keyAvah = () => {
//     const tokenss = localStorage.getItem('token')

//     fetch('https://merchant-sandbox.qpay.mn/v2/invoice', {
//         method: 'POST',
//         mode: "*cors",
//         cache: 'default',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${tokenss}`
//         },
//         body: JSON.stringify(
//           {"invoice_code": "TEST_INVOICE",
//           "sender_invoice_no": "1234567",
//           "invoice_receiver_code": "terminal",
//           "invoice_description": "test",
//           "amount": 100,
//           "callback_url": "https://bd5492c3ee85.ngrok.io/payments?payment_id=1234567"}
//         ),
//       })
//       .then(response => response.json())
//       .then(data => {
//         console.log('Success:', data);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });





//   //   console.log(tokenss)
//   //     fetch({
//   //       'method': 'POST',
//   //       'mode': 'cors', // no-cors, *cors, same-origin
//   //       'url': 'https://merchant-sandbox.qpay.mn/v2/invoice',
//   //       'headers': {
//   //               'Content-Type': 'application/json',
//   //               'Authorization': `Bearer ${tokenss}`
//   //         },
//   //         body: JSON.stringify({
//   //           "invoice_code": "TEST_INVOICE",
//   //           "sender_invoice_no": "1234567",
//   //           "invoice_receiver_code": "terminal",
//   //           "invoice_description": "test",
//   //           "amount": 100,
//   //           "callback_url": "https://bd5492c3ee85.ngrok.io/payments?payment_id=1234567"
//   //         })
//   // }).then(function(response){
//   //       console.log(response)
//   //     })






// }




  

  


// //  const tokenAvah = ()=>{

  


// // // fetch('https://merchant-sandbox.qpay.mn/v2/auth/token', {
// // //       method: 'post',
// // //       auth: {
// // //               username: 'TEST_MERCHANT',
// // //               password: '123456'
// // //              },
// // //       headers: {'Authorization': 'Basic'}
// // //     }).then(function(response){
// // //              console.log(response)
// // //              })






























// //   // fetch('https://merchant-sandbox.qpay.mn/v2/auth/token', {
// //   //   method: 'POST', // or 'PUT'
// //   //   auth: {
// //   //             username: 'TEST_MERCHANT',
// //   //             password: '123456'
// //   //            },
// //   //   headers: {
// //   //     'Authorization': 'Basic'
// //   // },

 
// //   // }).then(function(response){
// //   //         console.log(response)
// //   //        })






// //  const dataAvah = () =>{
// //   const token = localStorage.getItem('token').toString



// // //   const utga =  {
// // //     "invoice_code": "TEST_INVOICE",
// // //     "sender_invoice_no": "1234567",
// // //     "invoice_receiver_code": "terminal",
// // //     "invoice_description": "test",
// // //     "amount": 100,
// // //     "callback_url": "https://bd5492c3ee85.ngrok.io/payments?payment_id=1234567"
// // //  };


// // //  fetch('https://merchant-sandbox.qpay.mn/v2/invoice', {
// // //   method: 'POST', // or 'PUT'
// // //   headers: {
// // //     'Content-Type': 'application/json',
// // //     'Accept': 'application/json',
// // //     'Authorization': `Bearer ${tokens}`
// // //   },
// // //   body: JSON.stringify(utga),
// // // })
// // // .then(response => response.json())
// // // .then(utga => {
// // //   console.log('Success:', utga);
// // // })
// // // .catch((error) => {
// // //   console.error('Error:', error);
// // // });


// //   // axios({
// //   //   'method': 'POST',
// // 	// 		'url': 'https://merchant-sandbox.qpay.mn/v2/invoice',
// // 	// 		'headers': {
// // 	// 					'Content-Type': 'application/json',
// // 	// 					'Authorization': `Bearer ${tokens}`
// // 	// 		},
// // 	// 		body: JSON.stringify({
// // 	// 		   "invoice_code": "TEST_INVOICE",
// // 	// 		   "sender_invoice_no": "1234567",
// // 	// 		   "invoice_receiver_code": "terminal",
// // 	// 		   "invoice_description": "test",
// // 	// 		   "amount": 100,
// // 	// 		   "callback_url": "https://bd5492c3ee85.ngrok.io/payments?payment_id=1234567"
// // 	// 		})
// //   // }).then(function(response){
// //   //       console.log(response)
// //   //     })

// //   //     console.log(`Bearer jkjgkjg ${localStorage.getItem('token')}`)
// //   // const url = "https://merchant-sandbox.qpay.mn/v2/invoice"
// //   // axios.post(url, {
// //   //   body: JSON.stringify(utga)
// //   // }, {
// //   //   headers: {
// //   //     'Content-Type': 'application/json',
// //   //     'Authorization': `Bearer ${token}` 
// //   //   }
// //   // })





// //   }

// //   const refreshToken =()=>{
// //     fetch('https://merchant-sandbox.qpay.mn/v2/auth/refresh', {
// //       'method': 'POST',
// //       'headers': {
// //         'Content-Type': 'application/json',
// //             'Authorization': `Bearer ${localStorage.getItem('token')}`
// //       }

  
// //   }).then(function(response){
// //           console.log(response)
// //           localStorage.setItem("token", response.data.access_token)
// //         })

// //   }


// //   const getlocal =()=>{
// //     axios({
// //       'method': 'get',
// //       'url': 'http://localhost:8000',
// //       }).then(function(response){
// //         console.log(response.data)
// //       })
// //   }

// //   const getlocals =()=>{
// //     axios({
// //       'method': 'get',
// //       'url': 'http://localhost:8000/invoice',
// //       }).then(function(response){
// //         console.log(response)
// //       })
// //   }





//     return (<>
//     <button onClick={dataAvah} >token avah</button> 
//     <button onClick={keyAvah}>data avah</button>
//     <h1>{data}</h1> </>)
// }

// export default Test;