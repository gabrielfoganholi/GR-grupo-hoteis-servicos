const destinations = [
  {
    name: "Porto Seguro",
    state: "Bahia",
    image: "/images/porto-seguro/1.jpg",
  },
  {
    name: "Arraial d'Ajuda",
    state: "Bahia",
    image: "/images/arraial/1.jpg",
  },
  {
    name: "Natal",
    state: "Rio Grande do Norte",
    image: "/images/natal/1.jpg",
  },
  {
    name: "João Pessoa",
    state: "Paraíba",
    image: "/images/joao-pessoa/1.jpg",
  },
  {
    name: "Maceió",
    state: "Alagoas",
    image: "/images/maceio/1.jpg",
  },
];

export default function Destinations() {
  function handleViewPackages() {
    const section = document.getElementById("pacotes");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  return (
    <section className="destinations" id="destinos">
      <div className="container">
        <div className="section-heading">
          <span>Explore o Brasil</span>
          <h2>Destinos em Destaque</h2>
          <p>
            Selecionamos destinos incríveis para quem busca conforto, lazer e
            experiências inesquecíveis.
          </p>
        </div>

        <div className="destinations-grid">
          {destinations.map((item) => (
            <article className="destination-card" key={item.name}>
              <img src={item.image} alt={item.name} />

              <div className="destination-overlay">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.state}</p>
                </div>

                <button
                  type="button"
                  className="destination-button"
                  onClick={handleViewPackages}
                >
                  Ver Pacotes
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}