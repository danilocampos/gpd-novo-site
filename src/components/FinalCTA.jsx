import { ArrowIcon, WhatsIcon } from '../icons';

export default function FinalCTA({ onQuote }) {
  return (
    <section className="final-cta">
      <div className="container">
        <div className="eyebrow" style={{ color: 'var(--accent)' }}>Pronto para começar?</div>
        <h2 style={{ marginTop: 14 }}>Receba um orçamento em até 2 horas úteis.</h2>
        <p>Equipe comercial disponível de segunda a sábado. Atendimento emergencial 24/7 para contratos ativos.</p>
        <div className="btns">
          <button className="btn btn-lg" style={{ background: '#fff', color: 'var(--brand)' }} onClick={onQuote}>
            Solicitar orçamento <ArrowIcon width="16" height="16" />
          </button>
          <a className="btn btn-ghost btn-lg" href="https://wa.me/553836723091" target="_blank" rel="noreferrer">
            <WhatsIcon width="16" height="16" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
