import React, { useState } from 'react';
import { PageTab, ServiceItem } from '../types';
import { SERVICES, COMPANY_INFO } from '../data/mockData';
import {
  Wrench,
  Droplet,
  FlaskConical,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  AlertTriangle,
  FileCheck,
  Flame,
  Award,
  Calendar,
  Sparkles
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenQuote: (serviceTitle?: string) => void;
  onOpenEmergency: () => void;
  onOpenCalculator: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenEmergency,
  onOpenCalculator,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const processSteps = [
    {
      step: '01',
      title: 'Water Analysis & Audit',
      desc: 'Our mobile lab team conducts on-site SDI testing, conductivity mapping, and detailed ion chromatography to diagnose mineral or biological fouling risks.',
      icon: FlaskConical
    },
    {
      step: '02',
      title: 'Projection & Chemistry Sizing',
      desc: 'Using computerized antiscalant projection algorithms, we formulate exact threshold inhibitor requirements and custom CIP descaling recipes.',
      icon: Droplet
    },
    {
      step: '03',
      title: 'Execution & Calibration',
      desc: 'Our certified technicians deploy mobile CIP skids or install automated metering pumps, logging delta-P and flux recovery before handing over.',
      icon: Wrench
    },
    {
      step: '04',
      title: 'AMC & 24/7 SLA Guarantee',
      desc: 'Continuous preventive audits, scheduled filter element changeouts, and guaranteed under-4-hour emergency response across Karachi industrial estates.',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section - Clean Solid Navy */}
      <section className="bg-[#092442] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Industrial Field Support & Technical Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            WATER TREATMENT <span className="text-[#009fe3]">SERVICES</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From mobile membrane CIP chemical cleaning and computerized dosage optimization to turnkey RO installations and 24/7 emergency response across Karachi's industrial zones.
          </p>

          {/* Quick Stats Banner - Solid panels */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8 pt-8 border-t border-slate-800 text-left">
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-cyan-400">&lt; 4 Hours</div>
              <div className="text-xs text-slate-300 font-medium">Karachi Emergency Dispatch</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-emerald-400">98% Recovery</div>
              <div className="text-xs text-slate-300 font-medium">Membrane Flux Restoration</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-amber-400">100+ Plants</div>
              <div className="text-xs text-slate-300 font-medium">Under Active AMC Coverage</div>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700">
              <div className="text-xl md:text-2xl font-black text-cyan-400">Free Projections</div>
              <div className="text-xs text-slate-300 font-medium">Water Analysis & LSI Reports</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Callout Ribbon */}
      <section className="bg-red-700 text-white py-3 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center space-x-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-300 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">
              Facing sudden high differential pressure (dP), sudden permeate drop, or scaling alarm?
            </span>
          </div>
          <button
            onClick={onOpenEmergency}
            className="bg-white text-red-700 hover:bg-red-50 font-bold px-4 py-1.5 rounded-lg text-xs uppercase tracking-wider transition-colors shrink-0 shadow"
          >
            Dispatch Emergency Crew
          </button>
        </div>
      </section>

      {/* Main Services Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-cyan-600 font-bold uppercase tracking-wider text-xs bg-cyan-50 px-3 py-1 rounded-full inline-block mb-2">
            Engineering Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092442]">
            Comprehensive Field & Laboratory Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Every service is executed by certified water treatment specialists equipped with calibrated instrumentation and genuine chemicals.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/90 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Code */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {service.tag}
                  </span>
                  <span className="text-slate-400 font-mono text-xs font-semibold bg-slate-100 px-2.5 py-1 rounded-md">
                    {service.serviceCode}
                  </span>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#092442] mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Specs Box */}
                <div className="grid grid-cols-2 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
                  {service.specs.map((spec, i) => (
                    <div key={i} className="text-xs">
                      <div className="text-slate-400 font-medium">{spec.label}</div>
                      <div className="font-bold text-slate-900 mt-0.5">{spec.value}</div>
                    </div>
                  ))}
                </div>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Scope of Work:</h4>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action and Footer Badge */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs font-medium text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-cyan-600" />
                  <span>{service.footerNote}</span>
                </div>
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="w-full sm:w-auto bg-[#092442] hover:bg-[#0d3b66] text-white font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm transition-all shadow flex items-center justify-center space-x-2"
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-xs bg-cyan-50 px-3 py-1 rounded-full inline-block mb-2">
              Engineering Workflow
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092442]">
              How We Service Your Water Infrastructure
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              A disciplined, scientific approach ensuring maximum membrane longevity and lowest OPEX per cubic meter of pure water.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden group hover:border-cyan-400 transition-all"
                >
                  <div className="text-4xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors absolute top-3 right-4 select-none">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-[#092442] group-hover:text-cyan-400 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interactive Lab Sample & Dosage CTA */}
        <section className="mt-16 bg-gradient-to-br from-[#092442] to-[#07192d] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-cyan-500/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-cyan-400 font-bold uppercase tracking-wider text-xs bg-cyan-950/80 border border-cyan-400/30 px-3 py-1 rounded-full inline-block">
                Complimentary Water Analysis & Sizing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Send Us Your Raw Water Parameters for a Free Scaling Projection
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you draw brackish bore water in SITE or municipal pipeline feed in Port Qasim, our in-house lab calculates your exact Langelier Saturation Index (LSI), Stiff & Davis Index, and recommends stoichiometric antiscalant dosing rates to protect your membrane investment.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onOpenQuote('Water Sample Submission')}
                  className="bg-[#009fe3] hover:bg-[#0088c4] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center space-x-2"
                >
                  <FlaskConical className="w-4 h-4" />
                  <span>Book Free Sample Pickup</span>
                </button>
                <button
                  onClick={onOpenCalculator}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3 rounded-xl text-sm transition-all flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Self-Calculate LSI Online</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 space-y-4">
              <h3 className="font-bold text-base text-cyan-300 flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Service Response Guarantees</span>
              </h3>
              <ul className="text-xs text-slate-300 space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Karachi Metro:</strong> Within 2–4 hours emergency technician on site.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Hub & Nooriabad:</strong> Same day chemical stock delivery & technician visits.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Interior Sindh:</strong> 24-hour scheduled mobile CIP rig deployment.</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-white/10 text-center">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct Hotline: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
