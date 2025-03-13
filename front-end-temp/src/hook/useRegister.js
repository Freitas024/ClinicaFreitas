import { useState } from "react";

export const useRegister = () => {
  const [registerPaciente, setRegisterPaciente] = useState({
    name: "",
    email: "",
    cpf: "",
    password: "",
    consultation: []
  });
  const [registerDoctor, setRegisterDoctor] = useState({
    name: "",
    email: "",
    cpf: "",
    crm: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterPaciente((prev) => ({
      ...prev,
      [name]: value,
    }));

    setRegisterDoctor((prev) => ({
        ...prev,
        [name]: value,
    }));
  };

  return { registerPaciente, handleChange, setRegisterPaciente, registerDoctor, setRegisterDoctor };
};
