export const COMPANY = {
  name: "GR Grupo Hotéis & Serviços",

  consultant: "Reinaldo",

  whatsapp: "5511962726400",

  email: "contato@grhoteis.com.br",

  instagram: "https://instagram.com/grgrupo",

  slogan: "Experiências inesquecíveis começam aqui.",
};

export function createWhatsAppLink(message) {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: `Olá, ${COMPANY.consultant}! 👋

Acabei de acessar o site da ${COMPANY.name} e gostaria de receber mais informações sobre os pacotes disponíveis.

Pode me ajudar?`,

  quote: `Olá, ${COMPANY.consultant}!

Gostaria de receber uma cotação personalizada para uma viagem.

Pode me ajudar?`,
};