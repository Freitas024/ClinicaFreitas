import { useState } from "react";

export const useRegister = () => {
  const [registerPaciente, setRegisterPaciente] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  
  const [registerDoctor, setRegisterDoctor] = useState({
    name: "",
    email: "",
    cpf: "",
    crm: "",
    password: "",
  });

  const handleChange = (event, type) => {
    const { name, value } = event.target;
  
    if (type === "paciente") {
      setRegisterPaciente((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else if (type === "doctor") {
      setRegisterDoctor((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  

  return { registerPaciente, handleChange, setRegisterPaciente, registerDoctor, setRegisterDoctor };
};
