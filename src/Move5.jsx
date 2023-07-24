import mainArt from "./assets/14_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human5 from "./assets/walk5.gif";

export default function Move5() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/13"), 9000);
  }, []);

  return (
    <div className="flex flex-col">
      <img className="relative" src={mainArt} />
      <img className="" src={human5} />
    </div>
  );
}