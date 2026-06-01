import { createWhatsAppLink, WHATSAPP_MESSAGES } from "../config";

export default function WhatsAppFloat() {
  return (
    <a
      href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Falar com Reinaldo no WhatsApp"
    >
      <div className="whatsapp-pulse"></div>

      <div className="whatsapp-icon">
        💬
      </div>

      <div className="whatsapp-text">
        <strong>Fale com o Reinaldo</strong>
      </div>
    </a>
  );
}