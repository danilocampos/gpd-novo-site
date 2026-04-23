import { CLIENT_LOGOS } from '../data';

export default function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Clientes</div>
            <h2 style={{ marginTop: 14 }}>Atendemos operações que não podem parar.</h2>
          </div>
          <p>Mineração, energia, siderurgia e grandes obras de infraestrutura confiam na nossa frota e nas nossas equipes.</p>
        </div>
        <div className="logo-grid">
          {CLIENT_LOGOS.map((c, i) => (
            <div className="logo-cell" key={i} title={c.name}>
              <img src={c.src} alt={c.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
