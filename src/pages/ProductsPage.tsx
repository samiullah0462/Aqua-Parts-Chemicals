import React, { useState, useMemo } from 'react';
import { PageTab, Product } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../data/mockData';
import { generateProductPdf } from '../utils/generatePdf';
import {
  Search,
  Filter,
  CheckCircle2,
  FileText,
  Phone,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles,
  Info,
  X,
  ExternalLink,
  SlidersHorizontal,
  FileDown
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

interface ProductsPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenQuote: (productTitle?: string) => void;
  onOpenCalculator: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCalculator,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSpecProduct, setActiveSpecProduct] = useState<Product | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = ['All'];
    PRODUCTS.forEach((p) => {
      if (!cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCat = selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.catId.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownloadDatasheet = (product: Product) => {
    // Generate official PDF via jsPDF
    generateProductPdf(product);

    setDownloadSuccess(product.title);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  const handleWhatsAppProduct = (product: Product) => {
    const text = encodeURIComponent(
      `Hello AquaParts Chemicals! I would like to inquire about price, stock, and technical specs for: *${product.title}* (${product.catId}). Delivery location: Karachi.`
    );
    window.open(`https://wa.me/923333307845?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Download Alert Toast */}
      {downloadSuccess && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#092442] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-emerald-500 flex items-center space-x-3 transition-all animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">PDF TDS Generated</p>
            <p className="text-sm font-medium text-slate-100">Official PDF for {downloadSuccess} saved to downloads.</p>
          </div>
        </div>
      )}

      {/* Hero Header - Clean Corporate Deep Navy without heavy glassmorphism */}
      <section className="bg-[#092442] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>Industrial Water Treatment Inventory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            OUR PRODUCT <span className="text-[#009fe3]">RANGE</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            High quality RO chemicals, cartridge & bag filters, dosing equipment, membranes, and industrial water treatment solutions for industrial, commercial, and municipal systems.
          </p>

          {/* Quick Metrics Bar - Crisp solid panels */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 pt-8 border-t border-slate-800 text-left">
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-cyan-400">100% Neats</div>
              <div className="text-xs text-slate-300 font-medium">Unadulterated Formulations</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-emerald-400">Same-Day</div>
              <div className="text-xs text-slate-300 font-medium">Karachi Metro Dispatch</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-amber-400">Batch COA</div>
              <div className="text-xs text-slate-300 font-medium">Lab Certified Quality</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-cyan-400">Wholesale</div>
              <div className="text-xs text-slate-300 font-medium">Factory Direct Rates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dosing Calculator Alert Banner */}
      <section className="bg-[#009fe3] text-white py-3.5 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-lg bg-[#092442] flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white">Not sure which chemical or dosing rate you need?</h3>
              <p className="text-xs text-cyan-100">
                Use our built-in LSI & Antiscalant Dosage Engine to compute exact ppm dosing based on your plant's water analysis.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenCalculator}
            className="shrink-0 bg-white text-[#092442] hover:bg-slate-100 font-bold px-4 py-2 rounded-lg text-xs sm:text-sm transition-all shadow-xs flex items-center space-x-2"
          >
            <span>Launch Dosage Calculator</span>
            <ArrowRight className="w-4 h-4 text-[#092442]" />
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Controls: Search and Filter Tabs */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xs border border-slate-200 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search products, catalog ID, or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Total Results */}
            <div className="text-xs sm:text-sm text-slate-500 font-medium flex items-center space-x-2 w-full md:w-auto justify-between md:justify-end">
              <span className="inline-flex items-center space-x-1.5 bg-slate-100 px-3 py-1 rounded-full text-slate-700">
                <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-600" />
                <span>Showing <strong>{filteredProducts.length}</strong> items</span>
              </span>
              <button
                onClick={() => onOpenQuote()}
                className="text-cyan-600 hover:text-cyan-800 font-bold text-xs uppercase tracking-wider underline md:hidden"
              >
                Custom Inquiries
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-[#092442] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-slate-300 max-w-lg mx-auto my-12">
            <Filter className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No products match your criteria</h3>
            <p className="text-sm text-slate-500 mb-6">
              Try adjusting your search query or select "All" from the categories above.
            </p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-200"
              >
                Reset Filters
              </button>
              <button
                onClick={() => onOpenQuote()}
                className="px-4 py-2 bg-[#092442] text-white rounded-lg text-xs font-semibold hover:bg-[#0d3b66]"
              >
                Inquire Special Order
              </button>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-xs hover:shadow-lg transition-all duration-200 border border-slate-200 overflow-hidden flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-[#092442] text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="bg-amber-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="absolute top-3 right-3 bg-white text-slate-700 text-xs font-mono font-bold px-2.5 py-1 rounded-lg border border-slate-200 shadow-xs">
                  {product.catId}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug mb-2">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Specs Box */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 space-y-1.5 text-xs">
                  {product.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex justify-between items-center text-slate-700">
                      <span className="text-slate-400 font-medium">{spec.label}:</span>
                      <span className="font-semibold text-slate-800 text-right truncate ml-2 max-w-[170px]">{spec.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center text-slate-700 pt-1 border-t border-slate-200">
                    <span className="text-slate-400 font-medium">Packaging:</span>
                    <span className="font-bold text-cyan-700 text-right">{product.packaging}</span>
                  </div>
                </div>

                {/* Features list */}
                {product.features && product.features.length > 0 && (
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                    {product.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Card Actions */}
                <div className="mt-auto pt-4 border-t border-slate-100 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setActiveSpecProduct(product)}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5"
                    >
                      <Info className="w-3.5 h-3.5 text-slate-600" />
                      <span>Tech Specs</span>
                    </button>
                    <button
                      onClick={() => handleDownloadDatasheet(product)}
                      className="w-full bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-semibold py-2.5 px-3 rounded-xl text-xs transition-colors flex items-center justify-center space-x-1.5"
                      title="Download PDF Data Sheet"
                    >
                      <FileDown className="w-3.5 h-3.5 text-cyan-600" />
                      <span>PDF TDS / MSDS</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => onOpenQuote(product.title)}
                      className="w-full bg-[#092442] hover:bg-[#0d3b66] text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center space-x-1"
                    >
                      <span>Request Quote</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppProduct(product)}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-3 rounded-xl text-xs transition-all shadow-xs flex items-center justify-center space-x-1.5"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order / Bulk Packaging Callout - Clean Solid Navy */}
        <section className="mt-16 bg-[#092442] rounded-3xl p-8 sm:p-12 text-white shadow-md border border-slate-700">
          <div className="max-w-3xl">
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs bg-slate-800 border border-slate-700 px-3 py-1 rounded-full inline-block mb-3">
              Bulk Industrial Packaging & Custom Formulations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Need custom antiscalant blends or scheduled container deliveries?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
              We supply textile processing mills, pharmaceutical facilities, beverage plants, and power stations across SITE, Korangi, Landhi, and Port Qasim with scheduled weekly chemical supply runs, bulk 1000L IBC tanks, and dedicated lab analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onOpenQuote('Bulk Contract Inquiry')}
                className="bg-[#009fe3] hover:bg-[#0088c4] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-sm flex items-center space-x-2"
              >
                <span>Inquire for Contract Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-6 py-3 rounded-xl text-sm transition-all"
              >
                Visit Karachi Warehouse
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Technical Specifications Modal - Clean Solid Surface */}
      {activeSpecProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-slate-300 my-8">
            {/* Modal Header */}
            <div className="bg-[#092442] text-white p-6 relative">
              <button
                onClick={() => setActiveSpecProduct(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Technical Data & Specification Sheet</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white pr-8">
                {activeSpecProduct.title}
              </h3>
              <p className="text-xs text-slate-300 font-mono mt-1">Catalog ID: {activeSpecProduct.catId}</p>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
              {/* Product Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Application & Description</h4>
                <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                  {activeSpecProduct.longDesc}
                </p>
              </div>

              {/* Specs Grid */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Chemical / Physical Specifications</h4>
                <div className="border border-slate-200 rounded-xl overflow-hidden divide-y divide-slate-100">
                  {activeSpecProduct.specs.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 text-xs sm:text-sm hover:bg-slate-50">
                      <span className="text-slate-500 font-medium">{item.label}</span>
                      <span className="text-slate-900 font-semibold text-right">{item.value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-3 text-xs sm:text-sm bg-cyan-50/50">
                    <span className="text-slate-600 font-medium">Standard Packaging</span>
                    <span className="text-cyan-800 font-bold text-right">{activeSpecProduct.packaging}</span>
                  </div>
                  {activeSpecProduct.testStandard && (
                    <div className="flex justify-between items-center p-3 text-xs sm:text-sm bg-slate-50">
                      <span className="text-slate-600 font-medium">Quality Compliance Standard</span>
                      <span className="text-emerald-700 font-bold text-right">{activeSpecProduct.testStandard}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Features */}
              {activeSpecProduct.features && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Key Advantages</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeSpecProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quality & Safety Notes */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 space-y-1">
                <p className="font-bold flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-600" />
                  <span>Certified AquaParts Batch Quality</span>
                </p>
                <p className="text-amber-800">
                  Every batch supplied from our Hub River Road facility comes with a verified Certificate of Analysis (COA). Store in shaded, ventilated area at temperatures between 5°C and 38°C.
                </p>
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-3">
              <button
                onClick={() => handleDownloadDatasheet(activeSpecProduct)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-colors flex items-center justify-center space-x-1.5"
              >
                <FileDown className="w-4 h-4 text-cyan-600" />
                <span>Export PDF Data Sheet</span>
              </button>

              <div className="flex w-full sm:w-auto space-x-2">
                <button
                  onClick={() => {
                    const title = activeSpecProduct.title;
                    setActiveSpecProduct(null);
                    onOpenQuote(title);
                  }}
                  className="flex-1 sm:flex-none px-5 py-2.5 bg-[#092442] hover:bg-[#0d3b66] text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center space-x-1"
                >
                  <span>Request Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
                <button
                  onClick={() => handleWhatsAppProduct(activeSpecProduct)}
                  className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center justify-center space-x-1"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span className="hidden sm:inline ml-1">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
