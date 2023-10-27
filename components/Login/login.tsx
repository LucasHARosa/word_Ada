import { useState } from "react";
import Modal from "react-modal";
import styles from "./styles.module.scss";

interface Props {
  isOpen: boolean;
  handleLogin: (user:string, pass:string) => void;
}
export function Login({isOpen,handleLogin}: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  

  return (
    <Modal 
      isOpen={isOpen}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <div className={styles.loginmodal}>
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={()=>handleLogin(username,password)}>Sing in</button>
      </div>
    </Modal>
    
  );
};
