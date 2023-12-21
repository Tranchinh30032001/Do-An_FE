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
      <section className="App-section w-[1100px] h-[200px] mx-auto overflow-hidden">
        <Html5QrcodePlugin fps={10} qrbox={200} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
        <ResultContainerPlugin results={decodedResults} />
      </section>
    </main>
  );
}

export default InforStudent;
