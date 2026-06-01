import { Link, useNavigate } from "react-router-dom";
import { COMPANY } from "../config";
import logo from "../assets/logo.png";

export default function Header() {
  const navigate = useNavigate();

  function goToSection(sectionId) {
    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }

  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="logo">
  <span className="logo-box">
    <img
      src={logo}
      alt="GR Grupo Hotéis & Serviços"
      className="logo-image"
    />
  </span>

  <span className="logo-name">
    GR Grupo Hotéis & Serviços
  </span>
</Link>

        <nav>
          <ul className="menu">
            <li>
              <button onClick={() => goToSection("destinos")}>
                Destinos
              </button>
            </li>

            <li>
              <button onClick={() => goToSection("pacotes")}>
                Pacotes
              </button>
            </li>

            <li>
              <button onClick={() => goToSection("sobre")}>
                Sobre Nós
              </button>
            </li>

            <li>
              <button onClick={() => goToSection("contato")}>
                Contato
              </button>
            </li>
          </ul>
        </nav>

        <div className="actions">
          <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
            <button className="btn-outline">WhatsApp</button>
          </a>

          <Link to="/agendamento">
            <button className="btn-primary">Planejar Minha Viagem</button>
          </Link>
        </div>
      </div>
    </header>
  );
}