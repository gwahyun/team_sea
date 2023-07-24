import mainArt from "./assets/12_cropped.gif";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import human3 from "./assets/walk3.gif";

export default function Move3() {
  const [gif, setGif] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(()=> setGif(human3), 0);
    setTimeout(() => navigate("/9"), 9000);
  }, []);

  return (
    <div className="flex flex-col">
      <img className="relative" src={mainArt} />
      <img className="" src={gif} />
    </div>
  );
}
