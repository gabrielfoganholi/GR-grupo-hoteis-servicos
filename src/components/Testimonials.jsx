const testimonials = [
  {
    name: "Maria Oliveira",
    text: "Atendimento excelente. A equipe explicou tudo com muita clareza e a viagem foi maravilhosa.",
  },
  {
    name: "Carlos Mendes",
    text: "Gostei muito da organização. O hotel era ótimo e todo o processo foi bem tranquilo.",
  },
  {
    name: "Ana Paula",
    text: "Foi uma experiência incrível. Já quero fechar o próximo pacote com a GR.",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading center">
          <span>Clientes satisfeitos</span>
          <h2>Quem viaja com a GR recomenda</h2>
          <p>
            Depoimentos que reforçam a confiança, o cuidado e a qualidade do
            atendimento.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>
              <p>"{item.text}"</p>
              <strong>{item.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}