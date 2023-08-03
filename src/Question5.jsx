import mainArt from "./assets/14_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import q from "./assets/14q.png";
export default function Question5() {
  return (
    <div className="flex justify-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img className="absolute w-[50%]" src={q} />
      <Link to={"/14"}>
        <div className="absolute bottom-28 right-[15%] w-[70%] h-[38%] opacity-0">
          _
        </div>
      </Link>
    </div>
  );
}
