import React, { useState, useMemo } from 'react';
import { PageTab, GalleryProject } from '../types';
import { GALLERY_PROJECTS, DELIVERY_ZONES, COMPANY_INFO } from '../data/mockData';
import {
  Layers,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Activity,
  Droplets,
  Truck,
  ExternalLink,
  SlidersHorizontal,
  Building2
} from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenQuote: (projectName?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<GalleryProject | null>(null);

  const categories = useMemo(() => {
    const cats = ['All'];
    GALLERY_PROJECTS.forEach((p) => {
      if (!cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_PROJECTS;
    return GALLERY_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section - Clean Solid Navy */}
      <section className="bg-[#092442] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Field Proven Industrial Installations</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            PROJECT GALLERY & <span className="text-[#009fe3]">INSTALLATIONS</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Engineered water treatment systems deployed across Karachi's industrial zones, including textile processing mills, pharmaceutical cleanrooms, beverage bottling, and marine desalination facilities.
          </p>

          {/* Quick Metrics - Solid Panels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 pt-8 border-t border-slate-800 text-left">
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-cyan-400">100+ Plants</div>
              <div className="text-xs text-slate-300 font-medium">Commissioned in Sindh</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-emerald-400">4.2M+ GPD</div>
              <div className="text-xs text-slate-300 font-medium">Total Daily Purified Output</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-amber-400">98.4%</div>
              <div className="text-xs text-slate-300 font-medium">Flux Recovery via CIP</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-cyan-400">24/7 SLA</div>
              <div className="text-xs text-slate-300 font-medium">Local Engineering Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category Filter Controls */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-slate-200/80 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 w-full sm:w-auto scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    active
                      ? 'bg-[#092442] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-500 font-medium whitespace-nowrap self-end sm:self-auto">
            Showing <strong>{filteredProjects.length}</strong> featured deployment(s)
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/90 overflow-hidden flex flex-col group"
            >
              {/* Image & Overlay Badges */}
              <div className="relative h-60 bg-slate-100 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-[#092442]/90 backdrop-blur-md text-cyan-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    {project.categoryBadge}
                  </span>
                  <span className="bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                    {project.capacityBadge}
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                  {project.highlightBadge}
                </div>

                {/* Location Bar at bottom of image */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium">
                  <div className="flex items-center space-x-1.5 drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1 drop-shadow-md text-slate-200 text-[11px]">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{project.commissioned}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Performance Metrics Table */}
                  <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-4 text-center">
                    {project.metrics.map((metric, i) => (
                      <div key={i}>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">{metric.label}</div>
                        <div className="text-xs font-black text-slate-800 mt-0.5">{metric.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Components Pills */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Key Technology:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.components.map((comp, idx) => (
                        <span
                          key={idx}
                          className="bg-slate-100 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenQuote(`Inquiry for system similar to: ${project.title}`)}
                    className="w-full bg-[#092442] hover:bg-[#0d3b66] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow flex items-center justify-center space-x-1.5"
                  >
                    <span>Inquire Similar Installation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Karachi Industrial Footprint & Rapid Logistics Section */}
        <section className="mt-20 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-xs bg-cyan-50 px-3 py-1 rounded-full inline-block mb-2">
              Logistics & Distribution Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092442]">
              Karachi Industrial Coverage & Dispatch Zones
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our central warehouse on Hub River Road, Baldia Town enables direct rapid response delivery of RO chemicals, cartridge filters, and spare parts across all major industrial clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DELIVERY_ZONES.map((zone, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between hover:border-cyan-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-cyan-700 bg-cyan-100 px-2.5 py-1 rounded-md">
                      {zone.zone}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md flex items-center space-x-1">
                      <Truck className="w-3 h-3" />
                      <span>{zone.eta}</span>
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5">{zone.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{zone.description}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] text-slate-500 flex items-center space-x-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Daily Dispatch Route</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Engineering Consultation Callout - Clean Solid Navy */}
        <section className="mt-16 bg-[#092442] text-white rounded-3xl p-8 sm:p-12 shadow-md border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs bg-slate-800 border border-slate-700 px-3 py-1 rounded-full inline-block mb-3">
              Turnkey System Engineering
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
              Planning a new RO plant or upgrading membrane capacity?
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Our engineering team prepares comprehensive AutoCAD P&ID schematics, membrane projection modeling (AquaScale), and capital expenditure forecasts tailored to your facility's feed water chemistry.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenQuote('Turnkey RO Plant Sizing')}
              className="bg-[#009fe3] hover:bg-[#0088c4] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-xs flex items-center justify-center space-x-2"
            >
              <span>Schedule Engineering Sizing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-5 py-3 rounded-xl text-sm transition-all"
            >
              Contact Our Engineers
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
