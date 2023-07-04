import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

export const Qrscan = () => {
  const [selected, setSelected] = useState<string>("environment");
  const [startScan, setStartScan] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  const handleData = async (data: string) => {
    try {
      const response = await fetch("/api/random", {
        method: "POST",
        body: JSON.stringify({ qrstring: data }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
        },
      });

      if (response.ok) {
        const result = await response.json();
        const { success, key, time } = result;

        if (success) {
          // Update the state or perform any other actions with the received data
          console.log("Key:", key);
          console.log("Time:", time);
        } else {
          console.error("An error occurred:", result.error);
        }
      } else {
        console.error("HTTP error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
        <div>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>후면 카메라</option>
            <option value={"user"}>전면 카메라</option>
          </select>
          <QrReader
            scanDelay={1000}
            constraints={{ facingMode: selected }} // chooseDeviceId={()=>selected}
            onResult={(result, error) => {
              // lodash debounce or throttle
              // console.info(result, error);
              if (result) {
                setData(result.getText());
                console.log(`loaded >>>`, result.getText());
                handleData(result.getText());
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
