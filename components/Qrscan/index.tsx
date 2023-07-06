import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import swal from "sweetalert";

export const Qrscan = () => {
  const router = useRouter();
  const [selected, setSelected] = useState<string>("environment");
  const [startScan, setStartScan] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  const handleData = async (data: string) => {
    try {
      const response = await axios.post("/api/random", { qrstring: data });

      if (response.status === 200) {
        const { success, key, time } = response.data;
        console.log("Key:", key);
        console.log("Time:", time);
        swal({
          title: "인증되었습니다",
          icon: "success",
        });
        router.push("/main");

      } else if (response.status === 500) {
        swal({
          title: "다시 인증하셔야 합니다",
          text: "해당 QR코드 인증 유효 기간이 지났습니다",
          icon: "fail",
        });
        router.push("/qrscan");
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
            constraints={{ facingMode: selected }}
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
        </div>
      )}
    </div>
  );
};
