import Modal from "react-modal";
import { getCopyPaste, getGameWord } from "../../lib/helpers";

interface EndScreenProps {
  isOpen: boolean;
  onRequestClose: () => void;
  dailyWord?: string;
  wordColors: number[];
}

export function EndScreen({
  isOpen,
  onRequestClose,
  dailyWord,
  wordColors,
}: EndScreenProps) {
  const word = "a";
  //const word = getGameWord()
  //const word = getLocalStorage("@Verbo:word");
  console.log("palavra = >",word)
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <h1 className="dailyWordInfo">Palavra do dia: {dailyWord} </h1>
      {/* <button className="share" onClick={() => getCopyPaste(wordColors)}>
        Copiar Resultado
      </button> */}
      <span className="creatorInfo">
        Jogo feito por:{" "}
        <a href="https://github.com/LucasHARosa" target="_blank" rel="noreferrer">
          Lucas Rosa
        </a>
      </span>
    </Modal>
  );
}
