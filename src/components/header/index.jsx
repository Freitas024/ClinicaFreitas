import "./style.css";
import { useNavigation } from "../../hook/useNavigation";

import ClincPop from "../../assets/ClinicPop.png";

export default function Header() {
  const { handleNavigate } = useNavigation();
  return (
    <main className="main">
      <img src={ClincPop} alt="logo" onClick={() => handleNavigate("/")}/>
    </main>
  );
}
