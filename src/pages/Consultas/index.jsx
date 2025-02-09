import Card from "../../components/CardDoctor";
import Header from "../../components/header";
import "./style.css";

export default function Consultas() {

  return (
    <main>
      <Header />
      <button className="buttonNewQuery">Nova Consulta</button>
      <hr/> 
      <Card />
    </main>
  );
}
