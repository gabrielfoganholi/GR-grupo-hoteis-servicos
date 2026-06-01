import { Link } from "react-router-dom";
import { packages } from "../data/packages";

export default function Packages() {
  return (
    <section className="packages" id="pacotes">
      <div className="container">
        <div className="section-heading center">
          <span>Condições especiais</span>
          <h2>Pacotes Exclusivos</h2>
          <p>
            Aproveite pacotes selecionados com hotéis, datas especiais e
            facilidade de pagamento.
          </p>
        </div>

        <div className="packages-grid">
          {packages.map((item) => (
            <article className="package-card" key={item.id}>
              <div className="package-image">
                <img src={item.imagem} alt={item.destino} />

                <span className="installments">{item.parcelas}</span>

                <span className="vacancies">
                  Últimas {item.vagas} vagas
                </span>
              </div>

              <div className="package-content">
                <div>
                  <h3>{item.hotel}</h3>
                  <p className="package-location">
                    {item.destino} • {item.local}
                  </p>
                </div>

                <div className="package-info">
                  <span>{item.data}</span>
                  <span>{item.noites} noites</span>
                </div>

                <div className="package-bottom">
                  <div>
                    <small>A partir de</small>
                    <strong>{item.valor}</strong>
                  </div>

                  <Link to={`/pacote/${item.slug}`}>
                    <button>Ver Detalhes</button>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}