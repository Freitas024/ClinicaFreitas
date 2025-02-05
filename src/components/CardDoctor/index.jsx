import {DoctorRegistered} from "../../Controll";
export default function Cards() {

  return (
    <ul>
      {DoctorRegistered.map((doctor, index) => (
          <li key={index}>
            <h2>{doctor.name}</h2>
            <h3>Paciente Padrão</h3>
            <p>Clinico Geral</p>
            <button>Desmarcar consulta</button>
          </li>
      ))}
    </ul>
  );
}
