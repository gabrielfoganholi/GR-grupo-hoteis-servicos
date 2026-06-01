import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COMPANY } from "../config";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  function goToSection(sectionId) {
    navigate("/");
    setMenuOpen(false);

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
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-box">
            <img
              src={logo}
              alt="GR Grupo Hotéis & Serviços"
              className="logo-image"
            />
          </span>

          <span className="logo-name">GR Grupo Hotéis & Serviços</span>
        </Link>

        <nav className={menuOpen ? "menu-area active" : "menu-area"}>
          <ul className="menu">
            <li><button onClick={() => goToSection("destinos")}>Destinos</button></li>
            <li><button onClick={() => goToSection("pacotes")}>Pacotes</button></li>
            <li><button onClick={() => goToSection("sobre")}>Sobre Nós</button></li>
            <li><button onClick={() => goToSection("contato")}>Contato</button></li>
          </ul>

          <div className="mobile-menu-actions">
            <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
              <button className="btn-outline">WhatsApp</button>
            </a>

            <Link to="/agendamento" onClick={() => setMenuOpen(false)}>
              <button className="btn-primary">Planejar Minha Viagem</button>
            </Link>
          </div>
        </nav>

        <div className="actions desktop-actions">
          <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
            <button className="btn-outline">WhatsApp</button>
          </a>

          <Link to="/agendamento">
            <button className="btn-primary">Planejar Minha Viagem</button>
          </Link>
        </div>

        <button
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}