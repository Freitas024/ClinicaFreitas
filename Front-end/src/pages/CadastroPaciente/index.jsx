import { useNavigation } from "../../hook/useNavigation";
import { useRegister } from "../../hook/useRegister";
import axios from "axios";
import "./stylePatient.css";


export default function CadastroPaciente() {

  const { handleNavigate } = useNavigation();
  const { handleChange, registerPaciente, setRegisterPaciente } = useRegister();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(registerPaciente);
      const response = await axios.post('http://localhost:3000/api/patient', registerPaciente);

      console.log(`Paciente guardado com sucesso:!: ${response.data}`);

      setRegisterPaciente({
        name: "",
        email: "",
        cpf: "",
        password: "",
      });

    } catch(err)  {
      console.log(`Erro ao enviar dados: ${err}`);
    };
  };

  return (
    <main className="wrapperPatient">
      <div className="containerReturnLogin">
        <h3 className="titleReturnLogin">
          Já possui uma <br /> conta?
        </h3>
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
      <form className="formularioPatient" onSubmit={handleSubmit}>
        <h3 className="titlePatient">Cadastro Paciente</h3>
        <div className="containerInputs">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="inputPatient"
            onChange={(e) => handleChange(e, "paciente")}
            value={registerPaciente.name}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className="inputPatient"
            onChange={(e) => handleChange(e, "paciente")}
            value={registerPaciente.email}
          />
          <input
            type="text"
            name="cpf"
            placeholder="cpf"
            className="inputPatient"
            onChange={(e) => handleChange(e, "paciente")}
            value={registerPaciente.cpf}
          />
          <input
            type="password"
            name="password"
            placeholder="*******"
            className="inputPatient"
            onChange={(e) => handleChange(e, "paciente")}
            value={registerPaciente.password}
          />
        </div>
        <button className="buttonRegisteredPatient" type="submit">
          Criar Conta
        </button>
      </form>
    </main>
  );
}
