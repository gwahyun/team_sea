import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import { AudioContext } from 'standardized-audio-context';
import GameMain2 from "./GameMain2";
import GameMain3 from "./GameMain3";
import Sine1 from "./Sine1";
import Sine2 from "./Sine2";
import Sine3 from "./Sine3";
import Move1 from "./Move1";
import Move2 from "./Move2";
import Move3 from "./Move3";
import Move4 from "./Move4";
import Move5 from "./Move5";
import Move6 from "./Move6";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Result from "./Result";
import "galmuri/dist/galmuri.css";
import "./App.css";
import opening from './assets/music/opening.mp3';
import bgm from './assets/music/bgm.mp3';
import result from './assets/music/resultBgm.mp3';

function App() {
  const [musicURL, setMusicURL] = useState("");
  const [audioContext, setAudioContext] = useState(null);
  const [sources, setSources] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const startAudio = async (url) => {
      if (!audioContext) {
        const context = new AudioContext();
        setAudioContext(context);
      } else {
        for (let source of sources) {
          source.stop();
        }
        const audio = await fetch(url);
        const buffer = await audio.arrayBuffer();
        const decoded = await audioContext.decodeAudioData(buffer);
        const source = audioContext.createBufferSource();
        source.loop = true;
        source.buffer = decoded;
        source.connect(audioContext.destination);
        source.start(0);
        sources.push(source);
      }
    }

    if (location.pathname === "/" && musicURL) {
      startAudio(opening);
    }
    if (location.pathname === "/1" && musicURL) {
      startAudio(musicURL);
    }
    if (location.pathname === "/4") {
      startAudio(bgm);
    }
    if (location.pathname === "/result") {
      startAudio(result);
    }
  }, [audioContext, musicURL, location.pathname]);

  function changeMusic(url) {
    console.log('changeMusic');
    setMusicURL(url);
  }

  return (
    <>
      <Routes>
        {/* 최초 AudioContext의 생성은 유저 인터랙션을 통해야 함 */}
        <Route path='/' element={<GameMain2/>}/>
        <Route path="/start" element={<GameMain3  changeMusic={changeMusic} />} />
        <Route path="/1" element={<Sine1 />} />
        <Route path="/2" element={<Sine2 />} />
        <Route path="/3" element={<Sine3 />} />
        <Route path="/4" element={<Move1 />} />
        <Route path="/5" element={<Question1 />} />
        <Route path="/6" element={<Move2 />} />
        <Route path="/7" element={<Question2 />} />
        <Route path="/8" element={<Move3 />} />
        <Route path="/9" element={<Question3 />} />
        <Route path="/10" element={<Move4 />} />
        <Route path="/11" element={<Question4 />} />
        <Route path="/12" element={<Move5 />} />
        <Route path="/13" element={<Question5 />} />
        <Route path="/14" element={<Move6 />} />
        <Route path="/15" element={<Question6 />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
