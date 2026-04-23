export const EQUIPMENTS = [
  {
    id: 'munck',
    name: 'Caminhão Munck',
    cat: 'Transporte',
    img: 'https://gpdlocacoes.com.br/assets/img/munck-510x382-aHR0cHM6.jpg',
    desc: 'Içamento e transporte de cargas pesadas em canteiros industriais.',
    specs: [
      { k: 'Capacidade', v: '12 ton' },
      { k: 'Alcance', v: '18 m' },
      { k: 'Lança', v: '6 seções' },
      { k: 'Disponível', v: '4 unid.' },
    ],
    stock: 'Disponível',
  },
  {
    id: 'empilhadeira',
    name: 'Empilhadeiras',
    cat: 'Movimentação',
    img: 'https://gpdlocacoes.com.br/assets/img/empilhadeira_1-510x382-aHR0cHM6.png',
    desc: 'Empilhadeiras a combustão e elétricas para operações contínuas.',
    specs: [
      { k: 'Capacidade', v: '2.5 – 7 ton' },
      { k: 'Elevação', v: 'até 7 m' },
      { k: 'Tipo', v: 'GLP/Elétrica' },
      { k: 'Disponível', v: '12 unid.' },
    ],
    stock: 'Disponível',
  },
  {
    id: 'gerador',
    name: 'Geradores de Energia',
    cat: 'Energia',
    img: 'https://gpdlocacoes.com.br/assets/img/gerador-gpd-aHR0cHM6.png',
    desc: 'Grupos geradores insonorizados para standby e operação contínua.',
    specs: [
      { k: 'Potência', v: '60 – 500 kVA' },
      { k: 'Ruído', v: '< 75 dB' },
      { k: 'Autonomia', v: '24 h' },
      { k: 'Disponível', v: '8 unid.' },
    ],
    stock: 'Disponível',
  },
  {
    id: 'torre',
    name: 'Torres de Iluminação',
    cat: 'Iluminação',
    img: 'https://gpdlocacoes.com.br/assets/img/637_1_20150702164448-510x382-aHR0cHM6.jpg',
    desc: 'Torres móveis com lâmpadas LED de alta eficiência para obras 24h.',
    specs: [
      { k: 'Altura', v: '9 m' },
      { k: 'Potência', v: '4× 320W LED' },
      { k: 'Autonomia', v: '60 h' },
      { k: 'Disponível', v: '14 unid.' },
    ],
    stock: 'Disponível',
  },
  {
    id: 'container',
    name: 'Containers',
    cat: 'Infraestrutura',
    img: 'https://gpdlocacoes.com.br/assets/img/container-1-510x382-aHR0cHM6.png',
    desc: 'Containers para escritório, almoxarifado, vestiário e dormitório.',
    specs: [
      { k: 'Tamanhos', v: '10 / 20 / 40 pés' },
      { k: 'Configuração', v: 'Sob medida' },
      { k: 'Isolamento', v: 'Térmico' },
      { k: 'Disponível', v: '22 unid.' },
    ],
    stock: 'Disponível',
  },
  {
    id: 'caminhao',
    name: 'Caminhões de Apoio',
    cat: 'Transporte',
    img: 'https://gpdlocacoes.com.br/assets/img/munck-510x382-aHR0cHM6.jpg',
    desc: 'Caminhões pipa, comboio e basculantes para operação em campo.',
    specs: [
      { k: 'Tipo', v: 'Pipa / Comboio' },
      { k: 'Capacidade', v: '10 – 20 mil L' },
      { k: 'Cobertura', v: 'MG / GO / TO' },
      { k: 'Disponível', v: '6 unid.' },
    ],
    stock: 'Sob consulta',
  },
];

export const CATEGORIES = ['Todos', 'Energia', 'Movimentação', 'Iluminação', 'Transporte', 'Infraestrutura'];

export const SECTORS = [
  'Mineração', 'Energia', 'Siderurgia', 'Construção Civil', 'Óleo & Gás',
  'Agroindústria', 'Eventos', 'Logística', 'Saneamento', 'Papel & Celulose',
];

import { asset } from './asset';

export const CLIENT_LOGOS = [
  { name: 'Votorantim Metais', src: asset('/clientes/votorantim.png') },
  { name: 'Kinross', src: asset('/clientes/kinross.png') },
  { name: 'Yamana Gold', src: asset('/clientes/yamana.png') },
  { name: 'Air Liquide', src: asset('/clientes/airliquide.png') },
  { name: 'Fidens', src: asset('/clientes/fidens.png') },
  { name: 'Cimcop', src: asset('/clientes/cimcop.jpg') },
  { name: 'Koch do Brasil', src: asset('/clientes/koch.jpg') },
  { name: 'Teixeira Morandini', src: asset('/clientes/teixeira.png') },
  { name: 'Scavasul', src: asset('/clientes/scavasul.jpg') },
  { name: 'Trans Amigos', src: asset('/clientes/transamigos.png') },
];
