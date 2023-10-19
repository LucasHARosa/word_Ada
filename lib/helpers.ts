import toast from "react-hot-toast";
import { Words } from "./words";
import { gameData, setters } from "../lib/interfaces";
import { targetWords } from "./targetWords";


export function getAvailableTiles(rowGuess: string[]) {
  let availableTiles: number[] = [];

  rowGuess.some((letter, index) => {
    if (letter === "") {
      availableTiles.push(index + 1);
    }
  });

  return availableTiles;
}

export function validateWord(word: string) {
  if (Words.includes(word)) {
    return true;
  }
  return false;
}

export function checkWin(word: string[], dailyWord: string[]) {
  console.log(word, dailyWord);
  if (word.toString() === dailyWord.toString()) {
    return true;
  }
  return false;
}

export function checkWord(word: string[], dailyWord: string[]) {
  // 1: Not in Word
  // 2: in Word wrong position
  // 3: in word correct position

  let temp = dailyWord;
  let res: number[] = [];

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (temp.includes(word[i])) {
        if (word[i] === temp[i]) {
          res.push(3);
          temp[i] = "";
          break;
        } else {
          if (word[i] !== temp[j]) {
            continue;
          }
          res.push(2);
          temp[j] = "";
          break;
        }
      } else {
        res.push(1);
        break;
      }
    }
    continue;
  }

  return res;
}

export function toastError(message: string) {
  toast.error(message, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
}

export function saveGameData(gameData: gameData) {
  localStorage.setItem("@Verbo:gameData", JSON.stringify(gameData));
}

export function loadGameData(gameData: gameData, setters: setters) {
  setters.setTiles(gameData.tiles);
  setters.setActiveRow(gameData.activeRow);
  setters.setActiveTile(gameData.activeTile);
  setters.setIsEndOfRow(gameData.isEndOfRow);
  setters.setGuess(gameData.guess);
  setters.setWordColors(gameData.wordColors);
  setters.setIsKeyboardActive(gameData.isKeyboardActive);
  setters.setNotInWord(gameData.notInWord);
  setters.setInWordWrongPosition(gameData.inWordWrongPosition);
  setters.setInWordCorrectPosition(gameData.inWordCorrectPosition);
  setters.setGameEnded(gameData.gameEnded);
}

function getGameNum() {
  const offsetFromDate = new Date(2022, 2, 4).getTime();
  const msOffset = Date.now() - offsetFromDate;
  const dayOffset = msOffset / 1000 / 60 / 60 / 24;
  return Math.ceil(dayOffset);
}

export function getCopyPaste(wordColors: number[]) {
  const noZeros = wordColors.filter((el) => el !== 0);
  let numOfRows: number = noZeros.length / 5;

  let num: number | string = numOfRows;
  let hasWon: boolean = false;
  let lastRow;

  if (numOfRows === 6) {
    lastRow = noZeros.slice(25, 30);
    if (lastRow.includes(1) || lastRow.includes(2)) {
      hasWon = false;
    } else hasWon = true;
  }

  if (num === 6 && !hasWon) {
    num = "X";
  }
  console.log(hasWon);
  console.log(num);
  console.log(lastRow);

  let copyPaste = `Joguei Verbo #${getGameNum()}   ${num}/6 \n\n`;
  let indexes = [5, 10, 15, 20, 25];
  noZeros.forEach((el, index) => {
    switch (el) {
      case 1:
        copyPaste += indexes.includes(index + 1)
          ? ":black_large_square:\n"
          : ":black_large_square:";
        break;
      case 2:
        copyPaste += indexes.includes(index + 1)
          ? ":yellow_square:\n"
          : ":yellow_square:";
        break;
      case 3:
        copyPaste += indexes.includes(index + 1)
          ? ":green_square:\n"
          : ":green_square:";
        break;

      default:
        break;
    }
  });
  //copyPaste += "\n\nJogue em: https://verbo.vercel.app/";
  navigator.clipboard.writeText(copyPaste);
}

export function getDailyWord() {
  // const palavrasArray = Object.entries(palavras);
  // const randomIndex = Math.floor(Math.random() * palavrasArray.length);
  // const [palavraOriginal, palavraTraduzida] = palavrasArray[randomIndex];
  // console.log("palavras",palavraOriginal, palavraTraduzida);
  // return { palavraOriginal, palavraTraduzida };
  const randomIndex = Math.floor(Math.random() * targetWords.length);
  return targetWords[randomIndex];
}

export function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key) || "{}");
}
