import mainArt from "./assets/15_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human6 from "./assets/walk6.gif";

export default function Move6() {
  const navigate = useNavigate();
  const [gif, setGif] = useState('');
  useEffect(() => {
    setTimeout(()=> setGif(human6), 0);
    setTimeout(() => navigate("/15"), 9000);
  }, []);

  return (
    <div className="flex flex-col">
      <img className="relative" src={mainArt} />
      <img className="" src={gif} />
    </div>
  );
}
