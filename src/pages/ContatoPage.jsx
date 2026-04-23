import { WhatsIcon, PhoneIcon, MailIcon, ArrowIcon } from '../icons';

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

export default function ContatoPage({ open, onClose, onQuote }) {
  if (!open) return null;
  return (
    <div className="page-cover" onClick={onClose}>
      <div className="page-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 960 }}>
        <button className="close" onClick={onClose}>×</button>
        <div style={{ padding: '64px 80px' }}>
          <div className="eyebrow"><span className="dot"></span>Fale Conosco</div>
          <h2 style={{ marginTop: 14 }}>Vamos conversar.</h2>
          <p style={{ marginTop: 12, maxWidth: 560 }}>Escolha o canal que preferir. Para orçamentos, o fluxo guiado é o caminho mais rápido.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 40 }}>
            <a href="https://wa.me/553836723091" target="_blank" rel="noreferrer" style={cardStyle('#25D366')}>
              <WhatsIcon width="28" height="28" />
              <div style={{ marginTop: 20 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: .8 }}>Resposta imediata</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginTop: 4 }}>WhatsApp</div>
                <div style={{ fontSize: 13, opacity: .9, marginTop: 8 }}>(38) 3672-3091</div>
              </div>
            </a>
            <a href="tel:+553836723091" style={cardStyle('var(--brand)')}>
              <PhoneIcon width="28" height="28" />
              <div style={{ marginTop: 20 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: .8 }}>Comercial</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginTop: 4 }}>Telefone</div>
                <div style={{ fontSize: 13, opacity: .9, marginTop: 8 }}>(38) 3672-3091</div>
              </div>
            </a>
            <a href="mailto:comercial@gpdlocacoes.com.br" style={cardStyle('var(--brand-ink)')}>
              <MailIcon width="28" height="28" />
              <div style={{ marginTop: 20 }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: .8 }}>Até 2h úteis</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, marginTop: 4 }}>E-mail</div>
                <div style={{ fontSize: 13, opacity: .9, marginTop: 8 }}>comercial@gpdlocacoes.com.br</div>
              </div>
            </a>
          </div>
          <div style={{ marginTop: 40, padding: 32, background: 'var(--bg-2)', borderRadius: 4, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Endereço</div>
              <div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6 }}>
                Rua Caetano Silva Neiva, 388<br />
                Paracatu / MG<br />
                CEP 38600-000
              </div>
            </div>
            <div>
              <div className="mono" style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)' }}>Horário</div>
              <div style={{ marginTop: 10, fontSize: 16, lineHeight: 1.6 }}>
                Seg – Sex · 7h – 18h<br />
                Sábado · 8h – 12h<br />
                <strong>Emergências 24/7</strong>
              </div>
            </div>
          </div>
          <button
            className="btn btn-primary btn-lg"
            style={{ marginTop: 32, width: '100%', justifyContent: 'center' }}
            onClick={() => { onClose(); setTimeout(onQuote, 200); }}
          >
            Preferir o fluxo guiado de orçamento <ArrowIcon width="16" height="16" />
          </button>
        </div>
      </div>
    </div>
  );
}
