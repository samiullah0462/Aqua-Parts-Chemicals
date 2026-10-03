import React, { useState } from 'react';
import { PageTab } from '../types';
import { COMPANY_INFO, DELIVERY_ZONES } from '../data/mockData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  Truck,
  Building,
  ShieldCheck,
  Calendar,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { WhatsAppIcon } from '../components/SocialIcons';

interface ContactPageProps {
  onNavigate: (tab: PageTab) => void;
  onOpenEmergency: () => void;
  onOpenCalculator: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenEmergency,
  onOpenCalculator,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    inquiryType: 'RO Chemicals & Antiscalants',
    quantity: '',
    zone: 'SITE Area',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello AquaParts Chemicals! I would like to inquire about products and chemical supply for my plant in Karachi.`
    );
    window.open(`https://wa.me/923333307845?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header - Clean Solid Navy */}
      <section className="bg-[#092442] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-slate-800 border border-slate-700 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>Karachi Industrial Supply & Engineering Headquarters</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            GET IN <span className="text-[#009fe3]">TOUCH</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Reach out to our chemical specialists, technical engineering team, or Baldia Town warehouse dispatch for instant quotes, emergency troubleshooting, and certified product availability.
          </p>

          {/* Rapid Contact Badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
            <button
              onClick={handleWhatsAppDirect}
              className="bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-colors shadow-xs"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Chat</span>
            </button>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Karachi Hubs (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Warehouse Depot Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#092442] text-cyan-400 flex items-center justify-center shrink-0 shadow-md">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#092442]">Central Depot & Warehouse</h3>
                  <p className="text-xs text-slate-500 font-medium">Hub River Road, Baldia Town, Karachi</p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <MapPin className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">Physical Facility Address</span>
                    <p className="text-xs text-slate-600 leading-relaxed">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <Clock className="w-5 h-5 text-cyan-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block text-xs uppercase tracking-wider mb-0.5">Operational Hours</span>
                    <p className="text-xs text-slate-600">{COMPANY_INFO.hours}</p>
                    <p className="text-xs text-amber-700 font-medium mt-1">{COMPANY_INFO.sunday}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-red-50 p-3.5 rounded-xl border border-red-100">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-red-900 block text-xs uppercase tracking-wider mb-0.5">Emergency Plant Shutdown?</span>
                    <p className="text-xs text-red-800 leading-relaxed mb-2">
                      24/7 dedicated dispatch team for critical membrane scaling, sudden dP spike, or emergency chemical wash.
                    </p>
                    <button
                      onClick={onOpenEmergency}
                      className="bg-red-700 hover:bg-red-800 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-sm"
                    >
                      Call Emergency Dispatch
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Industrial Delivery Coverage Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-base text-[#092442] flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-cyan-600" />
                  <span>Karachi Same-Day Delivery Zones</span>
                </h3>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                  Active
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                We maintain dedicated delivery vehicles dispatched daily across all primary industrial estates:
              </p>

              <div className="space-y-2.5">
                {DELIVERY_ZONES.map((zone, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <span className="font-bold text-slate-800">{zone.name}</span>
                      <span className="text-slate-400 block text-[11px] truncate max-w-[200px]">{zone.description}</span>
                    </div>
                    <span className="font-bold text-cyan-700 bg-white px-2 py-1 rounded shadow-xs border border-slate-200 shrink-0">
                      {zone.eta}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry & RFQ Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Inquiry Received Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'Valued Customer'}</strong>. Our technical procurement desk will review your requirements for <strong>{formData.inquiryType}</strong> and provide an official quotation within 1–2 business hours.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-2xl max-w-sm mx-auto border border-slate-100 text-xs text-slate-600 space-y-1">
                    <div><strong>Reference:</strong> AQ-RFQ-{Math.floor(100000 + Math.random() * 900000)}</div>
                    <div><strong>Delivery Target:</strong> {formData.zone}</div>
                    <div><strong>Urgent?</strong> Contact directly at {COMPANY_INFO.phone}</div>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          phone: '',
                          email: '',
                          inquiryType: 'RO Chemicals & Antiscalants',
                          quantity: '',
                          zone: 'SITE Area',
                          message: ''
                        });
                      }}
                      className="bg-[#092442] hover:bg-[#0d3b66] text-white font-bold px-6 py-2.5 rounded-xl text-xs transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-cyan-600 font-bold uppercase tracking-wider text-xs bg-cyan-50 px-3 py-1 rounded-full inline-block mb-2">
                      Direct RFQ & Order Desk
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092442]">
                      Request Official Quotation & Stock Availability
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the form below. For bulk industrial chemical drums or container-load inquiries, pricing will include freight to your Karachi site.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Engr. Muhammad Ali"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Company / Plant Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Al-Karam Textile Mills"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0333 1234567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Product / Service Required *
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800 font-medium"
                      >
                        <option value="RO Chemicals & Antiscalants">RO Chemicals & Antiscalants</option>
                        <option value="Alkaline & Acidic CIP Cleaners">Alkaline & Acidic CIP Cleaners</option>
                        <option value="Cartridge Filters (1 & 5 Micron)">Cartridge Filters (1 & 5 Micron)</option>
                        <option value="Liquid Bag Filters & Housings">Liquid Bag Filters & Housings</option>
                        <option value="Dosing Pumps & Automation Skids">Dosing Pumps & Automation Skids</option>
                        <option value="RO Membranes (FilmTec, Toray, Vontron)">RO Membranes (FilmTec, Toray, Vontron)</option>
                        <option value="Mobile CIP Chemical Cleaning Service">Mobile CIP Chemical Cleaning Service</option>
                        <option value="Water Lab Testing & LSI Analysis">Water Lab Testing & LSI Analysis</option>
                        <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Plant Location / Delivery Area *
                      </label>
                      <select
                        value={formData.zone}
                        onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800 font-medium"
                      >
                        <option value="SITE Area, Karachi">SITE Area, Karachi</option>
                        <option value="Korangi Industrial Area">Korangi Industrial Area</option>
                        <option value="Landhi Industrial Estate">Landhi Industrial Estate</option>
                        <option value="Port Qasim Industrial Zone">Port Qasim Industrial Zone</option>
                        <option value="F.B. Area / North Karachi">F.B. Area / North Karachi</option>
                        <option value="Hub Industrial Trading Estate (HITE)">Hub Industrial Trading Estate (HITE)</option>
                        <option value="Nooriabad Industrial Estate">Nooriabad Industrial Estate</option>
                        <option value="Other / Outside Karachi">Other / Outside Karachi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Estimated Quantity / Packaging Preference
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 5x 200L drums of Antiscalant OR 100 pcs 20-inch 5-micron filters"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Specifications, Water TDS, or Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your raw water TDS, operating flow rate (e.g. 25 m³/hr), current chemical brand, or specific delivery timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white text-slate-800"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <div className="flex items-center space-x-2 text-xs text-slate-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Confidential plant data protection guaranteed</span>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto bg-[#092442] hover:bg-[#0d3b66] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Processing RFQ...</span>
                      ) : (
                        <>
                          <span>Send Procurement Request</span>
                          <Send className="w-4 h-4 text-cyan-400" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-cyan-600 font-bold uppercase tracking-wider text-xs bg-cyan-50 px-3 py-1 rounded-full inline-block mb-2">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#092442]">
              Procurement & Delivery Guidelines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                What is your delivery timeframe in Karachi?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Orders placed before 1:00 PM PKT for in-stock RO chemicals, cartridge filters, and spare parts are dispatched for same-day delivery to SITE Area, Baldia, Korangi, Landhi, and North Karachi. Urgent emergency dispatches operate 24/7.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                Do your chemicals come with Certificate of Analysis (COA)?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes, absolutely. Every batch of antiscalant, alkaline cleaner, and acidic descaler includes a lab-certified Certificate of Analysis (COA) specifying specific gravity, neat pH, and active concentration percentages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                What are the payment terms for corporate industrial clients?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We accept bank transfers, crossed cheques, and corporate purchase orders (POs). For verified manufacturing units with ongoing supply contracts, 15 to 30-day credit facilities are available upon vendor verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                Can your engineers visit our site to test our raw bore water?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. Our mobile technical team provides complimentary on-site water conductivity, pH, and hardness testing across Karachi industrial estates, accompanied by complete antiscalant dosage projection reports.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
