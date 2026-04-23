const steps = [
  { n: '01', t: 'Solicitação', d: 'Você envia o briefing com equipamento, prazo e local. Respondemos em até 2 horas úteis.' },
  { n: '02', t: 'Proposta técnica', d: 'Engenharia dimensiona a solução e envia orçamento com especificações e cronograma.' },
  { n: '03', t: 'Mobilização', d: 'Logística própria entrega, instala e testa em campo. Checklist assinado pelo cliente.' },
  { n: '04', t: 'Suporte 24/7', d: 'Manutenção preventiva, reposição emergencial e acompanhamento durante todo o contrato.' },
];

export default function Process() {
  return (
    <section className="process">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Como trabalhamos</div>
            <h2 style={{ marginTop: 14 }}>Processo enxuto, da solicitação ao fim do contrato.</h2>
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
