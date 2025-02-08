import { useNavigation } from "../../hook/useNavigation";
import { useRegister } from "../../hook/useRegister";
import "./styleDoctor.css";

export default function CadastroProfissional() {
  const { handleNavigate } = useNavigation();
  const { registerDoctor, handleChange, setRegisterDoctor } = useRegister();

  const handleSubmit = (event) => {
    event.preventDefault();

    const doctors = JSON.parse(localStorage.getItem("doctorRegistered")) || [];

    doctors.push(registerDoctor);

    localStorage.setItem("doctorRegistered", JSON.stringify(doctors));
    

    setRegisterDoctor({name: "", email: "", crm: "", cpf: "", password: ""});
  }

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
      <form className="formularioDoctor" onSubmit={handleSubmit}>
        <h3 className="titleFormsDoctor">Cadastro Profissional da saúde</h3>
        <div className="containerInputsDoctor">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="inputDoctor"
            onChange={handleChange}
            value={registerDoctor.name}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className="inputDoctor"
            onChange={handleChange}
            value={registerDoctor.email}
          />
          <input
            type="number"
            name="cpf"
            placeholder="cpf"
            className="inputDoctor"
            onChange={handleChange}
            value={registerDoctor.cpf}
          />
          <input
            type="number"
            name="crm"
            placeholder="CRM"
            className="inputDoctor"
            onChange={handleChange}
            value={registerDoctor.crm}
          />
          <input
            type="password"
            name="password"
            placeholder="*******"
            className="inputDoctor"
            onChange={handleChange}
            value={registerDoctor.password}
          />
        </div>
        <button className="buttonRegisteredDoctor" type="submit">Criar Conta</button>
      </form>
    </main>
  );
}
