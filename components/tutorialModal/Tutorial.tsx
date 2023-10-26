import Modal from "react-modal";

interface TutorialProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function Tutorial({ isOpen, onRequestClose }: TutorialProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <h1 className="goodLuck">Bem-Vindo</h1>
      <p>
        Você tem 6 tentativas para acertar a palavra
      </p>
      <img src="/WordExample.png" alt="" />
      <p>
        Letras com o fundo <span className="greenText">Verde</span> estão na posição correta.
      </p>
      <p>
        Letras com o fundo <span className="yellowText">Amarelo</span> estão em outra posição.
      </p>
      <p>
        Letras com o fundo <span className="grayText">Cinza</span> não fazem
        parte da palavra
      </p>
      
      <p>
        Uma palavra nova é escolhida a cada dia.
      </p>
        
      
      
    </Modal>
  );
}
