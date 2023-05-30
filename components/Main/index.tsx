import React from "react";
import Image from "next/image";
import { LostpostList } from "../LostPost/LostpostList";
import { Profile } from "../Profile";

const Main = () => {
  return (
    <div className="">
      <div className="flex pt-[130px] pl-[200px]">
        <LostpostList />
        <Profile />
      </div>
    </div>
  );
};

export default Main;
