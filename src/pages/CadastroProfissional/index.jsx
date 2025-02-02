import { useNavigation } from "../../hook/useNavigation";
import "./styleDoctor.css";

export default function CadastroProfissional() {
  const { handleNavigate } = useNavigation();
  return (
    <main className="WrapperDoctor">
      <div className="containerReturnLogin">
        <h3 className="titleReturnLogin">Já possui uma conta?</h3>
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
      <form className="formularioDoctor">
        <h3 className="titleFormsDoctor">Cadastro Profissional da saúde</h3>
        <div className="containerInputsDoctor">
          <input type="text" placeholder="Nome" className="inputDoctor" />
          <input type="text" placeholder="email" className="inputDoctor" />
          <input type="text" placeholder="cpf" className="inputDoctor" />
          <input type="text" placeholder="CRM" className="inputDoctor" />
          <input type="text" placeholder="*******" className="inputDoctor" />
        </div>
        <button className="buttonRegisteredDoctor">Criar Conta</button>
      </form>
    </main>
  );
}
