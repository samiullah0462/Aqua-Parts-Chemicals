import React, { useState, useEffect } from 'react';
import { PageTab, Article } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogPage } from './pages/BlogPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { QuoteModal } from './components/QuoteModal';
import { EmergencyModal } from './components/EmergencyModal';
import { DosageCalculatorModal } from './components/DosageCalculatorModal';
import { ArticleModal } from './components/ArticleModal';
import { MessageCircle, Calculator, AlertTriangle, ArrowUp } from 'lucide-react';
import { WhatsAppIcon } from './components/SocialIcons';
import { COMPANY_INFO } from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageTab>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<string | undefined>(undefined);
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (tab: PageTab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productOrService?: string) => {
    setQuoteProduct(productOrService);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setQuoteProduct(undefined);
  };

  const handleWhatsAppFloating = () => {
    const text = encodeURIComponent(
      `Hello AquaParts Chemicals! I would like to inquire about RO chemicals, cartridge filters, and industrial dosing equipment for Karachi delivery.`
    );
    window.open(`https://wa.me/923333307845?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onOpenCalculator={() => setCalculatorModalOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuote={() => handleOpenQuote('General Industrial Partnership')}
          />
        )}

        {currentTab === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onOpenCalculator={() => setCalculatorModalOpen(true)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
            onOpenEmergency={() => setEmergencyModalOpen(true)}
            onOpenCalculator={() => setCalculatorModalOpen(true)}
          />
        )}

        {currentTab === 'blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenArticle={(art) => setSelectedArticle(art)}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenEmergency={() => setEmergencyModalOpen(true)}
            onOpenCalculator={() => setCalculatorModalOpen(true)}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-white text-slate-700 hover:text-cyan-600 shadow-lg border border-slate-200 flex items-center justify-center transition-all hover:scale-105"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Dosage Calculator Quick Access */}
        <button
          onClick={() => setCalculatorModalOpen(true)}
          className="group flex items-center bg-[#092442] hover:bg-[#0d3b66] text-white p-3 rounded-full shadow-xl border border-cyan-400/30 transition-all hover:pr-4"
          aria-label="Open Dosage Calculator"
        >
          <Calculator className="w-5 h-5 text-cyan-400" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
            LSI & Dosing Calculator
          </span>
        </button>

        {/* Floating WhatsApp Quick Action */}
        <button
          onClick={handleWhatsAppFloating}
          aria-label="Chat on WhatsApp"
          className="relative group flex items-center bg-emerald-600 hover:bg-emerald-700 text-white p-3.5 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95"
        >
          {/* Animated ping ring */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <WhatsAppIcon className="w-6 h-6 text-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-0 group-hover:pl-2">
            WhatsApp Dispatch
          </span>
        </button>
      </div>

      {/* Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProduct={quoteProduct}
      />

      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
      />

      <DosageCalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        onRequestQuoteWithSpecs={(specsText) => {
          setCalculatorModalOpen(false);
          handleOpenQuote(specsText);
        }}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onConsultChemist={() => {
          const articleTitle = selectedArticle?.title;
          setSelectedArticle(null);
          handleOpenQuote(`Consultation regarding: ${articleTitle}`);
        }}
      />
    </div>
  );
}
