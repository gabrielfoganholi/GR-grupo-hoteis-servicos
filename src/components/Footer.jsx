import { Link, useNavigate } from "react-router-dom";
import { COMPANY } from "../config";
import { scrollToSection } from "../utils/navigation";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div>
          <h3>{COMPANY.name}</h3>

          <p>{COMPANY.slogan}</p>

          <p style={{ marginTop: "12px" }}>
            Pacotes turísticos, hospedagens e experiências para quem busca
            viajar com conforto, segurança e atendimento personalizado.
          </p>
        </div>

        <div>
          <h4>Links Rápidos</h4>

          <button
            className="footer-link"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Home
          </button>

          <button
            className="footer-link"
            onClick={() => scrollToSection(navigate, "destinos")}
          >
            Destinos
          </button>

          <button
            className="footer-link"
            onClick={() => scrollToSection(navigate, "pacotes")}
          >
            Pacotes
          </button>

          <button
            className="footer-link"
            onClick={() => scrollToSection(navigate, "sobre")}
          >
            Sobre Nós
          </button>

          <Link to="/agendamento">Agendamento</Link>
        </div>

        <div>
          <h4>Contato</h4>

          <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>

          <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>

          <a href={COMPANY.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 {COMPANY.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}