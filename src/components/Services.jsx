export default function Services({ onQuote, setPage }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>O que fazemos</div>
            <h2 style={{ marginTop: 14 }}>Soluções de engenharia com foco em continuidade operacional.</h2>
          </div>
          <p>
            Nosso carro-chefe é a locação de equipamentos pesados, complementada por serviços de
            consultoria e terceirização para que o cliente foque no seu core.
          </p>
        </div>
        <div className="services">
          <div className="service primary">
            <div>
              <div className="tag">01 / Principal</div>
              <h3>Locação de Equipamentos</h3>
              <p>Frota própria com manutenção preventiva rigorosa. Entregamos, operamos e garantimos SLA de reposição em até 12h.</p>
              <ul>
                <li><span>Torres de iluminação</span><span>14 unid</span></li>
                <li><span>Geradores 60–500 kVA</span><span>8 unid</span></li>
                <li><span>Empilhadeiras 2.5–7 ton</span><span>12 unid</span></li>
                <li><span>Containers & Caminhões</span><span>28 unid</span></li>
              </ul>
            </div>
            <div className="service-bottom">
              <button
                className="btn btn-sm"
                style={{ background: 'rgba(255,255,255,.12)', color: '#fff' }}
                onClick={() => setPage('catalogo')}
              >
                Ver catálogo completo
              </button>
              <span className="arrow">→</span>
            </div>
          </div>
          <div className="service">
            <div>
              <div className="tag">02 / Complementar</div>
              <h3>Consultoria</h3>
              <p>Planos e projetos de engenharia — elétrica, instrumentação, automação, mecânica e civil.</p>
            </div>
            <div className="service-bottom">
              <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>5 disciplinas</span>
              <span className="arrow" style={{ color: 'var(--brand)' }}>→</span>
            </div>
          </div>
          <div className="service">
            <div>
              <div className="tag">03 / Complementar</div>
              <h3>Terceirização</h3>
              <p>Equipes capacitadas alocadas em sua operação. Gestão de ponto, segurança e treinamento por nossa conta.</p>
            </div>
            <div className="service-bottom">
              <span className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>Equipes dedicadas</span>
              <span className="arrow" style={{ color: 'var(--brand)' }}>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
