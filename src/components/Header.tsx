import React, { useState } from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Activity,
  ArrowRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon, LinkedInIcon } from './SocialIcons';

interface HeaderProps {
  currentTab: PageTab;
  onNavigate: (tab: PageTab) => void;
  onOpenQuote: () => void;
  onOpenEmergency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenQuote,
  onOpenEmergency,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const navItems: { tab: PageTab; label: string; hasDropdown?: boolean }[] = [
    { tab: 'home', label: 'HOME' },
    { tab: 'about', label: 'ABOUT US' },
    { tab: 'products', label: 'PRODUCTS', hasDropdown: true },
    { tab: 'services', label: 'SERVICES' },
    { tab: 'blog', label: 'BLOG' },
    { tab: 'gallery', label: 'GALLERY' },
    { tab: 'contact', label: 'CONTACT US' },
  ];

  const handleNav = (tab: PageTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Utility Ribbon */}
      <aside
        className="bg-[#092442] text-white text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-700"
        aria-label="Top contact and operational ribbon"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 text-slate-300 font-medium">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#009fe3]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#009fe3]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#009fe3]" />
              <span>{COMPANY_INFO.shortAddress}</span>
            </div>
          </div>

          {/* Socials & ISO Indicator */}
          <div className="flex items-center gap-4 text-slate-300">
            <span className="hidden xl:inline-flex items-center gap-1.5 text-emerald-400 font-medium text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              ISO 9001:2015 & Halal Certified Formulations
            </span>
            <div className="flex items-center gap-3 border-l border-slate-700 pl-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaParts on Facebook"
                className="text-slate-300 hover:text-[#009fe3] transition-colors p-1"
                title="Facebook"
              >
                <FacebookIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaParts on Instagram"
                className="text-slate-300 hover:text-[#009fe3] transition-colors p-1"
                title="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/923333307845"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="text-emerald-400 hover:text-emerald-300 transition-colors p-1"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaParts on LinkedIn"
                className="text-slate-300 hover:text-[#009fe3] transition-colors p-1"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Sticky Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 gap-2 lg:gap-4">
          {/* Brand Logo & Title - with shrink-0 so it NEVER shrinks or wraps */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none shrink-0"
            aria-label="AquaParts Chemicals Home"
          >
            <img
              src={COMPANY_INFO.logoUrl}
              alt="AquaParts Chemicals Logo"
              className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105 duration-200 shrink-0"
            />
            <div className="flex flex-col justify-center">
              <div className="font-black text-lg sm:text-xl tracking-tight leading-none text-[#092442]">
                AQUAPARTS
              </div>
              <span className="text-[#22a048] font-extrabold text-[11px] sm:text-xs tracking-[0.18em] uppercase mt-1 leading-none">
                CHEMICALS
              </span>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-tight mt-0.5 hidden 2xl:block">
                RO Chemicals, Filters & Dosing
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links - balanced gap & clean sizing to prevent ANY collisions */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-6 font-bold text-xs xl:text-sm tracking-wide text-slate-700 whitespace-nowrap">
            {navItems.map((item) => {
              const isActive = currentTab === item.tab;
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.tab}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNav(item.tab)}
                      className={`py-2 px-1 flex items-center gap-1 transition-colors ${
                        isActive
                          ? 'text-[#0d5ca8] font-black border-b-2 border-[#0d5ca8]'
                          : 'hover:text-[#0d5ca8]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {/* Dropdown Menu */}
                    {productsDropdownOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl rounded-xl p-2 z-50">
                        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100">
                          Product Categories
                        </div>
                        <button
                          onClick={() => handleNav('products')}
                          className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 hover:text-[#0d5ca8] rounded-lg transition"
                        >
                          All Products & Chemicals
                        </button>
                        <button
                          onClick={() => handleNav('products')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 hover:text-[#0d5ca8] rounded-lg transition"
                        >
                          RO Chemicals (Antiscalants)
                        </button>
                        <button
                          onClick={() => handleNav('products')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 hover:text-[#0d5ca8] rounded-lg transition"
                        >
                          Cartridge & Bag Filters
                        </button>
                        <button
                          onClick={() => handleNav('products')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 hover:text-[#0d5ca8] rounded-lg transition"
                        >
                          Electronic Dosing Pumps
                        </button>
                        <button
                          onClick={() => handleNav('products')}
                          className="w-full text-left px-3 py-2 text-xs text-slate-600 hover:bg-slate-100 hover:text-[#0d5ca8] rounded-lg transition"
                        >
                          RO Membranes 4040 & 8040
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.tab}
                  onClick={() => handleNav(item.tab)}
                  className={`py-2 px-1 transition-colors ${
                    isActive
                      ? 'text-[#0d5ca8] font-black border-b-2 border-[#0d5ca8]'
                      : 'hover:text-[#0d5ca8]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Cluster - cleanly sized & shrink-0 */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Emergency Button - on xl full, on lg compact icon */}
            <button
              onClick={onOpenEmergency}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#092442] border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-red-300 transition-colors"
              title="24/7 Emergency Support"
            >
              <Activity className="w-3.5 h-3.5 text-rose-600" />
              <span>24/7 Emergency</span>
            </button>

            {/* Inquire Now / Get a Quote Button */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 bg-[#092442] text-white rounded-lg text-xs sm:text-sm font-bold hover:bg-[#0d5ca8] transition duration-150 shadow-xs"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-slate-700 hover:text-slate-900 p-2 text-xl focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl space-y-1">
            {navItems.map((item) => (
              <button
                key={item.tab}
                onClick={() => handleNav(item.tab)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-bold flex items-center justify-between transition-colors ${
                  currentTab === item.tab
                    ? 'bg-blue-50 text-[#0d5ca8]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {currentTab === item.tab && <div className="w-1.5 h-1.5 rounded-full bg-[#0d5ca8]"></div>}
              </button>
            ))}

            <div className="pt-4 border-t border-slate-200 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEmergency();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-red-50 text-red-700 rounded-lg text-xs font-bold border border-red-200"
              >
                <Activity className="w-4 h-4 text-red-600" />
                <span>24/7 Emergency Support</span>
              </button>

              <div className="pt-2 flex justify-center gap-4 text-slate-600">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-600">
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-pink-600">
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a href="https://wa.me/923333307845" target="_blank" rel="noopener noreferrer" className="p-2 text-emerald-600">
                  <WhatsAppIcon className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-700">
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
