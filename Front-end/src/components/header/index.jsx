import { useState, useEffect } from "react";
import { useNavigation } from "../../hook/useNavigation";
import "./style.css";

import ClincPop from "../../assets/ClinicPop.png";

export default function Header() {
  const { handleNavigate } = useNavigation();
  const [loggedInPatient, setLoggedInPatient] = useState("");

  useEffect(() => {
    const patient = JSON.parse(localStorage.getItem("loggedInPatient"));
    if (patient) {
      setLoggedInPatient(patient.name);
    }
  }, []);

  const handleClick = (event) => {
    event.preventDefault();

    localStorage.removeItem("loggedInPatient");

    const logout = JSON.parse(localStorage.getItem("loggedInPatient"));

    if(!logout){
      handleNavigate("/");
    }
  };
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
          {loggedInPatient ? loggedInPatient : "Visitante"}!
        </h3>
        <button className="buttonLogout" onClick={handleClick}>sair</button>
      </div>
    </main>
  );
}
