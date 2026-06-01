import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { createWhatsAppLink } from "../config";

export default function Schedule() {
  const [searchParams] = useSearchParams();

  const destinoUrl = searchParams.get("destino") || "";

  const [form, setForm] = useState({
    nome: "",
    telefone: "",
    email: "",
    cidade: "",
    passageiros: "2",
    destino: destinoUrl,
    dataIda: "",
    dataVolta: "",
    horario: "",
    observacoes: "",
  });

  const horarios = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (form.dataIda && form.dataVolta && form.dataVolta < form.dataIda) {
      alert("A data de volta não pode ser anterior à data de ida.");
      return;
    }

    const mensagem = `
Olá! Gostaria de solicitar um atendimento para viagem.

Nome: ${form.nome}
Telefone: ${form.telefone}
E-mail: ${form.email}
Cidade: ${form.cidade}
Destino de interesse: ${form.destino}
Quantidade de passageiros: ${form.passageiros}
Data de ida: ${form.dataIda}
Data de volta: ${form.dataVolta}
Horário preferido: ${form.horario || "Não informado"}

Observações:
${form.observacoes || "Sem observações."}
`;

    window.open(createWhatsAppLink(mensagem), "_blank");
  }

  return (
    <>
      <Header />

      <main className="schedule-page">
        <section className="schedule-hero">
          <div className="container schedule-hero-content">
            <span className="badge">Atendimento personalizado</span>

            <h1>Planeje sua próxima viagem com a GR</h1>

            <p>
              Preencha seus dados e nossa equipe entrará em contato para montar
              a melhor experiência para você.
            </p>
          </div>
        </section>

        <section className="schedule-section">
          <div className="container schedule-layout">
            <div className="schedule-info">
              <h2>Como funciona?</h2>

              <div className="schedule-step">
                <span>1</span>
                <div>
                  <h3>Você informa sua ideia de viagem</h3>
                  <p>
                    Conte o destino, quantidade de pessoas e período desejado.
                  </p>
                </div>
              </div>

              <div className="schedule-step">
                <span>2</span>
                <div>
                  <h3>A equipe GR analisa as melhores opções</h3>
                  <p>
                    Buscamos pacotes, hotéis e condições que combinem com sua
                    necessidade.
                  </p>
                </div>
              </div>

              <div className="schedule-step">
                <span>3</span>
                <div>
                  <h3>Você recebe atendimento pelo WhatsApp</h3>
                  <p>
                    Um consultor continua o atendimento de forma simples, rápida
                    e personalizada.
                  </p>
                </div>
              </div>
            </div>

            <form className="schedule-form" onSubmit={handleSubmit}>
              <h2>Solicitar atendimento</h2>

              <div className="form-grid">
                <div className="form-field">
                  <label>Nome completo</label>
                  <input
                    type="text"
                    name="nome"
                    placeholder="Seu nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Telefone / WhatsApp</label>
                  <input
                    type="tel"
                    name="telefone"
                    placeholder="(11) 99999-9999"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="seuemail@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label>Cidade</label>
                  <input
                    type="text"
                    name="cidade"
                    placeholder="Sua cidade"
                    value={form.cidade}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label>Quantidade de passageiros</label>
                  <input
                    type="number"
                    name="passageiros"
                    min="1"
                    value={form.passageiros}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Destino de interesse</label>
                  <input
                    type="text"
                    name="destino"
                    placeholder="Ex: Porto Seguro"
                    value={form.destino}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Data de ida</label>
                  <input
                    type="date"
                    name="dataIda"
                    value={form.dataIda}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label>Data de volta</label>
                  <input
                    type="date"
                    name="dataVolta"
                    value={form.dataVolta}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Horário preferido</label>

                <div className="time-options">
                  {horarios.map((horario) => (
                    <button
                      type="button"
                      key={horario}
                      className={form.horario === horario ? "active" : ""}
                      onClick={() =>
                        setForm((prev) => ({
                          ...prev,
                          horario,
                        }))
                      }
                    >
                      {horario}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-field">
                <label>Observações</label>
                <textarea
                  name="observacoes"
                  placeholder="Conte detalhes importantes sobre sua viagem..."
                  value={form.observacoes}
                  onChange={handleChange}
                />
              </div>

              <button className="btn-primary schedule-submit" type="submit">
                Solicitar Atendimento pelo WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>

      <WhatsAppFloat />
    </>
  );
}