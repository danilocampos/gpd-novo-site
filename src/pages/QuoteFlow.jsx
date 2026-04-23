import { useState, useEffect } from 'react';
import { EQUIPMENTS, SECTORS } from '../data';
import { ArrowIcon, WhatsIcon } from '../icons';

export default function QuoteFlow({ open, onClose, initialItems = [] }) {
  const [step, setStep] = useState(0);
  const [items, setItems] = useState(initialItems);
  const [periodo, setPeriodo] = useState('mensal');
  const [inicio, setInicio] = useState('');
  const [local, setLocal] = useState('');
  const [setor, setSetor] = useState('Mineração');
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [obs, setObs] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (open) {
      setItems(initialItems);
      setStep(0);
      setDone(false);
    }
  }, [open]);

  if (!open) return null;

  const steps = ['Equipamentos', 'Período & Local', 'Seus dados', 'Revisão'];

  const toggleItem = (e) => {
    setItems(prev => {
      const ex = prev.find(x => x.id === e.id);
      if (ex) return prev.filter(x => x.id !== e.id);
      return [...prev, { ...e, qty: 1 }];
    });
  };

  const setQty = (id, q) => setItems(prev => prev.map(x => x.id === id ? { ...x, qty: Math.max(1, q) } : x));

  const canNext = () => {
    if (step === 0) return items.length > 0;
    if (step === 1) return inicio && local && periodo;
    if (step === 2) return nome && empresa && email && tel;
    return true;
  };

  const protocol = `GPD-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="page-cover" onClick={onClose}>
      <div className="page-modal" onClick={e => e.stopPropagation()} style={{ background: 'var(--bg-2)' }}>
        <button className="close" onClick={onClose}>×</button>
        <div className="quote-shell" style={{ border: 0, borderRadius: 8 }}>
          <aside className="quote-sidebar">
            <div className="sb-title">Orçamento rápido</div>
            <div className="sb-sub">Resposta em 2h úteis</div>
            <ul className="sb-steps">
              {steps.map((s, i) => (
                <li key={i} className={`sb-step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                  <div className="circle">{i < step ? '✓' : i + 1}</div>
                  <div className="lbl">{s}</div>
                </li>
              ))}
            </ul>
            <div style={{ position: 'absolute', bottom: 32, left: 32, right: 32, fontSize: 12, color: 'rgba(255,255,255,.5)', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
              Prefere falar direto?<br />
              <a href="https://wa.me/553836723091" target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 600, marginTop: 6, display: 'inline-block' }}>WhatsApp 24/7 →</a>
            </div>
          </aside>

          <div className="quote-body">
            {done ? (
              <div className="success-box" style={{ margin: 'auto' }}>
                <div className="success-check">✓</div>
                <h3 style={{ fontSize: 28 }}>Solicitação enviada!</h3>
                <p style={{ marginTop: 12, fontSize: 15 }}>
                  Obrigado, <strong>{nome.split(' ')[0] || 'cliente'}</strong>. Nosso comercial retorna em até
                  <strong> 2 horas úteis</strong> no e-mail <strong>{email}</strong> ou no telefone informado.
                </p>
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 28 }}>
                  <a className="btn btn-whats" href="https://wa.me/553836723091" target="_blank" rel="noreferrer">
                    <WhatsIcon width="16" height="16" /> Acelerar pelo WhatsApp
                  </a>
                  <button className="btn btn-ghost" onClick={onClose}>Fechar</button>
                </div>
                <div style={{ marginTop: 32, padding: 16, background: 'var(--bg-2)', borderRadius: 4, textAlign: 'left' }}>
                  <div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--muted)', marginBottom: 8 }}>Protocolo</div>
                  <div className="mono" style={{ fontSize: 14, fontWeight: 600 }}>{protocol}</div>
                </div>
              </div>
            ) : step === 0 ? (
              <>
                <h3>Quais equipamentos você precisa?</h3>
                <div className="sub">Selecione um ou mais. Ajustamos quantidade no próximo passo.</div>
                <div className="equip-picker">
                  {EQUIPMENTS.map(e => {
                    const sel = items.find(x => x.id === e.id);
                    return (
                      <button key={e.id} className={`pick ${sel ? 'selected' : ''}`} onClick={() => toggleItem(e)}>
                        <div className="ttl">{e.name}</div>
                        <div className="meta">{e.cat} · {e.specs[0].v}</div>
                      </button>
                    );
                  })}
                </div>
                {items.length > 0 && (
                  <div className="selected-list">
                    {items.map(it => (
                      <div className="sel-row" key={it.id}>
                        <div>
                          <div className="nm">{it.name}</div>
                          <div className="mt">{it.cat}</div>
                        </div>
                        <div className="qty">
                          <button onClick={() => setQty(it.id, it.qty - 1)}>−</button>
                          <input value={it.qty} onChange={e => setQty(it.id, parseInt(e.target.value) || 1)} />
                          <button onClick={() => setQty(it.id, it.qty + 1)}>+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : step === 1 ? (
              <>
                <h3>Onde e por quanto tempo?</h3>
                <div className="sub">Essas informações nos ajudam a calcular logística e manutenção.</div>
                <div className="form-row">
                  <div className="field">
                    <label>Período de locação</label>
                    <div className="toggle-group" style={{ maxWidth: 400 }}>
                      {['diária', 'semanal', 'mensal', 'contrato'].map(p => (
                        <button key={p} className={periodo === p ? 'on' : ''} onClick={() => setPeriodo(p)}>{p}</button>
                      ))}
                    </div>
                  </div>
                  <div className="form-row cols-2">
                    <div className="field">
                      <label>Início previsto</label>
                      <input type="date" value={inicio} onChange={e => setInicio(e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Setor</label>
                      <select value={setor} onChange={e => setSetor(e.target.value)}>
                        {SECTORS.map(s => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label>Local da operação (cidade / obra)</label>
                    <input placeholder="Ex: Paracatu/MG — Mina de ouro" value={local} onChange={e => setLocal(e.target.value)} />
                  </div>
                  <div className="field">
                    <label>Observações (opcional)</label>
                    <textarea placeholder="Acesso, restrições, horário de operação, certificações exigidas..." value={obs} onChange={e => setObs(e.target.value)} />
                  </div>
                </div>
              </>
            ) : step === 2 ? (
              <>
                <h3>Como entramos em contato?</h3>
                <div className="sub">Usamos seus dados apenas para responder esse orçamento.</div>
                <div className="form-row">
                  <div className="form-row cols-2">
                    <div className="field">
                      <label>Nome completo</label>
                      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Seu nome" />
                    </div>
                    <div className="field">
                      <label>Empresa</label>
                      <input value={empresa} onChange={e => setEmpresa(e.target.value)} placeholder="Razão social" />
                    </div>
                  </div>
                  <div className="form-row cols-2">
                    <div className="field">
                      <label>E-mail corporativo</label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="voce@empresa.com.br" />
                    </div>
                    <div className="field">
                      <label>Telefone / WhatsApp</label>
                      <input value={tel} onChange={e => setTel(e.target.value)} placeholder="(00) 00000-0000" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3>Revise antes de enviar</h3>
                <div className="sub">Tudo certo? Você recebe confirmação por e-mail em seguida.</div>
                <div style={{ display: 'grid', gap: 16 }}>
                  <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 4, padding: 20 }}>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>Equipamentos · {items.length}</div>
                    {items.map(it => (
                      <div key={it.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 14 }}>
                        <span>{it.name}</span>
                        <span className="mono">× {it.qty}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 4, padding: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 14 }}>
                    <div><div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Período</div>{periodo}</div>
                    <div><div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Início</div>{inicio || '—'}</div>
                    <div><div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Setor</div>{setor}</div>
                    <div><div className="mono" style={{ fontSize: 10, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 4 }}>Local</div>{local}</div>
                  </div>
                  <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 4, padding: 20, fontSize: 14 }}>
                    <div><strong>{nome}</strong> · {empresa}</div>
                    <div style={{ color: 'var(--muted)', marginTop: 4 }}>{email} · {tel}</div>
                  </div>
                </div>
              </>
            )}

            {!done && (
              <div className="quote-actions">
                <div className="step-indicator">Passo {step + 1} de {steps.length}</div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {step > 0 && <button className="btn btn-ghost" onClick={() => setStep(step - 1)}>Voltar</button>}
                  {step < steps.length - 1 ? (
                    <button
                      className="btn btn-primary"
                      disabled={!canNext()}
                      style={{ opacity: canNext() ? 1 : 0.4, cursor: canNext() ? 'pointer' : 'not-allowed' }}
                      onClick={() => canNext() && setStep(step + 1)}
                    >
                      Continuar <ArrowIcon width="14" height="14" />
                    </button>
                  ) : (
                    <button className="btn btn-primary" onClick={() => setDone(true)}>
                      Enviar solicitação <ArrowIcon width="14" height="14" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
