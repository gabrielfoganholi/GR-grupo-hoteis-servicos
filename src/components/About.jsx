export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container about-layout">
        <div className="about-content">
          <span>Sobre a GR</span>

          <h2>Viagens planejadas com cuidado, segurança e atendimento humano.</h2>

          <p>
            A GR Grupo Hotéis & Serviços conecta pessoas a experiências
            inesquecíveis por meio de pacotes turísticos selecionados, hotéis de
            qualidade e suporte personalizado do início ao fim da viagem.
          </p>

          <div className="about-features">
            <div>
              <strong>+ Experiência</strong>
              <p>Atendimento próximo e consultivo.</p>
            </div>

            <div>
              <strong>+ Segurança</strong>
              <p>Parceiros confiáveis e hotéis selecionados.</p>
            </div>

            <div>
              <strong>+ Facilidade</strong>
              <p>Condições de pagamento pensadas para você.</p>
            </div>
          </div>
        </div>

        <div className="about-card">
          <h3>Por que escolher a GR?</h3>

          <ul>
            <li>Atendimento personalizado</li>
            <li>Pacotes para famílias, casais e grupos</li>
            <li>Suporte antes e durante a viagem</li>
            <li>Destinos nacionais incríveis</li>
          </ul>
        </div>
      </div>
    </section>
  );
}