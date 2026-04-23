import { useState, useEffect } from 'react';
import { asset } from '../asset';

const SLIDES = [
  { src: 'https://gpdlocacoes.com.br/assets/img/editado-aHR0cHM6.png', alt: 'Vista aérea GPD' },
  { src: asset('/empresa-dia.jpg'),   alt: 'Fachada GPD — dia' },
  { src: asset('/empresa-noite.jpg'), alt: 'Fachada GPD — noite' },
];

function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [fading, setFading] = useState(false);
  const [broken, setBroken] = useState({});

  const available = SLIDES.filter((_, i) => !broken[i]);

  const goTo = (idx) => {
    setPrev(current);
    setFading(true);
    setCurrent(idx);
  };

  useEffect(() => {
    if (available.length <= 1) return;
    const timer = setInterval(() => {
      const availableIndexes = SLIDES.map((_, i) => i).filter(i => !broken[i]);
      const pos = availableIndexes.indexOf(current);
      const next = availableIndexes[(pos + 1) % availableIndexes.length];
      goTo(next);
    }, 4500);
    return () => clearInterval(timer);
  }, [current, broken]);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(() => { setPrev(null); setFading(false); }, 900);
    return () => clearTimeout(t);
  }, [fading]);

  const visibleDots = SLIDES.map((_, i) => i).filter(i => !broken[i]);

  return (
    <div style={{ aspectRatio: '4/5', borderRadius: 4, overflow: 'hidden', background: 'var(--bg-3)', position: 'relative' }}>
      {prev !== null && !broken[prev] && (
        <img
          src={SLIDES[prev].src}
          alt={SLIDES[prev].alt}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: fading ? 0 : 1,
            transition: 'opacity 0.9s ease',
            zIndex: 1,
          }}
        />
      )}
      <img
        src={SLIDES[current].src}
        alt={SLIDES[current].alt}
        onError={() => {
          setBroken(b => ({ ...b, [current]: true }));
          const fallback = SLIDES.findIndex((_, i) => i !== current && !broken[i]);
          if (fallback !== -1) setCurrent(fallback);
        }}
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 2,
          display: broken[current] ? 'none' : 'block',
        }}
      />
      {visibleDots.length > 1 && (
        <div style={{
          position: 'absolute', bottom: 14, left: 0, right: 0,
          display: 'flex', justifyContent: 'center', gap: 6, zIndex: 3,
        }}>
          {visibleDots.map(i => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 20 : 6,
                height: 6,
                borderRadius: 999,
                background: i === current ? '#fff' : 'rgba(255,255,255,.5)',
                border: 0,
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function EmpresaPage({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="page-cover" onClick={onClose}>
      <div className="page-modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose}>×</button>
        <div style={{ padding: '64px 80px' }}>
          <div className="eyebrow"><span className="dot"></span>A Empresa</div>
          <h2 style={{ marginTop: 14, maxWidth: 720 }}>Engenharia e logística a serviço de operações que não podem parar.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, marginTop: 48 }}>
            <div>
              <p className="lead" style={{ color: 'var(--ink-2)' }}>
                A GPD é uma empresa de serviços e locação de equipamentos com base em Paracatu/MG,
                atuando em projetos industriais de médio e grande porte desde 2011.
              </p>
              <p style={{ marginTop: 20 }}>
                Contamos com profissionais capacitados e qualificados, com larga experiência nas áreas
                de manutenção e engenharia de projetos, nas disciplinas de elétrica, instrumentação,
                automação, mecânica e civil.
              </p>
              <div style={{ marginTop: 32, padding: 24, background: 'var(--bg-2)', borderLeft: '3px solid var(--brand)' }}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', color: 'var(--brand)', textTransform: 'uppercase' }}>Missão</div>
                <p style={{ color: 'var(--ink-2)', marginTop: 8, fontSize: 15, lineHeight: 1.55 }}>
                  Fornecer soluções em Locação de Equipamentos e Prestação de Serviços, em um processo
                  contínuo de melhoria para atendimento com excelência e qualidade às demandas de nossos clientes.
                </p>
              </div>
            </div>
            <div>
              <ImageSlider />
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 64, borderTop: '1px solid var(--line)', paddingTop: 40 }}>
            {[['14+', 'anos de atuação'], ['80+', 'equipamentos'], ['5', 'disciplinas'], ['24/7', 'atendimento']].map((v, i) => (
              <div key={i}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 700, letterSpacing: '-0.03em' }}>{v[0]}</div>
                <div className="mono" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)' }}>{v[1]}</div>
              </div>
            ))}
          </div>
          <h3 style={{ marginTop: 64, fontSize: 24 }}>Filosofia de trabalho</h3>
          <p style={{ maxWidth: 700, marginTop: 12 }}>
            Nossa filosofia é baseada em transparência e comprometimento, refletindo na qualidade
            dos nossos negócios. Desenvolvemos parcerias com empresas de alta tecnologia para
            entregar soluções que atendam ou superem as expectativas dos clientes.
          </p>
        </div>
      </div>
    </div>
  );
}
