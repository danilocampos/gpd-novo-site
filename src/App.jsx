import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Process from './components/Process';
import Clients from './components/Clients';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsFab from './components/WhatsFab';
import QuoteFlow from './pages/QuoteFlow';
import EmpresaPage from './pages/EmpresaPage';
import ContatoPage from './pages/ContatoPage';

export default function App() {
  const [page, setPage] = useState('home');
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteItems, setQuoteItems] = useState([]);

  const openQuote = (item) => {
    if (item) setQuoteItems([{ ...item, qty: 1 }]);
    else setQuoteItems([]);
    setQuoteOpen(true);
  };

  useEffect(() => {
    if (page === 'empresa' || page === 'contato') return;
    if (page === 'catalogo') {
      const el = document.getElementById('catalogo-section');
      if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [page]);

  return (
    <>
      <Nav current={page} setPage={setPage} onQuote={() => openQuote()} />
      <Hero onQuote={() => openQuote()} />
      <Services onQuote={() => openQuote()} setPage={setPage} />
      <Catalog onAddToQuote={openQuote} />
      <Process />
      <Clients />
      <FinalCTA onQuote={() => openQuote()} />
      <Footer />
      <WhatsFab />

      <QuoteFlow open={quoteOpen} onClose={() => setQuoteOpen(false)} initialItems={quoteItems} />
      <EmpresaPage open={page === 'empresa'} onClose={() => setPage('home')} />
      <ContatoPage open={page === 'contato'} onClose={() => setPage('home')} onQuote={() => openQuote()} />
    </>
  );
}
