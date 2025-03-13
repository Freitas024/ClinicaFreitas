import { useState, useEffect } from "react";
import "./style.css";

export default function Cards() {
  const [loggedInPatient, setLoggedInPatient] = useState("");
  const [doctorsRegistered, setDoctorsRegistered] = useState([]);

  useEffect(() => {
    const patient = JSON.parse(localStorage.getItem("loggedInPatient"));
    if (patient) {
      setLoggedInPatient(patient.name);
    }

    const doctors = JSON.parse(localStorage.getItem("doctorRegistered"));

    if (doctors) {
      setDoctorsRegistered(doctors);
    }
  }, []);

  return (
    <ul className="wrapperCards">
      {doctorsRegistered.map((doc, index) => (
        <li className="containerCard" key={index}>
          <h2>{doc.name}</h2>
          <h3>
            paciente:
            {loggedInPatient}
          </h3>
          <h4>Especialidade: clinico Geral</h4>
          <button className="buttonCancel">Cancelar</button>
        </li>
      ))}
    </ul>
  );
}
