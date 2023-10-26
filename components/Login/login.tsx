import { useState } from "react";
import Modal from "react-modal";

interface Props {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function Login({isOpen,onRequestClose}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <Modal 
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      
    </Modal>
    
  );
};
