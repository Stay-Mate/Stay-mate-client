import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export const Qrscan = () => {
  const [selected, setSelected] = useState<string>("environment");
  const [startScan, setStartScan] = useState<boolean>(false);
  const [loadingScan, setLoadingScan] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  return (
    <div>
      <h3>QR 스캔하기</h3>
      <h4>
        Last Scan:
        {selected}
      </h4>

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>

      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <QrReader
            scanDelay={1000}
            constraints={{ facingMode: selected }} // chooseDeviceId={()=>selected}
            onResult={(result, error) => {
              if (result) {
                setData(result?.getText());
                console.log(`loaded >>>`, result);
                setStartScan(false);
                setLoadingScan(false);
              }
              if (!!error) {
                console.log(error);
              }
            }}
            className="w-[400px] h-[400px]"
          />
          {data}
        </>
      )}
    </div>
  );
};
