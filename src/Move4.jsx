import mainArt from "./assets/13_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human4 from "./assets/walk_loop.gif";

export default function Move4() {
  const [gif, setGif] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setGif(human4), 0);
    setTimeout(() => navigate("/11"), 10800);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img className="w-[80%]" src={gif} />
    </div>
  );
}
