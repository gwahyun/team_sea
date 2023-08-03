import mainArt from "../src/assets/10_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human from "./assets/walk_loop.gif";

export default function Move1() {
  const [gif, setGif] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setGif(human), 0);
    setTimeout(() => navigate("/5"), 10800);
  }, []);
  return (
    <div className="flex flex-col items-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img className="w-[80%]" src={gif} />
    </div>
  );
}
