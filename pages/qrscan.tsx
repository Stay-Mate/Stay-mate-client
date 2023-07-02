import React from "react";
import { Qrscan } from "@/components/Qrscan";
import NavBar from "@/components/NavBar";

const qrscan = () => {
  return (
    <>
      <NavBar />
      <div className="pt-[150px]">
        <Qrscan />
      </div>
    </>
  );
};

export default qrscan;
