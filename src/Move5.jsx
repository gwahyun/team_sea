import mainArt from "./assets/14_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human5 from "./assets/walk_loop.gif";

export default function Move5() {
  const [gif, setGif] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(()=> setGif(human5), 0);
    setTimeout(() => navigate("/13"), 10800);
  }, []);

  return (
    <div className="flex flex-col">
      <img className="relative" src={mainArt} />
      <img className="" src={gif}  />
    </div>
  );
}
