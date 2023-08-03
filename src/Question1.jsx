import mainArt from "./assets/10.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human from "./assets/10human.gif";
import q from "./assets/10q.png";
export default function Question1() {
  return (
    <div className="flex justify-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img className="absolute w-[50%] " src={q} />
      <Link to={"/6"}>
        <div className="absolute bottom-12 right-[25%] w-[50%] h-[50%] bg-red-100 opacity-0">
          _
        </div>
      </Link>
    </div>
  );
}
