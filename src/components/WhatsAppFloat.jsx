import { createWhatsAppLink, WHATSAPP_MESSAGES } from "../config";

export default function WhatsAppFloat() {
  return (
    <a
      href={createWhatsAppLink(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
    >
      <div className="whatsapp-icon">💬</div>

      <div className="whatsapp-text">
        <span>Fale com o Reinaldo</span>
      </div>
    </a>
  );
}