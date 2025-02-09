import { useNavigation } from "../../hook/useNavigation";
import { useRegister } from "../../hook/useRegister";
import "./stylePatient.css";
export default function CadastroPaciente() {
  const { handleNavigate } = useNavigation();
  const { handleChange, registerPaciente, setRegisterPaciente } = useRegister();

  const handleSubmit = (event) => {
    event.preventDefault();

    const Patients =
      JSON.parse(localStorage.getItem("PatientRegistered")) || [];

    const newPaciente = {
      ...registerPaciente,
      consultation: registerPaciente.consultation || [],
    };

    Patients.push(newPaciente);

    localStorage.setItem("PatientRegistered", JSON.stringify(Patients));

    setRegisterPaciente({
      name: "",
      email: "",
      cpf: "",
      password: "",
      consultation: [],
    });
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
            onChange={handleChange}
            value={registerPaciente.name}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            className="inputPatient"
            onChange={handleChange}
            value={registerPaciente.email}
          />
          <input
            type="text"
            name="cpf"
            placeholder="cpf"
            className="inputPatient"
            onChange={handleChange}
            value={registerPaciente.cpf}
          />
          <input
            type="password"
            name="password"
            placeholder="*******"
            className="inputPatient"
            onChange={handleChange}
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
