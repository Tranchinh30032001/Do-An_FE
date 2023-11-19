import React, { useState } from "react";
import Header from "../components/Header";

import Html5QrcodePlugin from "../components/Html5QrcodePlugin";
import ResultContainerPlugin from "../components/ResultContainerPlugin";
// import InfoStudent from "../features/InfoStudent";

function InforStudent() {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    setDecodedResults((prev) => [...prev, decodedResult]);
  };

  return (
    <main>
      <Header />

      <section className="App-section w-[900px] h-[400px] mx-auto">
        <div className="App-section-title"> Html5-qrcode React demo</div>
        <br />
        <br />
        <br />
        <Html5QrcodePlugin fps={10} qrbox={400} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
        <ResultContainerPlugin results={decodedResults} />
      </section>
      {/* <InfoStudent /> */}
    </main>
  );
}

export default InforStudent;
