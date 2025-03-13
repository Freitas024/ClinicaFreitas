import { useState } from "react";
import { useLogin } from "../../hook/useLogin";
import { useNavigation } from "../../hook/useNavigation";
import "./styleHome.css";

export default function Principal() {
  const { handleNavigate } = useNavigation();
  const { login, handleChange, setLogin } = useLogin();
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const Patients = JSON.parse(localStorage.getItem("PatientRegistered")) || [];

    const patient = Patients.find( p =>  
      p.name.toLowerCase() === login.name.toLowerCase() && 
      p.password.toLowerCase() === login.password.toLowerCase()
    )

    if(patient){
      localStorage.setItem("loggedInPatient", JSON.stringify(patient));
      handleNavigate("/Consultas")
    }else {
      setMessageError("ERROR: nome ou senha incorretos.")
      setLogin({ name: "", password: "" });
    }
  };

  return (
    <main className="WrapperHome">
      <form className="formularioLogin" onSubmit={handleSubmit}>
        <h1 className="tituloLogin">Entrar na Conta</h1>
        {messageError && <p className="errorMessage">{messageError}</p>}
        <div className="containerInput">
          <input
            className="inputLogin"
            type="text"
            name="name"
            placeholder="Nome"
            value={login.name}
            onChange={handleChange}
          />
          <input
            className="inputLogin"
            type="password"
            name="password"
            placeholder="************"
            value={login.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="buttonLogin">
          Entrar
        </button>
      </form>
      <div className="RegisterUser">
        <h3 className="tituleNewUser">Novo Usuário?</h3>
        <p className="textNewUser">
          Escolha uma das opções abaixo <br /> para se cadastrar em nosso
          sistema.
        </p>
        <div className="containerButtonHome">
          <button
            className="buttonWhite"
            onClick={() => handleNavigate("/CadastroPaciente")}
          >
            Paciente
          </button>
          <button
            className="buttonWhite"
            onClick={() => handleNavigate("/CadastroProfissional")}
          >
            Médico
          </button>
        </div>
      </div>
    </main>
  );
}
