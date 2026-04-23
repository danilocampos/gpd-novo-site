const { useState: useS3, useEffect: useE3 } = React;

// Empresa Page (Modal)
function EmpresaPage({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="page-cover" onClick={onClose}>
      <div className="page-modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <div style={{padding: '64px 80px'}}>
          <div className="eyebrow"><span className="dot"></span>A Empresa</div>
          <h2 style={{marginTop: 14, maxWidth: 720}}>Engenharia e logística a serviço de operações que não podem parar.</h2>
          <div style={{display:'grid', gridTemplateColumns:'1.3fr 1fr', gap: 48, marginTop: 48}}>
            <div>
              <p className="lead" style={{color:'var(--ink-2)'}}>
                A GPD é uma empresa de serviços e locação de equipamentos com base em Paracatu/MG,
                atuando em projetos industriais de médio e grande porte desde 2011.
              </p>
              <p style={{marginTop: 20}}>
                Contamos com profissionais capacitados e qualificados, com larga experiência nas áreas
                de manutenção e engenharia de projetos, nas disciplinas de elétrica, instrumentação,
                automação, mecânica e civil.
              </p>
              <div style={{marginTop: 32, padding: 24, background: 'var(--bg-2)', borderLeft: '3px solid var(--brand)'}}>
                <div className="mono" style={{fontSize: 10, letterSpacing:'0.12em', color:'var(--brand)', textTransform:'uppercase'}}>Missão</div>
                <p style={{color:'var(--ink-2)', marginTop: 8, fontSize: 15, lineHeight: 1.55}}>
                  Fornecer soluções em Locação de Equipamentos e Prestação de Serviços, em um processo
                  contínuo de melhoria para atendimento com excelência e qualidade às demandas de nossos clientes.
                </p>
              </div>
            </div>
            <div>
              <div style={{aspectRatio: '4/5', borderRadius: 4, overflow:'hidden', background:'var(--bg-3)'}}>
                <img src="https://gpdlocacoes.com.br/assets/img/editado-aHR0cHM6.png" style={{width:'100%', height:'100%', objectFit:'cover'}}/>
              </div>
            </div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 24, marginTop: 64, borderTop: '1px solid var(--line)', paddingTop: 40}}>
            {[['14+','anos de atuação'],['80+','equipamentos'],['5','disciplinas'],['24/7','atendimento']].map((v,i)=>(
              <div key={i}>
                <div style={{fontFamily:'var(--font-display)', fontSize: 44, fontWeight: 700, letterSpacing:'-0.03em'}}>{v[0]}</div>
                <div className="mono" style={{fontSize: 11, textTransform:'uppercase', letterSpacing:'0.1em', color:'var(--muted)'}}>{v[1]}</div>
              </div>
            ))}
          </div>
          <h3 style={{marginTop: 64, fontSize: 24}}>Filosofia de trabalho</h3>
          <p style={{maxWidth: 700, marginTop: 12}}>
            Nossa filosofia é baseada em transparência e comprometimento, refletindo na qualidade
            dos nossos negócios. Desenvolvemos parcerias com empresas de alta tecnologia para
            entregar soluções que atendam ou superem as expectativas dos clientes.
          </p>
        </div>
      </div>
    </div>
  );
}

// Contato Page (Modal)
function ContatoPage({ open, onClose, onQuote }) {
  if (!open) return null;
  return (
    <div className="page-cover" onClick={onClose}>
      <div className="page-modal" onClick={e => e.stopPropagation()} style={{maxWidth: 960}}>
        <button className="close" onClick={onClose}>×</button>
        <div style={{padding: '64px 80px'}}>
          <div className="eyebrow"><span className="dot"></span>Fale Conosco</div>
          <h2 style={{marginTop: 14}}>Vamos conversar.</h2>
          <p style={{marginTop: 12, maxWidth: 560}}>Escolha o canal que preferir. Para orçamentos, o fluxo guiado é o caminho mais rápido.</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 16, marginTop: 40}}>
            <a className="contact-card" href="https://wa.me/553836723091" target="_blank" style={cardStyle('#25D366')}>
              <Icon.whats width="28" height="28"/>
              <div style={{marginTop: 20}}>
                <div className="mono" style={{fontSize: 10, letterSpacing:'0.12em', textTransform:'uppercase', opacity: .8}}>Resposta imediata</div>
                <div style={{fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 700, marginTop: 4}}>WhatsApp</div>
                <div style={{fontSize: 13, opacity: .9, marginTop: 8}}>(38) 3672-3091</div>
              </div>
            </a>
            <a className="contact-card" href="tel:+553836723091" style={cardStyle('var(--brand)')}>
              <Icon.phone width="28" height="28"/>
              <div style={{marginTop: 20}}>
                <div className="mono" style={{fontSize: 10, letterSpacing:'0.12em', textTransform:'uppercase', opacity: .8}}>Comercial</div>
                <div style={{fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 700, marginTop: 4}}>Telefone</div>
                <div style={{fontSize: 13, opacity: .9, marginTop: 8}}>(38) 3672-3091</div>
              </div>
            </a>
            <a className="contact-card" href="mailto:comercial@gpdlocacoes.com.br" style={cardStyle('var(--brand-ink)')}>
              <Icon.mail width="28" height="28"/>
              <div style={{marginTop: 20}}>
                <div className="mono" style={{fontSize: 10, letterSpacing:'0.12em', textTransform:'uppercase', opacity: .8}}>Até 2h úteis</div>
                <div style={{fontFamily:'var(--font-display)', fontSize: 22, fontWeight: 700, marginTop: 4}}>E-mail</div>
                <div style={{fontSize: 13, opacity: .9, marginTop: 8}}>comercial@gpdlocacoes.com.br</div>
              </div>
            </a>
          </div>
          <div style={{marginTop: 40, padding: 32, background: 'var(--bg-2)', borderRadius: 4, display:'grid', gridTemplateColumns:'1fr 1fr', gap: 32}}>
            <div>
              <div className="mono" style={{fontSize: 11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--muted)'}}>Endereço</div>
              <div style={{marginTop: 10, fontSize: 16, lineHeight: 1.6}}>
                Rua Caetano Silva Neiva, 388<br/>
                Paracatu / MG<br/>
                CEP 38600-000
              </div>
            </div>
            <div>
              <div className="mono" style={{fontSize: 11, letterSpacing:'0.12em', textTransform:'uppercase', color:'var(--muted)'}}>Horário</div>
              <div style={{marginTop: 10, fontSize: 16, lineHeight: 1.6}}>
                Seg – Sex · 7h – 18h<br/>
                Sábado · 8h – 12h<br/>
                <strong>Emergências 24/7</strong>
              </div>
            </div>
          </div>
          <button className="btn btn-primary btn-lg" style={{marginTop: 32, width:'100%', justifyContent:'center'}} onClick={() => { onClose(); setTimeout(onQuote, 200); }}>
            Preferir o fluxo guiado de orçamento <Icon.arrow width="16" height="16"/>
          </button>
        </div>
      </div>
    </div>
  );
}

function cardStyle(bg) {
  return {
    padding: 28,
    borderRadius: 4,
    background: bg,
    color: '#fff',
    aspectRatio: '1/1.1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform .2s ease',
    cursor: 'pointer',
  };
}

// ---- Tweaks panel ----
function TweaksPanel({ tweaks, setTweaks }) {
  const [open, setOpen] = useS3(false);
  const [visible, setVisible] = useS3(false);

  useE3(() => {
    const onMsg = (e) => {
      if (e.data?.type === '__activate_edit_mode') { setVisible(true); setOpen(true); }
      if (e.data?.type === '__deactivate_edit_mode') { setVisible(false); setOpen(false); }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  if (!visible) return null;

  const setKey = (k, v) => {
    setTweaks(prev => {
      const next = { ...prev, [k]: v };
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
      return next;
    });
  };

  const palettes = [
    { id: 'blue', brand: '#0a3d7a', brand2: '#1457b8', brand3: '#2a74db', ink: '#061f3f', accent: '#ffb400' },
    { id: 'navy', brand: '#0e2a47', brand2: '#184878', brand3: '#3270b5', ink: '#081a2e', accent: '#e8b048' },
    { id: 'teal', brand: '#0b4f5c', brand2: '#107085', brand3: '#2b97ad', ink: '#06333c', accent: '#ffb400' },
    { id: 'graphite', brand: '#1c1f24', brand2: '#2e343d', brand3: '#52596a', ink: '#0a0c10', accent: '#ffb400' },
  ];

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="fab" style={{bottom: 90, background:'var(--brand-ink)', color:'#fff'}}>
        ⚙ Tweaks
      </button>
    );
  }

  return (
    <div className="tweaks-panel">
      <div className="tweaks-head">
        <span className="t">Tweaks</span>
        <button onClick={() => setOpen(false)}>×</button>
      </div>
      <div className="tweaks-body">
        <div className="group">
          <label>Paleta</label>
          <div className="swatches">
            {palettes.map(p => (
              <div key={p.id} className={`swatch ${tweaks.palette === p.id ? 'sel' : ''}`}
                   style={{background: p.brand}} onClick={() => setKey('palette', p.id)}/>
            ))}
          </div>
        </div>
        <div className="group">
          <label>Estilo do Hero</label>
          <div className="toggle-group">
            <button className={tweaks.hero === 'split' ? 'on' : ''} onClick={() => setKey('hero', 'split')}>Split</button>
            <button className={tweaks.hero === 'typo' ? 'on' : ''} onClick={() => setKey('hero', 'typo')}>Tipográfico</button>
          </div>
        </div>
        <div className="group">
          <label>Layout do catálogo</label>
          <div className="toggle-group">
            <button className={tweaks.catalog === 'grid' ? 'on' : ''} onClick={() => setKey('catalog', 'grid')}>Grid</button>
            <button className={tweaks.catalog === 'list' ? 'on' : ''} onClick={() => setKey('catalog', 'list')}>Lista</button>
          </div>
        </div>
        <div className="group">
          <label>Densidade</label>
          <div className="toggle-group">
            <button className={tweaks.density === 'compact' ? 'on' : ''} onClick={() => setKey('density', 'compact')}>Compacto</button>
            <button className={tweaks.density === 'roomy' ? 'on' : ''} onClick={() => setKey('density', 'roomy')}>Espaçoso</button>
          </div>
        </div>
        <div className="group">
          <label>Brand mark</label>
          <div className="toggle-group">
            <button className={tweaks.mark === 'wordmark' ? 'on' : ''} onClick={() => setKey('mark', 'wordmark')}>Wordmark</button>
            <button className={tweaks.mark === 'monogram' ? 'on' : ''} onClick={() => setKey('mark', 'monogram')}>Monograma</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Apply tweaks globally
function applyTweaks(tweaks) {
  const root = document.documentElement;
  const palettes = {
    blue:     { brand: '#0a3d7a', brand2: '#1457b8', brand3: '#2a74db', ink: '#061f3f', accent: '#ffb400' },
    navy:     { brand: '#0e2a47', brand2: '#184878', brand3: '#3270b5', ink: '#081a2e', accent: '#e8b048' },
    teal:     { brand: '#0b4f5c', brand2: '#107085', brand3: '#2b97ad', ink: '#06333c', accent: '#ffb400' },
    graphite: { brand: '#1c1f24', brand2: '#2e343d', brand3: '#52596a', ink: '#0a0c10', accent: '#ffb400' },
  };
  const p = palettes[tweaks.palette] || palettes.blue;
  root.style.setProperty('--brand', p.brand);
  root.style.setProperty('--brand-2', p.brand2);
  root.style.setProperty('--brand-3', p.brand3);
  root.style.setProperty('--brand-ink', p.ink);
  root.style.setProperty('--accent', p.accent);
}

Object.assign(window, { EmpresaPage, ContatoPage, TweaksPanel, applyTweaks });
