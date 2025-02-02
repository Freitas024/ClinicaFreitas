import {DoctorRegistered} from "../../Controll";
export default function Cards() {

  return (
    <ul>
      {DoctorRegistered.map((doctor, index) => (
          <li key={index}>
            <h2>{doctor.name}</h2>
            <h3>{doctor.Paciente}</h3>
            <p>{doctor.specialization}</p>
          </li>
      ))}
    </ul>
  );
}
