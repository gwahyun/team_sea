import mainArt from "./assets/13_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human4 from "./assets/walk4.gif";

export default function Move4() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/11"), 9000);
  }, []);

  return (
    <div className="flex flex-col">
      <img className="relative" src={mainArt} />
      <img className="" src={human4} />
    </div>
  );
}
