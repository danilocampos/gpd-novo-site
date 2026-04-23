import { ArrowIcon, WhatsIcon, PinIcon } from '../icons';
import { SECTORS } from '../data';

export default function Hero({ onQuote }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow"><span className="dot"></span>Locação · Consultoria · Terceirização</div>
          <h1 style={{ marginTop: 16 }}>
            Equipamentos <strong>sob medida</strong> para a <em>operação industrial</em> que não pode parar.
          </h1>
          <p className="lead hero-lead">
            Há mais de 14 anos apoiando mineradoras, usinas e grandes obras com frota
            própria, manutenção preventiva e equipes de engenharia em campo.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={onQuote}>
              Solicitar orçamento <ArrowIcon width="16" height="16" />
            </button>
            <a className="btn btn-whats btn-lg" href="https://wa.me/553836723091" target="_blank" rel="noreferrer">
              <WhatsIcon width="16" height="16" /> Falar no WhatsApp
            </a>
          </div>
          <div className="hero-meta">
            <div className="item"><div className="num">+14</div><div className="lbl">anos de mercado</div></div>
            <div className="item"><div className="num">80+</div><div className="lbl">equipamentos ativos</div></div>
            <div className="item"><div className="num">24/7</div><div className="lbl">atendimento</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://gpdlocacoes.com.br/assets/img/editado-aHR0cHM6.png" alt="Operação GPD" />
          <div className="hero-badge">
            <span className="ping"></span> Frota ativa agora
          </div>
          <div className="hero-card">
            <div>
              <div className="t">Paracatu · Brumadinho · Unaí</div>
              <div className="s">Cobertura regional MG / GO / TO</div>
            </div>
            <PinIcon width="20" height="20" stroke="#0a3d7a" />
          </div>
        </div>
      </div>
      <div className="sector-bar">
        <div className="sector-track">
          {[...SECTORS, ...SECTORS].map((s, i) => <span key={i}>{s}</span>)}
        </div>
      </div>
    </section>
  );
}
