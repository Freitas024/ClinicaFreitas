import { useState, useEffect } from "react";
import { useNavigation } from "../../hook/useNavigation";
import "./style.css";

import ClincPop from "../../assets/ClinicPop.png";

export default function Header() {
  const { handleNavigate } = useNavigation();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem('usuarioLogado');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogado');
    handleNavigate('/');
  }

  return (
    <main className="main">
      <img
        className="imageButton"
        src={ClincPop}
        alt="logo"
      />
      <div className="welcome">
        <h3 className="title">
          Bem-Vindo, <br />
          {userName || 'Visitante'}
        </h3>
        <button className="buttonLogout" onClick={handleLogout}>sair</button>
      </div>
    </main>
  );
}
