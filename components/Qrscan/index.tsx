import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export const Qrscan = () => {
  const [selected, setSelected] = useState<string>("environment");
  const [startScan, setStartScan] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  return (
    <div className="text-center">
      <button
        className="w-[130px] h-[40px] mb-5"
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "인증 그만하기" : "인증 시작하기"}
      </button>

      {startScan && (
        <div >
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>후면 카메라</option>
            <option value={"user"}>전면 카메라</option>
          </select>
          <QrReader
            scanDelay={1000}
            constraints={{ facingMode: selected }} // chooseDeviceId={()=>selected}
            onResult={(result, error) => {
              if (result) {
                setData(result?.getText());
                console.log(`loaded >>>`, result);
              }
              if (!!error) {
                console.log(error);
              }
            }}
            className="m-auto w-[500px] h-[200%] border-4"
          />
          {data}
        </div>
      )}
    </div>
  );
};
