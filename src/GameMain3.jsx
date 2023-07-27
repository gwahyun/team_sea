import { useEffect } from "react";
import mainArt from "./assets/2.gif";
import startButton from "./assets/startButton.png";
import { useNavigate } from "react-router-dom";
export default function GameMain3() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <img className="relative" src={mainArt} />
      <img
        src={startButton}
        className="absolute cursor-pointer fade-in"
        onClick={() => navigate("/1")}
      />
    </div>
  );
}