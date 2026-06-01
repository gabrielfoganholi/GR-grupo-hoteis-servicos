import { Link } from "react-router-dom";
import { COMPANY } from "../config";

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">

        <div>
          <h3>{COMPANY.name}</h3>

          <p>
            {COMPANY.slogan}
          </p>

          <p style={{ marginTop: "12px" }}>
            Pacotes turísticos, hospedagens e experiências para quem busca
            viajar com conforto, segurança e atendimento personalizado.
          </p>
        </div>

        <div>
          <h4>Links Rápidos</h4>

          <Link to="/">Home</Link>

          <a href="#destinos">
            Destinos
          </a>

          <a href="#pacotes">
            Pacotes
          </a>

          <Link to="/agendamento">
            Agendamento
          </Link>
        </div>

        <div>
          <h4>Contato</h4>

          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          <a href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
          </a>

          <a
            href={COMPANY.instagram}
            target="_blank"
            rel="noreferrer"
          >
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