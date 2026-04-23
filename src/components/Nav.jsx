import { PhoneIcon, ArrowIcon } from '../icons';
import { asset } from '../asset';

const links = [
  { id: 'home', label: 'Início' },
  { id: 'empresa', label: 'A Empresa' },
  { id: 'catalogo', label: 'Locação' },
  { id: 'clientes', label: 'Clientes' },
  { id: 'contato', label: 'Fale Conosco' },
];

export default function Nav({ current, setPage, onQuote }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="brand" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>
          <img src={asset('/logo_gpd.png')} alt="GPD" style={{ height: 64, width: 'auto' }} />
        </a>
        <nav className="nav-links">
          {links.map(l => (
            <a
              key={l.id}
              className={current === l.id ? 'active' : ''}
              onClick={() => setPage(l.id)}
              style={{ cursor: 'pointer' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn btn-ghost btn-sm" href="tel:+553836723091">
            <PhoneIcon width="14" height="14" /> (38) 3672-3091
          </a>
          <button className="btn btn-primary btn-sm" onClick={onQuote}>
            Solicitar Orçamento <ArrowIcon width="14" height="14" />
          </button>
        </div>
      </div>
    </header>
  );
}
