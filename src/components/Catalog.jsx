import { useState, useMemo } from 'react';
import { EQUIPMENTS, CATEGORIES } from '../data';

function EquipCard({ e, onQuote }) {
  return (
    <div className="equip-card">
      <div className="equip-img">
        <img src={e.img} alt={e.name} />
        <div className="cat">{e.cat}</div>
        <div className="stock">{e.stock}</div>
      </div>
      <div className="equip-body">
        <h3>{e.name}</h3>
        <div className="desc">{e.desc}</div>
        <div className="specs">
          {e.specs.map((s, i) => (
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

export default function Catalog({ onAddToQuote }) {
  const [active, setActive] = useState('Todos');

  const counts = useMemo(() => {
    const c = { Todos: EQUIPMENTS.length };
    EQUIPMENTS.forEach(e => { c[e.cat] = (c[e.cat] || 0) + 1; });
    return c;
  }, []);

  const list = active === 'Todos' ? EQUIPMENTS : EQUIPMENTS.filter(e => e.cat === active);

  return (
    <section className="section catalog" id="catalogo-section">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Catálogo</div>
            <h2 style={{ marginTop: 14 }}>Equipamentos disponíveis para pronta entrega.</h2>
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
            <EquipCard key={e.id} e={e} onQuote={() => onAddToQuote(e)} />
          ))}
        </div>
      </div>
    </section>
  );
}
