import { useNavigation } from "../../hook/useNavigation";
import "./stylePatient.css";
export default function CadastroPaciente() {
  const { handleNavigate } = useNavigation();

  return (
    <main className="wrapperPatient">
      <div className="containerReturnLogin">
        <h3 className="titleReturnLogin">Já possui uma <br/> conta?</h3>
        <p className="textReturnLogin">
          Clique no botão abaixo para
          <br />
          ir para tela de login
        </p>
        <button
          onClick={() => handleNavigate("/")}
          className="buttonreturnLogin"
        >
          Entrar
        </button>
      </div>
      <form className="formularioPatient">
        <h3 className="titlePatient">Cadastro Paciente</h3>
        <div className="containerInputs">
          <input type="text" placeholder="Nome" className="inputPatient" />
          <input type="text" placeholder="email" className="inputPatient" />
          <input type="text" placeholder="cpf" className="inputPatient" />
          <input type="text" placeholder="*******" className="inputPatient" />
        </div>
        <button className="buttonRegisteredPatient">Criar Conta</button>
      </form>
    </main>
  );
}
