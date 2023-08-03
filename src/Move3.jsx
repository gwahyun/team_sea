import mainArt from "./assets/12_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human3 from "./assets/walk_loop.gif";

export default function Move3() {
  const [gif, setGif] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => setGif(human3), 0);
    setTimeout(() => navigate("/9"), 10800);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <img className="relative w-[80%]" src={mainArt} />
      <img className="w-[80%]" src={gif} />
    </div>
  );
}
