import { useState, useEffect } from "react";
import {DoctorRegistered} from "../../Controll";
export default function Cards() {

  const [loggedInPatient, setLoggedInPatient] = useState("");
  
    useEffect(() => {
      const patient = JSON.parse(localStorage.getItem("loggedInPatient"));
      if (patient) {
        setLoggedInPatient(patient.name);
      }
    }, []);

  return (
    <ul>
      {DoctorRegistered.map((doctor, index) => (
          <li key={index}>
            <h2>{doctor.name}</h2>
            <h3>Paciente: {loggedInPatient}</h3>
            <p>Clinico Geral</p>
            <button>Cancelar</button>
          </li>
      ))}
    </ul>
  );
}
