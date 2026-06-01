import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { packages } from "../data/packages";
import { COMPANY } from "../config";

export default function PackageDetails() {
  const { slug } = useParams();

  const packageItem = packages.find((item) => item.slug === slug);

  if (!packageItem) {
    return (
      <>
        <Header />

        <main className="package-not-found">
          <h1>Pacote não encontrado</h1>

          <p>
            O pacote que você tentou acessar não está disponível.
          </p>

          <Link to="/">
            <button className="btn-primary">
              Voltar para a Home
            </button>
          </Link>
        </main>

        <WhatsAppFloat />
      </>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Olá! Tenho interesse no pacote:

Destino: ${packageItem.destino}
Hotel: ${packageItem.hotel}
Data: ${packageItem.data}
Valor: ${packageItem.valor}

Pode me enviar mais informações?`
  );

  return (
    <>
      <Header />

      <main className="package-details">
        <section
          className="package-hero"
          style={{
            backgroundImage: `url(${packageItem.imagem})`,
          }}
        >
          <div className="package-hero-overlay">
            <div className="container">
              <span className="badge">
                Pacote Exclusivo
              </span>

              <h1>{packageItem.destino}</h1>

              <p>
                {packageItem.hotel} • {packageItem.data}
              </p>
            </div>
          </div>
        </section>

        <section className="package-main">
          <div className="container package-layout">

            <div className="package-left">

              <div className="package-gallery">
                <img
                  src={packageItem.imagem}
                  alt={packageItem.destino}
                />

                <img
                  src={packageItem.imagem}
                  alt={packageItem.hotel}
                />

                <img
                  src={packageItem.imagem}
                  alt={packageItem.local}
                />
              </div>

              <div className="package-box">
                <h2>Informações do Pacote</h2>

                <div className="info-grid">

                  <div>
                    <span>Destino</span>
                    <strong>{packageItem.destino}</strong>
                  </div>

                  <div>
                    <span>Local</span>
                    <strong>{packageItem.local}</strong>
                  </div>

                  <div>
                    <span>Data</span>
                    <strong>{packageItem.data}</strong>
                  </div>

                  <div>
                    <span>Noites</span>
                    <strong>{packageItem.noites} noites</strong>
                  </div>

                  <div>
                    <span>Hotel</span>
                    <strong>{packageItem.hotel}</strong>
                  </div>

                  <div>
                    <span>Disponibilidade</span>
                    <strong>
                      Últimas {packageItem.vagas} vagas
                    </strong>
                  </div>

                </div>
              </div>

              <div className="package-box">
                <h2>O que está incluso</h2>

                <ul className="included-list">
                  <li>Hospedagem no hotel informado</li>
                  <li>Café da manhã</li>
                  <li>Suporte da equipe GR</li>
                  <li>Condições facilitadas de pagamento</li>
                </ul>
              </div>

              <div className="package-box">
                <h2>O que não está incluso</h2>

                <ul className="not-included-list">
                  <li>Despesas pessoais</li>
                  <li>Passeios opcionais</li>
                  <li>Taxas extras não informadas no pacote</li>
                </ul>
              </div>

            </div>

            <aside className="package-sidebar">

              <div className="price-card">

                <span className="urgency">
                  Últimas {packageItem.vagas} vagas
                </span>

                <small>A partir de</small>

                <strong>
                  {packageItem.valor}
                </strong>

                <p>
                  {packageItem.parcelas}
                </p>

                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-primary full">
                    Falar no WhatsApp
                  </button>
                </a>

                <Link
                  to={`/agendamento?destino=${encodeURIComponent(
                    packageItem.destino
                  )}`}
                >
                  <button className="btn-dark full">
                    Agendar Atendimento
                  </button>
                </Link>

              </div>

            </aside>

          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  );
}