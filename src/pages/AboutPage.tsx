import React from 'react';
import { PageTab } from '../types';
import {
  Droplet,
  Shield,
  CheckCircle2,
  Target,
  Eye,
  ShieldCheck,
  DollarSign,
  Truck,
  Headphones,
  Users,
  ClipboardCheck,
  Package,
  Award,
  Handshake,
  Lightbulb,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="w-full">
      {/* ABOUT US HERO */}
      <section className="hero-water-bg py-16 lg:py-24 relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0d5ca8] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#0d5ca8] animate-pulse"></span>
                About Us
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#092442] tracking-tight leading-tight uppercase">
                ABOUT US <br />
                <span className="text-[#22a048]">AQUAPARTS CHEMICALS</span>
              </h1>

              <div className="w-20 h-1.5 bg-[#009fe3] rounded-full"></div>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-2">
                Your trusted partner in water treatment solutions. We are committed to delivering high quality products, reliable service and complete satisfaction to our customers in industrial, commercial and domestic sectors.
              </p>

              {/* Core Quick Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0d5ca8]">100%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Tested Quality</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#22a048]">24/7</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Tech Support</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#092442]">Direct</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">Karachi Delivery</div>
                </div>
              </div>
            </div>

            {/* Right Hero Visual Frame with Dynamic Circular Blue/Green Border */}
            <div className="lg:col-span-6 flex justify-center relative">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center p-3">
                {/* Circular Framing */}
                <div className="absolute inset-0 rounded-full border-[10px] border-[#0d5ca8] opacity-90 scale-95 shadow-2xl"></div>
                <div className="absolute inset-2 rounded-full border-[6px] border-[#22a048] -rotate-12 opacity-80 pointer-events-none"></div>

                {/* Floating Decorative Droplet Badge */}
                <div className="absolute -top-3 right-8 bg-white p-3 rounded-2xl shadow-xl border border-blue-50 flex items-center gap-3 z-20">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#0d5ca8]">
                    <Droplet className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">Pure Water</span>
                    <span className="text-sm font-bold text-[#092442]">Clean & Safe</span>
                  </div>
                </div>

                {/* Main Plant Image Cropped within Graphic Frame */}
                <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden shadow-inner border-4 border-white bg-slate-100 z-10">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkrnQQvR4UyLv-Zja2WMnUGUFWNmfWLt0mFmewwTbEY2kyyKWhtfxo_ORyGE58_xYszHUlRXC3ZswfexgDx-jzXf1rG0wmWEygn_z_Ujlnt3u1GoDHwPUhUZYlgciMt464hns9IHqGI0TV8L24gkE8x5DNRZ2yPhgxCvjZovky6_Xp-7CwaWK97rn1F6dKt69WxkKvQoYxtnUwClVPRHucNHFe_KWZYOe8zhfiynePjRcOOnK2Eoqljw"
                    alt="AquaParts Industrial RO Plant Facility"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Floating Certified Badge */}
                <div className="absolute -bottom-2 left-6 bg-[#092442] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-20 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#22a048] flex items-center justify-center text-white">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-300 font-medium">Guaranteed</p>
                    <p className="text-sm font-bold text-white">Industrial Grade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHO WE ARE / OUR FOUNDATION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-[#0d5ca8] font-bold text-sm uppercase tracking-wider mb-2">Our Foundation</div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092442] uppercase tracking-tight">
                  WHO WE ARE
                </h2>
                <div className="w-14 h-1 bg-[#22a048] rounded-full mt-3"></div>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                <strong className="text-slate-900 font-semibold">AquaParts Chemicals</strong> is a leading supplier of RO chemicals, filters, dosing equipment and water treatment products in Karachi. We provide high quality products that help improve water quality, protect systems and ensure better performance.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                AquaParts Chemicals was established with a vision to deliver superior quality water treatment chemicals, filters and equipment at competitive prices. Over the years, we have built strong relationships with our clients by offering genuine products, technical support and reliable after-sales service.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Our goal is to build long-term relationships with our customers by offering genuine products, competitive prices and excellent customer support. Our continuous focus on quality, innovation and customer satisfaction has made us a preferred choice in the water treatment industry.
              </p>

              {/* Value Points */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#22a048]" />
                  <span>High Quality Standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#22a048]" />
                  <span>Prompt Local Delivery</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#22a048]" />
                  <span>Genuine Certified Products</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#22a048]" />
                  <span>Dedicated Technical Support</span>
                </div>
              </div>
            </div>

            {/* Warehouse Visual */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-50 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw2uTUdGIK3gDrE4NNNRffDJ2fzOeeo6HEtvgIxtDIlZ5upNFaLjbnkMt3DaDrIFMeGcVBRQtj02r58xGkFhu-MWu0bGqSowwsh4OWLz-p-XbQJmJ9kQua4jSn1UHw9OGoDo2fThugfXIFchSJIs13tY2Of-MVcLE30-k6PD96zONfwIkVAcW9zOYugRc0VzzkLolo-UFIoEsfoYjLhKu-nw5g1aZwJfVwWam5ZDbXchhVv0oSw9Wtzg"
                  alt="AquaParts Chemicals Corporate Facility and Operations"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092442]/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 bg-[#22a048] rounded-md text-xs font-bold uppercase tracking-wider mb-2">
                    Karachi Warehouse & Distribution
                  </span>
                  <p className="text-lg font-bold">State-of-the-Art Water Treatment Solutions & Stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR MISSION & VISION */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              <span className="text-[#0d5ca8]">OUR MISSION</span>{' '}
              <span className="text-[#22a048]">& VISION</span>
            </h2>
            <div className="w-16 h-1 bg-[#0d5ca8] mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#0d5ca8] flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-[#0d5ca8] shadow-inner">
                <Target className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#092442]">
                  OUR MISSION
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To provide high quality water treatment products and solutions that ensure clean, safe and reliable water for every customer.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow border-l-4 border-[#22a048] flex flex-col sm:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center shrink-0 text-[#22a048] shadow-inner">
                <Eye className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-[#092442]">
                  OUR VISION
                </h3>
                <p className="text-slate-600 leading-relaxed text-base">
                  To become the most trusted name in water treatment industry by delivering innovative solutions and outstanding service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY CHOOSE US? & OUR NUMBERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Why Choose Us */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092442] uppercase tracking-tight">
                  WHY CHOOSE US?
                </h2>
                <div className="w-16 h-1 bg-[#0d5ca8] rounded-full mt-3"></div>
              </div>

              <div className="space-y-6">
                {/* 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center text-[#0d5ca8] shrink-0 mt-0.5">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#092442]">Quality Products</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      We deal in only tested and trusted products from reliable manufacturers.
                    </p>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center text-[#0d5ca8] shrink-0 mt-0.5">
                    <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#092442]">Competitive Prices</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      Best quality at the most competitive market rates to give you the best value.
                    </p>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center text-[#0d5ca8] shrink-0 mt-0.5">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#092442]">Fast Delivery</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      Timely delivery across Karachi to keep your operations running smoothly.
                    </p>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-blue-200 bg-blue-50/50 flex items-center justify-center text-[#0d5ca8] shrink-0 mt-0.5">
                    <Headphones className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#092442]">Technical Support</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      Expert guidance and support to help you choose the right products for your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Our Numbers Grid */}
            <div className="lg:col-span-6 bg-[#f7fbfe] rounded-3xl p-8 sm:p-10 border border-blue-100/80 shadow-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
                  <span className="text-[#0d5ca8]">OUR</span> <span className="text-[#22a048]">NUMBERS</span>
                </h3>
                <div className="w-12 h-1 bg-[#22a048] mx-auto rounded-full mt-2"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:border-blue-200 transition">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#0d5ca8] shrink-0">
                    <Users className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#092442]">500+</div>
                    <div className="text-sm font-bold text-slate-500">Happy Customers</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:border-blue-200 transition">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#0d5ca8] shrink-0">
                    <ClipboardCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#092442]">1000+</div>
                    <div className="text-sm font-bold text-slate-500">Projects Completed</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:border-blue-200 transition">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#0d5ca8] shrink-0">
                    <Package className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#092442]">500+</div>
                    <div className="text-sm font-bold text-slate-500">Products</div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-5 hover:border-blue-200 transition">
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-[#0d5ca8] shrink-0">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#092442]">5+</div>
                    <div className="text-sm font-bold text-slate-500">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR CORE VALUES */}
      <section className="py-20 bg-slate-50/60 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              <span className="text-[#0d5ca8]">OUR</span> <span className="text-[#22a048]">CORE VALUES</span>
            </h2>
            <div className="w-16 h-1 bg-[#22a048] mx-auto rounded-full mt-3"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Value 1 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0d5ca8] group-hover:bg-[#0d5ca8] group-hover:text-white transition duration-300 mx-auto flex items-center justify-center mb-5 text-2xl shadow-inner">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-base text-[#092442] uppercase tracking-wide mb-2">QUALITY FIRST</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We ensure the highest quality in every product we deliver.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-full bg-green-50 text-[#22a048] group-hover:bg-[#22a048] group-hover:text-white transition duration-300 mx-auto flex items-center justify-center mb-5 text-2xl shadow-inner">
                <Handshake className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-base text-[#092442] uppercase tracking-wide mb-2">CUSTOMER FOCUS</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our customers are at the heart of everything we do.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0d5ca8] group-hover:bg-[#0d5ca8] group-hover:text-white transition duration-300 mx-auto flex items-center justify-center mb-5 text-2xl shadow-inner">
                <Lightbulb className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-base text-[#092442] uppercase tracking-wide mb-2">INNOVATION</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We continuously improve our products and services to meet evolving needs.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 group">
              <div className="w-16 h-16 rounded-full bg-green-50 text-[#22a048] group-hover:bg-[#22a048] group-hover:text-white transition duration-300 mx-auto flex items-center justify-center mb-5 text-2xl shadow-inner">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-extrabold text-base text-[#092442] uppercase tracking-wide mb-2">INTEGRITY</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We believe in honest business practices and long-term relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR TEAM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-3xl font-extrabold uppercase text-[#092442]">OUR TEAM</h3>
                <div className="w-12 h-1 bg-[#0d5ca8] rounded-full"></div>
                <p className="text-slate-600 leading-relaxed text-base">
                  We have a dedicated team of professionals with expertise in water treatment solutions. Our team is always ready to understand your needs and provide the best solutions for your business.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFY_cCUhP0RMwPem0Q-UlnKP_G5VuVRN_AquLHdhwZHDxnPskzXv14RnrWs4bKqv1Xr7fJdHqTOw-UJ-d3wAk3YpK9ZLmzDaKSjf7uBnubnQaUYatxjiNHGHZWjoWd4nCy_uCGXu3r9u29k_raDBHsL2qE3o5UT4WWfkOOGqMs_Oq9LVrkfhPBhGnBDxNzP8RwCnAmxiRG-A0wJYrjAEOhi1Zu-LHiy8PJyPzvUxFH8YYZacL2gCOT8g"
                    alt="AquaParts Chemicals Dedicated Team"
                    className="w-full h-auto object-cover max-h-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRE-FOOTER CTA STRIP */}
      <section className="cta-water-bg text-white py-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">
              LET’S WORK TOGETHER
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-xl">
              We are here to provide the best water treatment solutions for your business.
            </p>
          </div>
          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-white text-[#092442] hover:bg-slate-100 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 uppercase"
            >
              <span>CONTACT US NOW</span>
              <ArrowRight className="w-4 h-4 text-[#0d5ca8]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
