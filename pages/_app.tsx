import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Tutorial } from "../components/tutorialModal/Tutorial";
import { createContext, useEffect, useState } from "react";
import { EndScreen } from "../components/endModal/EndScreen";
import { ParticleAmong } from "../components/Particles/particlesAmong";
import axios from "axios";
import { getGameWord } from "../lib/helpers";

interface gameEndedContext {
  gameEnded: boolean;
  setGameEnded: Function;
}

interface IWord {
  id: number;
  word: string;
}

export const gameEndedContext = createContext<gameEndedContext>(
  {} as gameEndedContext
);

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const [dailyWord, setDailyWord] = useState("");
  const [wordColors, setWordColors] = useState<number[]>([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [words, setWords] = useState<IWord>();

  // useEffect(() => {
  //   const firstTime = localStorage.getItem("@Verbo:FirstTime");
  //   // if (firstTime !== null) {
  //   //   setIsOpen(false);
  //   // }
  //   localStorage.setItem("@Verbo:FirstTime", "True");
    
  //   const dailyWord = getGameWord();
  //   if(dailyWord !== undefined && dailyWord !== null){
  //     setDailyWord(dailyWord);
  //   }
    
  // }, []);

  useEffect(() => {
    let gameData = JSON.parse(localStorage.getItem("@Verbo:gameData") || "");
    setWordColors(gameData.wordColors);
  }, [gameEnded]);

  // useEffect(() => {
  //   let gameData = JSON.parse(localStorage.getItem("@Verbo:gameData") || "");
  //   if (gameData.gameEnded) {
  //     setIsEndOpen(true);
  //   }
  // }, [gameEnded]);


  useEffect(() => {
    const word = getGameWord();
    setDailyWord(word || "");
  }, [gameEnded, setGameEnded]);

  function handleCloseTutorial() {
    setIsOpen(false);
  }

  function handleCloseEndScreen() {
    setIsEndOpen(false);
  }

  console.log(words);
  return (
    <>
      <gameEndedContext.Provider value={{ gameEnded, setGameEnded }}>
        <EndScreen
          isOpen={gameEnded}
          onRequestClose={handleCloseEndScreen}
          dailyWord={dailyWord}
          wordColors={wordColors}
        />
        <Tutorial isOpen={isOpen} onRequestClose={handleCloseTutorial} />
        <Component {...pageProps} />
        <Toaster />
      </gameEndedContext.Provider>
      <ParticleAmong/>
    </>
  );
}

export default MyApp;
