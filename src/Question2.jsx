import mainArt from "./assets/11_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import q from "./assets/11q.png";
export default function Question2() {
  return (
    <div className="flex">
      <img className="relative" src={mainArt} />
      <img className="absolute" src={q} />
      <Link to={"/8"} >
        <div className='absolute bottom-0 right-[25%] w-[40%] h-[40%] opacity-0'>_</div>
      </Link>
    </div>
  );
}
