import React from "react";
import Image from "next/image";
import { Profile } from "./Profile";
import { LostpostList } from "./LostpostList";

const Main = () => {
  return (
    <div className="">
      {/* w-full h-screen flex text-center */}
      <div className="flex justify-between p-[200px]">
        {/* "max-w-[1600px] w-[500px] h-full mx-auto p-2 justify-between items-center grid lg:grid-cols-5 gap-20" */}
        <LostpostList/>
        <Profile/>
      </div>
    </div>
  );
};

export default Main;
