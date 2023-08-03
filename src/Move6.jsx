import mainArt from "./assets/15_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human6 from "./assets/walk_loop.gif";

export default function Move6() {
  const navigate = useNavigate();
  const [gif, setGif] = useState("");
  useEffect(() => {
    setTimeout(() => setGif(human6), 0);
    setTimeout(() => navigate("/15"), 10800);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img className="w-[80%]" src={gif} />
    </div>
  );
}
