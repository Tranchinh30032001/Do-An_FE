import axios from "axios";
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import { handleDiemDanh } from "../utils/handleDiemDanh";

const decodeQr = (encrypted) => {
  const key = CryptoJS.enc.Utf8.parse("tranchinhlong123");
  const iv = CryptoJS.enc.Utf8.parse("0000000000000000");

  const decrypted = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.enc.Hex.parse(encrypted) }, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  }).toString(CryptoJS.enc.Utf8);

  return decrypted;
};

function filterResults(results) {
  let filteredResults = [];
  for (var i = 0; i < results?.length; ++i) {
    if (i === 0) {
      filteredResults.push(decodeQr(results[i]?.decodedText));
      continue;
    }
    if (results[i].decodedText !== results[i - 1].decodedText) {
      filteredResults.push(decodeQr(results[i].decodedText));
    }
  }
  return filteredResults;
}

const ResultContainerTable = ({ data }) => {
  return (
    <table className={"Qrcode-result-table"}>
      <thead>
        <tr>
          <td>MSSV</td>
          <td>Họ Tên</td>
          <td>Lớp</td>
          <td>Ngành</td>
        </tr>
      </thead>
      <tbody>
        {data?.map((result, i) => {
          return (
            <tr key={i}>
              <td>{handleDiemDanh(result)[0]}</td>
              <td>{handleDiemDanh(result)[1]}</td>
              <td>{handleDiemDanh(result)[2]}</td>
              <td>{handleDiemDanh(result)[3]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const ResultContainerPlugin = (props) => {
  const results = filterResults(props.results);
  return (
    <div className="Result-container">
      <div className="Result-header">Scanned results ({results.length})</div>
      <div className="Result-section">
        <ResultContainerTable data={results} />
      </div>
    </div>
  );
};

export default ResultContainerPlugin;
