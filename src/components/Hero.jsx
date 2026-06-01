import { useState } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { COMPANY } from "../config";

export default function Hero({ onSearch }) {
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");

  function handleSearch() {
    onSearch({
      destino,
      data,
    });

    setTimeout(() => {
      const section = document.getElementById("pacotes");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <span className="badge">Explore o Brasil</span>

          <h1>
            Transforme suas próximas férias em uma experiência inesquecível.
          </h1>

          <p>
            Curadoria exclusiva de hotéis e experiências para quem busca
            conforto, segurança e momentos únicos.
          </p>

          <div className="hero-buttons">
            <Link to="/agendamento">
              <button className="btn-primary">Planejar Minha Viagem</button>
            </Link>

            <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
              <button className="btn-outline-light">WhatsApp</button>
            </a>
          </div>

          <div className="search-box">
            <div className="search-field">
              <label>Onde você quer ir?</label>

              <input
                type="text"
                placeholder="Ex: Porto Seguro"
                value={destino}
                onChange={(event) => setDestino(event.target.value)}
              />
            </div>

            <div className="search-field">
              <label>Quando?</label>

              <input
                type="date"
                value={data}
                onChange={(event) => setData(event.target.value)}
              />
            </div>

            <button type="button" className="search-btn" onClick={handleSearch}>
              🔍 Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}