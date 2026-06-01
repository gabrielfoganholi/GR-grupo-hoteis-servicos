import { Link } from "react-router-dom";
import { createWhatsAppLink, WHATSAPP_MESSAGES } from "../config";

export default function CTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-content">
        <div>
          <span>Vamos viajar?</span>

          <h2>Pronto para planejar sua próxima experiência?</h2>

          <p>
            Fale com a equipe da GR e encontre o pacote ideal para sua próxima
            viagem.
          </p>
        </div>

        <div className="final-cta-actions">
          <Link to="/agendamento">
            <button className="btn-primary cta-light">
              Planejar Minha Viagem
            </button>
          </Link>

          <a
            href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn-outline-light">
              WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}