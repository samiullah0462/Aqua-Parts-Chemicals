import React from 'react';
import { PageTab } from '../types';
import { PRODUCTS, COMPANY_INFO } from '../data/mockData';
import {
  ArrowRight,
  Phone,
  Shield,
  Cog,
  Truck,
  Headphones,
  Droplet,
  DollarSign,
  Layers,
  ThumbsUp,
  UserCheck,
  Calculator,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenQuote: (productTitle?: string) => void;
  onOpenCalculator: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenCalculator,
}) => {
  return (
    <div className="w-full">
      {/* HERO SECTION - Clean Corporate Styling */}
      <section className="bg-slate-50 py-14 lg:py-20 relative overflow-hidden border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Hero Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0d5ca8] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0d5ca8]"></span>
                Industrial & Commercial Water Solutions
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#092442] tracking-tight leading-[1.1] uppercase">
                CLEAN WATER. <br />
                <span className="text-[#22a048]">BETTER LIFE.</span>
              </h1>

              <div className="w-20 h-1.5 bg-[#009fe3] rounded-full"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
                High quality RO chemicals, filters, dosing equipment and water treatment solutions for industrial, commercial & domestic use across Karachi.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0d5ca8] hover:bg-[#092442] text-white rounded-lg font-bold text-sm shadow-sm hover:shadow transition-all duration-150 uppercase tracking-wide group"
                >
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-[#22a048] border-2 border-[#22a048] hover:bg-emerald-50 rounded-lg font-bold text-sm shadow-xs transition-all duration-150 uppercase tracking-wide"
                >
                  <Phone className="w-4 h-4" />
                  <span>CONTACT US</span>
                </button>
              </div>

              {/* Quick Trust Highlights */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-semibold">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22a048]" />
                  100% Genuine Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22a048]" />
                  Direct Karachi Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#22a048]" />
                  Free Dosing Audits
                </span>
              </div>
            </div>

            {/* Right Hero Image Column (Clean solid framing, no glassmorphism blur) */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200 bg-white">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZKa7KaoHnmkccGU5QpVnjAsshC241MSr9IAhEzyXVPNsJrQvOSAmz6_brnvqEqa9pEXJ9pxlOZwXmZIZtJxgCr3BeVZOfHE0fOJcO7Le9qhRsQ8OGEY1YPh8U--lfUak2UJ_bs3MaF_ppOvJlGa2RhSh9Xpf7HK-02q03DRLthxaBRC52g3y_mUkJzTE8_RxmbTU9jA3zQxniwjLagQ6-oXlcEHrCpa_vFbOQ3Uj8IqTeCsohngiALQ"
                  alt="AquaParts Chemicals Industrial Water Treatment Solutions Clustered Display"
                  className="w-full h-auto object-cover"
                />
                
                {/* Solid Badge on hero image */}
                <div className="absolute top-4 right-4 bg-white px-3.5 py-2 rounded-xl shadow-md border border-slate-200 flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0d5ca8] flex items-center justify-center">
                    <Droplet className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold uppercase text-slate-500">Pure Water</span>
                    <span className="block text-xs font-bold text-[#092442]">Tested & Certified</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#092442] text-white px-4 py-2.5 rounded-xl shadow-md border border-slate-700 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#22a048] flex items-center justify-center text-white">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-300 font-medium">Full Scale Protection</div>
                    <div className="text-xs font-bold text-white">LSI Index Up to +3.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION STRIP (Clean Solid Navy) */}
      <section className="bg-[#092442] text-white py-6 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#009fe3] shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-wide text-white">PREMIUM QUALITY</h4>
              <p className="text-xs text-slate-300 mt-0.5">Only verified tested formulations.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#22a048] shrink-0">
              <Cog className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-wide text-white">RELIABLE PERFORMANCE</h4>
              <p className="text-xs text-slate-300 mt-0.5">Tested for durability and efficiency.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#009fe3] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-wide text-white">FAST DELIVERY</h4>
              <p className="text-xs text-slate-300 mt-0.5">Same-day dispatch across Karachi.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#22a048] shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-extrabold text-sm uppercase tracking-wide text-white">TECHNICAL SUPPORT</h4>
              <p className="text-xs text-slate-300 mt-0.5">Expert guidance for all your needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR PRODUCT RANGE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              <span className="text-[#0d5ca8]">OUR</span> <span className="text-[#22a048]">PRODUCT RANGE</span>
            </h2>
            <div className="w-16 h-1 bg-[#22a048] mx-auto rounded-full mt-3"></div>
            <p className="text-slate-500 text-sm sm:text-base mt-3">
              Complete range of water treatment products under one roof.
            </p>
          </div>

          {/* 8 Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-200 p-5 flex flex-col justify-between group hover:border-blue-300"
              >
                <div>
                  <div className="w-full h-44 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-2 mb-4">
                    <img
                      src={prod.imageUrl}
                      alt={prod.title}
                      className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h3 className="font-extrabold text-[#092442] text-sm uppercase tracking-wide group-hover:text-[#0d5ca8] transition-colors mb-2 line-clamp-1">
                    {prod.category}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-3 mb-4">
                    {prod.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate('products')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0d5ca8] group-hover:text-[#092442] transition"
                  >
                    <span>View Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button
                    onClick={() => onOpenQuote(prod.title)}
                    className="text-[11px] font-bold px-2 py-1 bg-slate-100 hover:bg-[#0d5ca8] hover:text-white rounded text-slate-700 transition"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#092442] text-white hover:bg-[#0d5ca8] rounded-xl font-bold text-sm shadow-sm transition uppercase tracking-wide"
            >
              <span>Explore All Technical Product Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DOSING CALCULATOR BANNER - Solid Deep Navy */}
      <section className="py-12 bg-[#092442] text-white px-4 sm:px-6 lg:px-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-[#009fe3] border border-slate-700 text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Engineering Utility for Plant Operators</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              RO Antiscalant Dosage & LSI Scaling Calculator
            </h3>
            <p className="text-slate-300 text-sm">
              Input your plant's feed flow rate, TDS, calcium, and silica levels to calculate exact ppm dosage, monthly drum needs, and scaling indices.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#22a048] hover:bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md transition uppercase tracking-wide"
            >
              <Calculator className="w-5 h-5" />
              <span>Launch Dosage Calculator</span>
            </button>
          </div>
        </div>
      </section>

      {/* SECTION: WHY CHOOSE AQUAPARTS CHEMICALS? */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              <span className="text-[#0d5ca8]">WHY CHOOSE</span>{' '}
              <span className="text-[#22a048]">AQUAPARTS CHEMICALS?</span>
            </h2>
            <div className="w-16 h-1 bg-[#0d5ca8] mx-auto rounded-full mt-3"></div>
          </div>

          {/* 5 Distinct Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* 1 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-xs border border-slate-200 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 text-[#0d5ca8] mx-auto flex items-center justify-center mb-4">
                <Droplet className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-[#092442] uppercase tracking-wide mb-2">
                High Quality Products
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                We provide only tested and trusted products from certified manufacturers.
              </p>
            </div>

            {/* 2 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-xs border border-slate-200 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 text-[#0d5ca8] mx-auto flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-[#092442] uppercase tracking-wide mb-2">
                Competitive Pricing
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Best quality at the most competitive rates to maximize your operational value.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-xs border border-slate-200 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 text-[#0d5ca8] mx-auto flex items-center justify-center mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-[#092442] uppercase tracking-wide mb-2">
                Wide Product Range
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Everything you need for water treatment from antiscalants to pumps and vessels.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-xs border border-slate-200 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 border border-emerald-100 text-[#22a048] mx-auto flex items-center justify-center mb-4">
                <ThumbsUp className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-[#092442] uppercase tracking-wide mb-2">
                Customer Satisfaction
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Our customers are our top priority with dedicated after-sales engineering.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-white rounded-2xl p-6 text-center shadow-xs border border-slate-200 hover:shadow-md transition">
              <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 text-[#0d5ca8] mx-auto flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="font-extrabold text-sm text-[#092442] uppercase tracking-wide mb-2">
                Expert Technical Support
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                Professional support whenever you need with on-site Karachi technicians.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA STRIP - Solid Navy */}
      <section className="bg-[#092442] text-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-white">
              NEED HELP CHOOSING THE RIGHT PRODUCT?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl">
              Our water treatment chemists are available for plant surveys, scaling analysis, and custom sizing.
            </p>
          </div>
          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#092442] hover:bg-slate-100 rounded-xl font-bold text-sm tracking-wide shadow-sm transition uppercase"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-4 h-4 text-[#0d5ca8]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
