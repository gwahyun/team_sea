import mainArt from "./assets/12_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import q from "./assets/12q.png";
export default function Question3() {
  return (
    <div className="flex justify-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img src={q} className="absolute w-[50%]" />
      <Link to={"/10"}>
        <div className="absolute bottom-32 right-[25%] w-[50%] h-[40%] bg-red-100 opacity-0">
          _
        </div>
      </Link>
    </div>
  );
}
