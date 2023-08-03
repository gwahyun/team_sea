import mainArt from "./assets/15_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import q from "./assets/15q.png";
export default function Question6() {
  return (
    <div className="flex justify-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img className="absolute w-[50%] " src={q} />
      <Link to={"/result"}>
        <div className="absolute bottom-28 right-[45%] w-[10%] h-[38%] opacity-0">
          _
        </div>
      </Link>
    </div>
  );
}
