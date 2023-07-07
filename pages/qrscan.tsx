import React from "react";
import { Qrscan } from "@/components/Qrscan";
import NavBar from "@/components/NavBar";

const qrscan = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <div className="m-auto pt-60">
          <Qrscan />
        </div>
      </div>
    </>
  );
};

export default qrscan;
