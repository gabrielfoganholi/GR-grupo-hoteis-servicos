import { COMPANY } from "../config";

export default function WhatsAppFloat() {
  return (
    <a
      href={COMPANY.whatsappLink}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
    >
      <div className="whatsapp-icon">
        💬
      </div>

      <div className="whatsapp-text">
        <span>Fale com um consultor</span>
      </div>
    </a>
  );
}