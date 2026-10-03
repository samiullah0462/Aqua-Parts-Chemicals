import React from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO } from '../data/mockData';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon, LinkedInIcon } from './SocialIcons';

interface FooterProps {
  onNavigate: (tab: PageTab) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const handleNav = (tab: PageTab) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white text-slate-700 pt-16 pb-8 border-t border-slate-200 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Columns Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Col 1: About & Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left focus:outline-none group"
            >
              <img
                src={COMPANY_INFO.logoUrl}
                alt="AquaParts Chemicals Logo"
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight leading-none text-[#092442]">
                  AQUAPARTS
                </span>
                <span className="text-[#22a048] font-bold text-xs tracking-wider uppercase leading-none mt-0.5">
                  CHEMICALS
                </span>
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-tight mt-1">
                  RO Chemicals, Filters & Dosing Equipment
                </span>
              </div>
            </button>

            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              Providing high quality water treatment products, antiscalants, cartridge filters, and reliable solutions for industrial, commercial & municipal use across Karachi.
            </p>

            <div className="flex items-center gap-3 text-slate-500 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaParts on Facebook"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-[#092442] hover:text-white flex items-center justify-center transition text-slate-600"
                title="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaParts on Instagram"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-[#092442] hover:text-white flex items-center justify-center transition text-slate-600"
                title="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923333307845"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition"
                title="WhatsApp Direct"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AquaParts on LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-[#092442] hover:text-white flex items-center justify-center transition text-slate-600"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-[#092442]">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#0d5ca8] transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#0d5ca8] transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#0d5ca8] transition"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('blog')}
                  className="hover:text-[#0d5ca8] transition"
                >
                  Blog
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#0d5ca8] transition"
                >
                  Project Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#0d5ca8] transition"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Products (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-[#092442]">
              OUR PRODUCTS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition text-left"
                >
                  RO Chemicals (Antiscalants)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition text-left"
                >
                  Cartridge Filters (PP Melt Blown)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition text-left"
                >
                  Liquid Bag Filters & Housings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition text-left"
                >
                  Electronic Dosing Pumps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition text-left"
                >
                  RO Membranes (4040 & 8040)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition text-left"
                >
                  Multimedia FRP Pressure Vessels
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#0d5ca8] transition text-left"
                >
                  Domestic & Commercial RO Plants
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-[#092442]">
              CONTACT INFO
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#009fe3] shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {COMPANY_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#009fe3] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-[#0d5ca8] font-bold text-slate-800"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#009fe3] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#0d5ca8]"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#092442] hover:bg-[#0d3b66] text-white rounded-lg text-xs font-bold transition shadow-xs"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Footer Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>Karachi Industrial Supply Hub</span>
            <span>•</span>
            <span>ISO 9001:2015 Compliant</span>
            <span>•</span>
            <span>Halal Certified Chemicals</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
