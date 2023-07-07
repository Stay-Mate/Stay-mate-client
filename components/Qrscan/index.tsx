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
    console.log("1");
    const response = await axios.post("/api/random", { qrstring: data });
    console.log("2");
    console.log(response.data.message);

    if (response.data.message === "fail") {
      alert("인증 시간이 지났습니다");
      router.push("/qrscan");
    } else {
      alert("인증이 완료되었습니다");
      router.push("/main")
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
                console.log("0");
                console.log(`loaded >>>`, result.getText());
                handleData(result.getText());
              }
              if (!!error) {
                console.log("error", error);
              }
            }}
            className="m-auto w-[500px] h-[200%] border-4"
          />
        </div>
      )}
    </div>
  );
};
