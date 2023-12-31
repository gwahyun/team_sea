import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Opening from "./assets/music/opening.mp3";
import bgm from "./assets/music/bgm.mp3";
import result from "./assets/music/resultBgm.mp3";

export default function Sound() {
  const [music, setMusic] = useState("");
  const location = useLocation();

  useEffect(() => {

    if (location.pathname === "/start") {
      setMusic(Opening);
    }
    if (location.pathname === "/4") {
      setMusic(bgm);
    }

    if (location.pathname === "/result") {
      setMusic(result);
    }

    console.log(music);
  }, [location.pathname]);

  return <audio src={music} autoPlay={true} loop={true} />;
}
