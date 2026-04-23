import { asset } from '../asset';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div>
            <img
              src={asset('/logo_gpd.png')}
              alt="GPD"
              style={{ height: 48, width: 'auto', filter: 'brightness(0) invert(1)', opacity: .95 }}
            />
            <p style={{ marginTop: 20, color: 'rgba(255,255,255,.6)', fontSize: 13, maxWidth: 320 }}>
              Locação de equipamentos, consultoria e terceirização para operações industriais de médio e grande porte.
            </p>
          </div>
          <div>
            <h4>Navegação</h4>
            <a href="#">A Empresa</a>
            <a href="#">Locação</a>
            <a href="#">Consultoria</a>
            <a href="#">Terceirização</a>
            <a href="#">Clientes</a>
          </div>
          <div>
            <h4>Contato</h4>
            <a href="mailto:comercial@gpdlocacoes.com.br">comercial@gpdlocacoes.com.br</a>
            <a href="tel:+553836723091">(38) 3672-3091</a>
            <a href="https://wa.me/553836723091" target="_blank" rel="noreferrer">WhatsApp 24/7</a>
          </div>
          <div>
            <h4>Endereço</h4>
            <a style={{ lineHeight: 1.6 }}>
              Rua Caetano Silva Neiva, 388<br />
              Paracatu / MG<br />
              CEP 38600-000
            </a>
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
