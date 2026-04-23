const { useState, useEffect, useRef, useMemo, Fragment } = React;

// ---- Icons (simple inline SVGs) ----
const Icon = {
  arrow: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  whats: (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.52 3.48A11.8 11.8 0 0 0 12.07 0C5.46 0 .1 5.36.1 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.24-1.63a11.93 11.93 0 0 0 5.82 1.48h.01c6.61 0 11.97-5.36 11.97-11.97 0-3.2-1.24-6.2-3.52-8.4zM12.07 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.7.97.99-3.6-.24-.37a9.85 9.85 0 0 1-1.52-5.23c0-5.49 4.47-9.95 9.96-9.95 2.66 0 5.16 1.03 7.04 2.92a9.88 9.88 0 0 1 2.92 7.04c0 5.48-4.47 9.95-9.96 9.95zm5.46-7.45c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.48-.9-.79-1.5-1.77-1.68-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.23 5.12 4.53.72.3 1.27.49 1.7.63.72.23 1.37.2 1.89.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg>,
  phone: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.35 1.84.6 2.8.72A2 2 0 0 1 22 16.92z"/></svg>,
  mail: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
  pin: (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>,
};

// ---- Nav ----
function Nav({ current, setPage, onQuote }) {
  const links = [
    { id: 'home', label: 'Início' },
    { id: 'empresa', label: 'A Empresa' },
    { id: 'catalogo', label: 'Locação' },
    { id: 'clientes', label: 'Clientes' },
    { id: 'contato', label: 'Fale Conosco' },
  ];
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" onClick={() => setPage('home')} style={{cursor:'pointer'}}>
          <img src="assets/logo_gpd.png" alt="GPD" style={{height: 64, width: 'auto'}}/>
        </a>
        <nav className="nav-links">
          {links.map(l => (
            <a key={l.id} className={current === l.id ? 'active' : ''}
               onClick={() => setPage(l.id)} style={{cursor:'pointer'}}>{l.label}</a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href="tel:+553836723091">
            <Icon.phone width="14" height="14"/> (38) 3672-3091
          </a>
          <button className="btn btn-primary btn-sm" onClick={onQuote}>
            Solicitar Orçamento <Icon.arrow width="14" height="14"/>
          </button>
        </div>
      </div>
    </header>
  );
}

// ---- Hero ----
function Hero({ onQuote }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow"><span className="dot"></span>Locação · Consultoria · Terceirização</div>
          <h1 style={{marginTop: 16}}>
            Equipamentos <strong>sob medida</strong> para a <em>operação industrial</em> que não pode parar.
          </h1>
          <p className="lead hero-lead">
            Há mais de 14 anos apoiando mineradoras, usinas e grandes obras com frota
            própria, manutenção preventiva e equipes de engenharia em campo.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg" onClick={onQuote}>
              Solicitar orçamento <Icon.arrow width="16" height="16"/>
            </button>
            <a className="btn btn-whats btn-lg" href="https://wa.me/553836723091" target="_blank">
              <Icon.whats width="16" height="16"/> Falar no WhatsApp
            </a>
          </div>
          <div className="hero-meta">
            <div className="item"><div className="num">+14</div><div className="lbl">anos de mercado</div></div>
            <div className="item"><div className="num">80+</div><div className="lbl">equipamentos ativos</div></div>
            <div className="item"><div className="num">24/7</div><div className="lbl">atendimento</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="https://gpdlocacoes.com.br/assets/img/editado-aHR0cHM6.png" alt="Operação GPD"/>
          <div className="hero-badge">
            <span className="ping"></span> Frota ativa agora
          </div>
          <div className="hero-card">
            <div>
              <div className="t">Paracatu · Brumadinho · Unaí</div>
              <div className="s">Cobertura regional MG / GO / TO</div>
            </div>
            <Icon.pin width="20" height="20" stroke="#0a3d7a"/>
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

// ---- Services ----
function Services({ onQuote, setPage }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>O que fazemos</div>
            <h2 style={{marginTop: 14}}>Soluções de engenharia com foco em continuidade operacional.</h2>
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
              <button className="btn btn-sm" style={{background:'rgba(255,255,255,.12)', color:'#fff'}} onClick={() => setPage('catalogo')}>
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
              <span className="mono" style={{fontSize: 12, color: 'var(--muted)'}}>5 disciplinas</span>
              <span className="arrow" style={{color:'var(--brand)'}}>→</span>
            </div>
          </div>
          <div className="service">
            <div>
              <div className="tag">03 / Complementar</div>
              <h3>Terceirização</h3>
              <p>Equipes capacitadas alocadas em sua operação. Gestão de ponto, segurança e treinamento por nossa conta.</p>
            </div>
            <div className="service-bottom">
              <span className="mono" style={{fontSize: 12, color: 'var(--muted)'}}>Equipes dedicadas</span>
              <span className="arrow" style={{color:'var(--brand)'}}>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- Catalog section ----
function Catalog({ onQuote, onAddToQuote }) {
  const [active, setActive] = useState('Todos');
  const counts = useMemo(() => {
    const c = { Todos: EQUIPMENTS.length };
    EQUIPMENTS.forEach(e => { c[e.cat] = (c[e.cat]||0)+1; });
    return c;
  }, []);
  const list = active === 'Todos' ? EQUIPMENTS : EQUIPMENTS.filter(e => e.cat === active);
  return (
    <section className="section catalog" id="catalogo-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Catálogo</div>
            <h2 style={{marginTop: 14}}>Equipamentos disponíveis para pronta entrega.</h2>
          </div>
          <p>Todos os equipamentos passam por checklist antes da entrega e contam com suporte técnico em campo. Filtre por categoria:</p>
        </div>
        <div className="catalog-filters">
          {CATEGORIES.map(c => (
            <button key={c} className={`filter ${active === c ? 'active' : ''}`} onClick={() => setActive(c)}>
              {c}<span className="count">{counts[c] || 0}</span>
            </button>
          ))}
        </div>
        <div className="catalog-grid">
          {list.map(e => (
            <EquipCard key={e.id} e={e} onQuote={() => onAddToQuote(e)}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipCard({ e, onQuote }) {
  return (
    <div className="equip-card">
      <div className="equip-img">
        <img src={e.img} alt={e.name}/>
        <div className="cat">{e.cat}</div>
        <div className="stock">{e.stock}</div>
      </div>
      <div className="equip-body">
        <h3>{e.name}</h3>
        <div className="desc">{e.desc}</div>
        <div className="specs">
          {e.specs.map((s,i) => (
            <div className="spec" key={i}>
              <div className="k">{s.k}</div>
              <div className="v">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="equip-actions">
        <button className="btn btn-ghost btn-sm">Ficha técnica</button>
        <button className="btn btn-primary btn-sm" onClick={onQuote}>Adicionar ao orçamento</button>
      </div>
    </div>
  );
}

// ---- Process ----
function Process() {
  const steps = [
    { n: '01', t: 'Solicitação', d: 'Você envia o briefing com equipamento, prazo e local. Respondemos em até 2 horas úteis.' },
    { n: '02', t: 'Proposta técnica', d: 'Engenharia dimensiona a solução e envia orçamento com especificações e cronograma.' },
    { n: '03', t: 'Mobilização', d: 'Logística própria entrega, instala e testa em campo. Checklist assinado pelo cliente.' },
    { n: '04', t: 'Suporte 24/7', d: 'Manutenção preventiva, reposição emergencial e acompanhamento durante todo o contrato.' },
  ];
  return (
    <section className="process">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Como trabalhamos</div>
            <h2 style={{marginTop: 14}}>Processo enxuto, da solicitação ao fim do contrato.</h2>
          </div>
          <p>Transparência e comprometimento em cada etapa. Sem surpresas, sem paradas.</p>
        </div>
        <div className="process-steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Clients ----
const CLIENT_LOGOS = [
  { name: 'Votorantim Metais', src: 'assets/clientes/votorantim.png' },
  { name: 'Kinross', src: 'assets/clientes/kinross.png' },
  { name: 'Yamana Gold', src: 'assets/clientes/yamana.png' },
  { name: 'Air Liquide', src: 'assets/clientes/airliquide.png' },
  { name: 'Fidens', src: 'assets/clientes/fidens.png' },
  { name: 'Cimcop', src: 'assets/clientes/cimcop.jpg' },
  { name: 'Koch do Brasil', src: 'assets/clientes/koch.jpg' },
  { name: 'Teixeira Morandini', src: 'assets/clientes/teixeira.png' },
  { name: 'Scavasul', src: 'assets/clientes/scavasul.jpg' },
  { name: 'Trans Amigos', src: 'assets/clientes/transamigos.png' },
];
function Clients() {
  return (
    <section className="clients">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Clientes</div>
            <h2 style={{marginTop: 14}}>Atendemos operações que não podem parar.</h2>
          </div>
          <p>Mineração, energia, siderurgia e grandes obras de infraestrutura confiam na nossa frota e nas nossas equipes.</p>
        </div>
        <div className="logo-grid">
          {CLIENT_LOGOS.map((c, i) => (
            <div className="logo-cell" key={i} title={c.name}>
              <img src={c.src} alt={c.name}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---- Final CTA ----
function FinalCTA({ onQuote }) {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="eyebrow" style={{color: 'var(--accent)'}}>Pronto para começar?</div>
        <h2 style={{marginTop: 14}}>Receba um orçamento em até 2 horas úteis.</h2>
        <p>Equipe comercial disponível de segunda a sábado. Atendimento emergencial 24/7 para contratos ativos.</p>
        <div className="btns">
          <button className="btn btn-lg" style={{background:'#fff', color: 'var(--brand)'}} onClick={onQuote}>
            Solicitar orçamento <Icon.arrow width="16" height="16"/>
          </button>
          <a className="btn btn-ghost btn-lg" href="https://wa.me/553836723091" target="_blank">
            <Icon.whats width="16" height="16"/> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ---- Footer ----
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <img src="assets/logo_gpd.png" alt="GPD" style={{height: 48, width: 'auto', filter: 'brightness(0) invert(1)', opacity: .95}}/>
            <p style={{marginTop: 20, color:'rgba(255,255,255,.6)', fontSize: 13, maxWidth: 320}}>
              Locação de equipamentos, consultoria e terceirização para operações industriais de médio e grande porte.
            </p>
          </div>
          <div>
            <h4>Navegação</h4>
            <a>A Empresa</a>
            <a>Locação</a>
            <a>Consultoria</a>
            <a>Terceirização</a>
            <a>Clientes</a>
          </div>
          <div>
            <h4>Contato</h4>
            <a>comercial@gpdlocacoes.com.br</a>
            <a>(38) 3672-3091</a>
            <a>WhatsApp 24/7</a>
          </div>
          <div>
            <h4>Endereço</h4>
            <a style={{lineHeight: 1.6}}>Rua Caetano Silva Neiva, 388<br/>Paracatu / MG<br/>CEP 38600-000</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 GPD Locações · Todos os direitos reservados</span>
          <span>CNPJ 00.000.000/0001-00</span>
        </div>
      </div>
    </footer>
  );
}

// ---- WhatsApp FAB ----
function WhatsFab() {
  return (
    <a className="fab" href="https://wa.me/553836723091" target="_blank">
      <Icon.whats/>
      <span>Falar com um consultor</span>
    </a>
  );
}

Object.assign(window, {
  Nav, Hero, Services, Catalog, Process, Clients, FinalCTA, Footer, WhatsFab, Icon
});
