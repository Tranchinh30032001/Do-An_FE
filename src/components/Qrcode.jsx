import React from "react";

function Qrcode() {
  return <div>Qrcode</div>;
}

export default Qrcode;

// useEffect(() => {
//   const res = results.map((item) => {
//     const body = {
//       encrypted: item.decodedText,
//     };
//     return axios.post("http://localhost:3055/api/v1/qldt/decode-qr", body);
//   });

//   Promise.all(res).then((result) => {
//     setData(result);
//   });
// }, [results.length]);
