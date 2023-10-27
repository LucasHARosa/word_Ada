import Modal from "react-modal";
import { getCopyPaste, getGameWord } from "../../lib/helpers";

interface EndScreenProps {
  isOpen: boolean;
  onRequestClose: () => void;
  dailyWord?: string;
  wordColors: number[];
  definition?: string;
}

export function EndScreen({
  isOpen,
  onRequestClose,
  dailyWord,
  wordColors,
  definition,
}: EndScreenProps) {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <h1 className="dailyWordInfo">Game word:  </h1>
      <h1 className="greenText2">{dailyWord}</h1>
      {/* <button className="share" onClick={() => getCopyPaste(wordColors)}>
        Copiar Resultado
      </button> */}
      <p>
        Definition: {definition}
      </p>
      <span className="creatorInfo">
        Front by:{" "}
        <a href="https://github.com/LucasHARosa" target="_blank" rel="noreferrer">
          Lucas Rosa
        </a>
      </span>
    </Modal>
  );
}
