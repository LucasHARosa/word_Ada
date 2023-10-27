import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Tutorial } from "../components/tutorialModal/Tutorial";
import { createContext, useEffect, useState } from "react";
import { EndScreen } from "../components/endModal/EndScreen";
import { ParticleAmong } from "../components/Particles/particlesAmong";
import axios from "axios";
import { getDefinition, getGameWord } from "../lib/helpers";
import { Login } from "../components/Login/login";

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
  
  const [isOpen, setIsOpen] = useState(false);
  const [isEndOpen, setIsEndOpen] = useState(false);
  const [dailyWord, setDailyWord] = useState("");
  const [wordColors, setWordColors] = useState<number[]>([]);
  const [gameEnded, setGameEnded] = useState(false);
  const [definition, setDefinition] = useState("");

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
    async function getall(){
      const word = getGameWord() || "";
      const definition = getDefinition(word) ;
      setDefinition(await definition);
      setDailyWord(word);
    }
    
    getall();
  }, [gameEnded, setGameEnded]);

  function handleCloseTutorial() {
    setIsOpen(false);
  }

  function handleCloseEndScreen() {
    setIsEndOpen(false);
  }

  

  
  return (
    <>
      <gameEndedContext.Provider value={{ gameEnded, setGameEnded }}>
        <EndScreen
          isOpen={gameEnded}
          onRequestClose={handleCloseEndScreen}
          dailyWord={dailyWord}
          wordColors={wordColors}
          definition={definition}
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
