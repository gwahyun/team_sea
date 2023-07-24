import mainArt from "../src/assets/10_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human from "./assets/walk1.gif";

export default function Move1() {
    const [gif, setGif] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(()=> setGif(human), 0);
    setTimeout(() => navigate("/5"), 9000);
  }, []);
  return (
    <div className="flex flex-col">
      <img className="relative" src={mainArt} />
      <img className="" src={gif} />
    </div>
  );
}
