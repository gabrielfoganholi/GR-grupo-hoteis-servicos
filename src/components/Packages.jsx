import { Link } from "react-router-dom";
import { packages } from "../data/packages";
import { COMPANY } from "../config";

function normalizeText(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function isDateWithinRange(selectedDate, startDate, endDate) {
  if (!selectedDate) return true;
  if (!startDate || !endDate) return false;

  const selected = new Date(`${selectedDate}T00:00:00`);
  const start = new Date(`${startDate}T00:00:00`);
  const end = new Date(`${endDate}T23:59:59`);

  return selected >= start && selected <= end;
}

function createWhatsappMessage(destino, data) {
  const message = `Olá! Procurei um pacote no site da GR${
    destino ? ` para ${destino}` : ""
  }${data ? ` na data ${data}` : ""}, mas não encontrei disponibilidade. Gostaria de receber uma cotação personalizada.`;

  return `${COMPANY.whatsappLink}?text=${encodeURIComponent(message)}`;
}

function PackageCard({ item }) {
  return (
    <article className="package-card">
      <div className="package-image">
        <img src={item.imagem} alt={item.destino} />
        <span className="installments">{item.parcelas}</span>
        <span className="vacancies">Últimas {item.vagas} vagas</span>
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
  );
}

export default function Packages({ searchFilters }) {
  const destino = searchFilters?.destino || "";
  const data = searchFilters?.data || "";

  const normalizedDestino = normalizeText(destino);

  const packagesByDestination = packages.filter((item) => {
    if (!normalizedDestino) return true;

    const searchableText = normalizeText(`
      ${item.destino}
      ${item.local}
      ${item.hotel}
      ${item.data}
    `);

    return searchableText.includes(normalizedDestino);
  });

  const filteredPackages = packagesByDestination.filter((item) =>
    isDateWithinRange(data, item.dataInicio, item.dataFim)
  );

  const hasDestinationSearch = Boolean(normalizedDestino);
  const hasDateSearch = Boolean(data);
  const hasSearch = hasDestinationSearch || hasDateSearch;

  const hasDestinationButWrongDate =
    hasDestinationSearch &&
    hasDateSearch &&
    packagesByDestination.length > 0 &&
    filteredPackages.length === 0;

  const noDestinationFound =
    hasDestinationSearch && packagesByDestination.length === 0;

  const onlyDateWithoutResult =
    !hasDestinationSearch && hasDateSearch && filteredPackages.length === 0;

  return (
    <section className="packages" id="pacotes">
      <div className="container">
        <div className="section-heading center">
          <span>Condições especiais</span>

          <h2>{hasSearch ? "Resultado da busca" : "Pacotes Exclusivos"}</h2>

          <p>
            Aproveite pacotes selecionados com hotéis, datas especiais e
            facilidade de pagamento.
          </p>
        </div>

        {filteredPackages.length > 0 && (
          <div className="packages-grid">
            {filteredPackages.map((item) => (
              <PackageCard item={item} key={item.id} />
            ))}
          </div>
        )}

        {hasDestinationButWrongDate && (
          <div className="no-packages">
            <h3>Não temos pacote para essa data</h3>

            <p>
              Encontramos pacote para esse destino, mas não na data selecionada.
              Veja abaixo as datas disponíveis ou solicite uma nova cotação pelo
              WhatsApp.
            </p>

            <div className="packages-grid alternative-packages">
              {packagesByDestination.map((item) => (
                <PackageCard item={item} key={item.id} />
              ))}
            </div>

            <a
              href={createWhatsappMessage(destino, data)}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary">
                Solicitar Nova Cotação
              </button>
            </a>
          </div>
        )}

        {noDestinationFound && (
          <div className="no-packages">
            <h3>Nenhum pacote encontrado</h3>

            <p>
              Não encontramos pacotes para esse destino no momento. Fale com a
              equipe da GR para receber uma cotação personalizada.
            </p>

            <a
              href={createWhatsappMessage(destino, data)}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary">
                Solicitar Cotação no WhatsApp
              </button>
            </a>
          </div>
        )}

        {onlyDateWithoutResult && (
          <div className="no-packages">
            <h3>Nenhum pacote encontrado nessa data</h3>

            <p>
              Não encontramos pacotes disponíveis para a data selecionada. Fale
              com a equipe da GR para encontrar outras opções.
            </p>

            <a
              href={createWhatsappMessage(destino, data)}
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn-primary">
                Solicitar Cotação no WhatsApp
              </button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}