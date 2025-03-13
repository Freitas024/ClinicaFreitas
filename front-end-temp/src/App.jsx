import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Principal from "./pages/Principal";
import Paciente from "./pages/CadastroPaciente";
import Profissional from "./pages/CadastroProfissional";
import Consultas from "./pages/Consultas";

export default function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />}/>
        <Route path="/CadastroPaciente" element={<Paciente />}/>
        <Route path="/CadastroProfissional" element={<Profissional />}/>
        <Route path="/Consultas" element={<Consultas />}/>
      </Routes>
    </Router>
  )
}


