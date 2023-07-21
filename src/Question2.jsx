import mainArt from "./assets/11_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import q from "./assets/11q.png";
export default function Question2() {
  return (
    <div className="flex">
      <img className="relative" src={mainArt} />
      <Link to={"/8"} className="absolute">
        <img src={q} />
      </Link>
    </div>
  );
}
